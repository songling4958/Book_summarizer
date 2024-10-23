'use client';

import React, { useState } from 'react';

interface FileUploadProps {
    onFileUpload: (file: File) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileUpload }) => {
    const [file, setFile] = useState<File | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if(event.target.files) {
            setFile(event.target.files[0]);
        }
    }

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if(file) {
            onFileUpload(file);
        }
    }

    return (
        <div className='p-6 max-w-lg mx-auto bg-white rounded-xl shadow-md space-y-4'>
            <h2 className='text-xl font-semibold'>Upload your Book (PDF or TXT)</h2>
            <form onSubmit={handleSubmit} className='space-y-4'>
                <input type="file" accept='.pdf, .txt' onChange={handleFileChange} className='w-full px-3 py-2 border border-gray-300 rounded-md' />
                <button type='submit' className='w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700'>Upload and Summarize</button>
            </form>
        </div>
    )
}

export default FileUpload;