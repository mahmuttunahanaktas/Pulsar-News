import React from 'react';

function NotFound() {
    return (
        <div className='h-screen w-100 flex flex-col justify-center items-center'>
            <h1 className='text-9xl font-mono'>404</h1>
            <p className='text-2xl font-sans'>Oops! The page you're looking for doesn't exist.</p>
        </div>
    );
}

export default NotFound;
