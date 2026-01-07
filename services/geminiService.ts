import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getFoodRecommendation = async (userQuery: string): Promise<string> => {
  try {
    const model = 'gemini-3-flash-preview';
    const systemInstruction = `You are a helpful, enthusiastic food delivery concierge for an app called "TastyFlow". 
    Your goal is to suggest types of food or specific cuisines based on the user's mood or request.
    Keep the response short, appetizing, and fun (under 50 words). 
    Do not mention specific real-world restaurants outside of generic names like "Sushi Zen" or "Burger Kingpin" if they fit context, but mostly focus on dish types.`;

    const response = await ai.models.generateContent({
      model,
      contents: userQuery,
      config: {
        systemInstruction,
        thinkingConfig: { thinkingBudget: 0 } // Speed over deep thought for this
      },
    });

    return response.text || "I couldn't think of a recommendation, but our menu looks great!";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having a little trouble connecting to the food spirits right now. Try exploring the menu!";
  }
};
