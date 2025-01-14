// import Anthropic from "@anthropic-ai/sdk"
import { HfInference } from '@huggingface/inference'

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe.
`

//             If I had Money (T_T)
// const anthropic = new Anthropic({
//     // Make sure you set an environment variable in Scrimba 
//     // for ANTHROPIC_API_KEY
//     apiKey: process.env.ANTHROPIC_API_KEY,
//     dangerouslyAllowBrowser: true,
// })

// export async function getRecipeFromChefClaude(ingredientsArr) {
//     const ingredientsString = ingredientsArr.join(", ")

//     const msg = await anthropic.messages.create({
//         model: "claude-3-haiku-20240307",
//         max_tokens: 1024,
//         system: SYSTEM_PROMPT,
//         messages: [
//             { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` },
//         ],
//     });
//     return msg.content[0].text
// }

// for HF_ACCESS_TOKEN

const hf = new HfInference("Your API Key"); // Replace with your Hugging Face API token
export async function getRecipeFromMistral(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ");
    try {
        const response = await hf.textGeneration({
            model: "mistralai/Mistral-Nemo-Instruct-2407",  // Using the gemma-2-2b model from Hugging Face
            inputs: `${SYSTEM_PROMPT}\n\nI have ${ingredientsString}. Please give me a recipe you'd recommend I make!`,
            parameters: {
                max_new_tokens: 1024,   // Max tokens for recipe generation
                temperature: 0.7,       // Control the randomness (creativity)
                top_p: 0.9,             // Use top-p sampling for diversity
            },
        });

        return response.generated_text;  // Access the generated recipe
    } catch (err) {
        console.error("Error generating recipe:", err.message);
        return "Sorry, I couldn't generate a recipe. Please try again later.";
    }
}