import 'dotenv/config'
import OpenAI from "openai";

const openai = new OpenAI({apiKey: process.env.GPT_KEY});

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ 
      role: "user", 
      content: `Your query here` 
    }],
    model: "gpt-4",
  });

  return completion.choices[0].message.content;
}

console.log(await main());
