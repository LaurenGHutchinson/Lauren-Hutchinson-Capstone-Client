import OpenAI from "openai";

const openai = new OpenAI({apiKey: process.env.OPEN_API_KEY});

const runPrompt = async () => {

    const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
            { role: "system", content: "For a given job title, categorize a thorough list of the skills required for the role. For each category there should be at least five skills. The output should be an array of string objects with the keys skill, and category." },
            {
                role: "user",
                content: "Software Engineering",
            },
        ],
    });
    console.log(completion.choices[0].message);
}

runPrompt();