import axios from 'axios';

const OPENAI_API_KEY = process.env.OPENAI_API_KEY as string;

export const getSummaries = async (chapter: string): Promise<string> => {
    const response = await axios.post(
        'https://api.openai.com/v1/completions',
        {
            model: 'gpt-4',
            prompt: `Summarize this chapter:\n${chapter}`,
            max_tokens: 500,
        }, {
            headers: {
                Authorization: `Bearer ${OPENAI_API_KEY}`
            }
        }
    )

    return response.data.choices[0].text.trim();
}

export const generateImage = async (prompt: string): Promise<string> => {
    const response = await axios.post(
        'https://api.openai.com/v1/images/generations',
        {
            prompt: prompt,
            n: 1,
            size: '1024x1024'
        }, {
            headers: {
                Authorization: `Bearer ${OPENAI_API_KEY}`
            }
        }
    )

    return response.data.data[0].url;
}