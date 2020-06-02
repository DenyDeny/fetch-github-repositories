import React, { useState, useEffect } from 'react';

// Helpers
import formatTime from '../../helpers/formatTime';

function Timer({ updatedAt }) {
  const [time, setTime] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      const formattedTime = formatTime(updatedAt);
      setTime(formattedTime)
    }, 1000);
    return () => clearInterval(intervalId);
  }, [updatedAt]);

  return (
    <div>
      { time }
    </div>
  )
}

export default Timer;
