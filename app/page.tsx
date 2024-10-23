'use client';

import React, { useState } from 'react';
import FileUpload from '@/components/FileUpload';
import ProgressIndicator from '@/components/ProgressIndicator';
import SummaryDisplay from '@/components/SummaryDisplay';

interface Summary {
  text: string;
  image: string;
}

export default function Home() {
  const [summaries, setSummaries] = useState<Summary[]>([]);
  const [progress, setProgress] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const handleFileUpload = async (file: File) => {
    setLoading(true);
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch('/api/summarizer', {
      method: 'POST',
      body: formData
    })

    const data = await response.json();
    setSummaries(data.summaries);
    setProgress(100);
    setLoading(false);
  }

  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-4xl font-bold mb-8 text-center'>Book Summarizer</h1>
      {
        loading ? (
          <ProgressIndicator progress={progress} />
        ) : summaries.length > 0 ? (
          <SummaryDisplay summaries={summaries} />
        ) : (
          <FileUpload onFileUpload={handleFileUpload} />
        )
      }
    </div>
  )
}