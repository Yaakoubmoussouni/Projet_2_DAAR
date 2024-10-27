// src/components/LoadingSpinner.jsx
import React from 'react';

const LoadingSpinner = () => {
    return (
        <div className="flex justify-center items-center h-screen flex-col">
            <div>
                <p className='m-4 text-2xl'>✪ Patience Trainer, it's loading ✪</p>
            </div>
            <div className="w-16 h-16 border-4 border-yellow-500 border-dashed rounded-full animate-spin"></div>
        </div>
    );
};

export default LoadingSpinner;
