import React, { useState, useEffect } from 'react';

const LocalTimeDisplay = () => {
    // 1. State to hold the formatted time string
    const [currentTime, setCurrentTime] = useState('');

    const updateLocalTime = () => {
        const now = new Date();
        
        const options = { 
            hour: '2-digit', 
            minute: '2-digit', 
            second: '2-digit',
            timeZoneName: 'short' 
        };
        
        const timeString = now.toLocaleTimeString(undefined, options); 
        
        setCurrentTime(timeString);
    };
    
    useEffect(() => {
        
        updateLocalTime(); 
        
        const intervalId = setInterval(updateLocalTime, 1000); 

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className='fixed bottom-4 left-4 text-sm text-[#a1a1a1] font-normal leading-normal hidden md:block z-1'>
            <p><span>{currentTime}</span></p> 
        </div>
    );
};

export default LocalTimeDisplay;