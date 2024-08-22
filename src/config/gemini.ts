import { GoogleGenerativeAI, SchemaType } from "@google/generative-ai";
import { GoogleAIFileManager } from "@google/generative-ai/server";

const initGemini = new GoogleGenerativeAI(import.meta.env.GEMINI_API_KEY);
const initFileManager = new GoogleAIFileManager(import.meta.env.GEMINI_API_KEY);

export const gemini = initGemini.getGenerativeModel({
    model: "gemini-1.5-flash",
    generationConfig: {
        responseMimeType: "application/json",
        responseSchema: {
            type: SchemaType.OBJECT,
            properties: {
                "ats_compilance": {
                    "type": SchemaType.OBJECT,
                    "properties": {
                        "score": { "type": SchemaType.INTEGER, description: "Score 0 to 100" },
                        "feedback": { "type": SchemaType.STRING }
                    },
                    "required": ["score", "feedback"]
                },
                "clarity_format": {
                    "type": SchemaType.OBJECT,
                    "properties": {
                        "score": { "type": SchemaType.INTEGER, description: "Score 0 to 100" },
                        "feedback": { "type": SchemaType.STRING }
                    },
                    "required": ["score", "feedback"]
                },
                "experience": {
                    "type": SchemaType.OBJECT,
                    "properties": {
                        "score": { "type": SchemaType.INTEGER, description: "Score 0 to 100" },
                        "feedback": { "type": SchemaType.STRING }
                    },
                    "required": ["score", "feedback"]
                },
                "education": {
                    "type": SchemaType.OBJECT,
                    "properties": {
                        "score": { "type": SchemaType.INTEGER, description: "Score 0 to 100" },
                        "feedback": { "type": SchemaType.STRING }
                    },
                    "required": ["score", "feedback"]
                },
                "technical_skills": {
                    "type": SchemaType.OBJECT,
                    "properties": {
                        "score": { "type": SchemaType.INTEGER, description: "Score 0 to 100" },
                        "feedback": { "type": SchemaType.STRING }
                    },
                    "required": ["score", "feedback"]
                },
                "soft_skills": {
                    "type": SchemaType.OBJECT,
                    "properties": {
                        "score": { "type": SchemaType.INTEGER, description: "Score 0 to 100" },
                        "feedback": { "type": SchemaType.STRING }
                    },
                    "required": ["score", "feedback"]
                },
                "links_contact": {
                    "type": SchemaType.OBJECT,
                    "properties": {
                        "score": { "type": SchemaType.INTEGER, description: "Score 0 to 100" },
                        "feedback": { "type": SchemaType.STRING }
                    },
                    "required": ["score", "feedback"]
                },
                "clarity_conciseness_writing": {
                    "type": SchemaType.OBJECT,
                    "properties": {
                        "score": { "type": SchemaType.INTEGER, description: "Score 0 to 100" },
                        "feedback": { "type": SchemaType.STRING }
                    },
                    "required": ["score", "feedback"]
                },
                "technical_language_usage": {
                    "type": SchemaType.OBJECT,
                    "properties": {
                        "score": { "type": SchemaType.INTEGER, description: "Score 0 to 100" },
                        "feedback": { "type": SchemaType.STRING }
                    },
                    "required": ["score", "feedback"]
                },
                "grammar_spelling": {
                    "type": SchemaType.OBJECT,
                    "properties": {
                        "score": { "type": SchemaType.INTEGER, description: "Score 0 to 100" },
                        "feedback": { "type": SchemaType.STRING }
                    },
                    "required": ["score", "feedback"]
                },
                "professional_tone": {
                    "type": SchemaType.OBJECT,
                    "properties": {
                        "score": { "type": SchemaType.INTEGER, description: "Score 0 to 100" },
                        "feedback": { "type": SchemaType.STRING }
                    },
                    "required": ["score", "feedback"]
                }
            }
        }
    }
})

export const geminiFileManager = initFileManager;