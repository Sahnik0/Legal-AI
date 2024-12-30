import { GeminiResponse } from '../types';

const API_KEY = "AIzaSyA7VGu1DuPyUiOf2gjd2pUkxkI_bE6g_z8";
const API_URL = "https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent";

export const getLegalAdvice = async (query: string): Promise<string> => {
  try {
    const response = await fetch(`${API_URL}?key=${API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            "text": `You are a professional legal assistant with expertise in men's rights and legal issues in India. Your goal is to provide short, precise, and actionable legal advice based on the problem I describe. Mention the specific law, section, or clause relevant to the issue and clearly state steps that can be taken to avoid legal trouble or resolve the matter. Do not include any asterisks or unnecessary symbols in your response. Always address me as YOU in your reply. Keep your answers professional and focused on providing clarity. Avoid excessive elaboration or irrelevant information. Your response should empower me with practical knowledge and actionable insights. Here is the problem I am describing for you to address:  ${query}`
          }]
        }]
      })
    });

    if (!response.ok) {
      throw new Error('Failed to get response from AI');
    }

    const data: GeminiResponse = await response.json();
    
    if (!data.candidates?.[0]?.content?.parts?.[0]?.text) {
      throw new Error('Invalid response format');
    }

    return data.candidates[0].content.parts[0].text;
  } catch (error) {
    console.error('Error getting legal advice:', error);
    return 'I apologize, but I am unable to provide legal advice at the moment. Please try again later.';
  }
};