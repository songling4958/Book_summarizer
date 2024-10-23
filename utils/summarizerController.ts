import { parseFile } from './fileParser';
import { getSummaries, generateImage } from './openaiUtils';

interface Summary {
    text: string;
    image: string;
}

export const summarizeAndGenerateImages = async (file: File): Promise<Summary[]> => {
    const chapters = await parseFile(file);

    const summaries: Summary[] = [];

    for(let i = 0; i < chapters.length; i++) {
        const chapter = chapters[i];
        
        const summaryText = await getSummaries(chapter);
        const chapterImage = await generateImage(`Illustrate a scene from this summary: ${summaryText}`);
        
        summaries.push({
            text: summaryText,
            image: chapterImage
        })
    }

    return summaries;
}