import React from "react";

interface Summary {
    text: string;
    image: string;
}

interface SummaryDisplayProps {
    summaries: Summary[];
}

const SummaryDisplay: React.FC<SummaryDisplayProps> = ({ summaries }) => {
    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-4">Summaries and Images</h2>
            {summaries.map((summary, index) => (
                <div key={index} className="p-4 border rounded-lg shadow-md bg-white space-y-4">
                    <h3 className="text-xl font-semibold">Chapter {index + 1}</h3>
                    <p className="text-gray-700">{summary.text}</p>
                    <img src={summary.image} alt={`Chapter ${index + 1} Image`} className="w-full h-auto rounded-md" />
                </div>
            ))}
        </div>
    )
}

export default SummaryDisplay;