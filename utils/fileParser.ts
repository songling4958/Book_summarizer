import fs from 'fs/promises';
import pdfParse from 'pdf-parse';

export const parseFile = async (file: File): Promise<string[]> => {
    const filePath = file.name;
    const fileExtension = filePath.split('.').pop();

    let text: string;
    if (fileExtension === 'pdf') {
        const dataBuffer = await fs.readFile(filePath);
        const pdfData = await pdfParse(dataBuffer);
        text = pdfData.text;
    } else if (fileExtension === 'txt') {
        text = await fs.readFile(filePath, 'utf-8');
    } else {
        throw new Error('Unsupported file type');
    }

    const chapters = text.split(/Chapter [0-9]+/i);
    return chapters.filter((chapter) => chapter.length > 0);
}