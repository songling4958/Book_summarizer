import { NextResponse } from 'next/server';
import multer from 'multer';
import { summarizeAndGenerateImages } from '@/utils/summarizerController';

const upload = multer({ dest: 'uploads/' });

export const POST = async (req: Request) => {
    const formData = await req.formData();
    const file = formData.get('file') as File;

    if(!file) {
        return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    try {
        const summaries = await summarizeAndGenerateImages(file);
        return NextResponse.json({ summaries });
    } catch (error) {
        return NextResponse.json({ error: 'Error processing the file' }, { status: 500 });
    }
}