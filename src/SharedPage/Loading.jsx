import React from 'react';

const Loading = () => {
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <span className="loading loading-bars loading-xs text-purple-700"></span>
            <span className="loading loading-bars loading-sm text-purple-700"></span>
            <span className="loading loading-bars loading-md text-purple-700"></span>
            <span className="loading loading-bars loading-lg text-purple-700"></span>
            <span className="loading loading-bars loading-xl text-purple-700"></span>
        </div>
    );
};

export default Loading;