import React from "react";

interface ProgressIndicatorProps {
    progress: number;
}

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({ progress }) => {
    return (
        <div className="text-center py-8">
            <h3 className="text-lg font-medium">Processing: {progress}</h3>
            <progress className="w-full h-4" value={progress} max={"100"}></progress>
        </div>
    )
}

export default ProgressIndicator;