import React, { useState, useEffect } from 'react';

const LocalTimeDisplay = () => {
    // 1. State to hold the formatted time string
    const [currentTime, setCurrentTime] = useState('');

    const updateLocalTime = () => {
        const now = new Date();
        
        // Hours, minutes, and the time zone abbreviation display options
        const options = { 
            hour: '2-digit', 
            minute: '2-digit', 
            second: '2-digit',
            timeZoneName: 'short' 
        };
        
        // Visitor's local settings to format time
        const timeString = now.toLocaleTimeString(undefined, options); 
        
        setCurrentTime(timeString);
    };
    
    // useEffect to manage the timed update

    useEffect(() => {
        
        updateLocalTime(); 
        
        const intervalId = setInterval(updateLocalTime, 1000); 

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className='fixed top-4 z-50 right-4 text-sm text-[#a1a1a1] font-normal leading-normal '>
            <p>Local Time: <span>{currentTime}</span></p> 
        </div>
    );
};

export default LocalTimeDisplay;