import React, { useState, useEffect, useRef } from 'react';
import { Typography } from '@mui/material';

interface CountdownTimerProps {
  status: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({status}) => {
    const [counter, setCounter] = useState<number>(60);
    const [missedCount, setMissedCount] = useState<number>(0);
    const hasIncrementedRef = useRef<boolean>(false);

    useEffect(() => { if (status === 'success'){
      setCounter(60);
      setMissedCount(0);
    }}, [status]);

    useEffect(() => {
      const timer = setInterval(() => {
        setCounter((prevCounter) => {
          if (prevCounter <= 1) {
            if (!hasIncrementedRef.current) {
              setMissedCount(prevMissed => prevMissed + 1);
              hasIncrementedRef.current = true;
            }
            return 60;
          }
          hasIncrementedRef.current = false;
          return prevCounter - 1;
        });
      }, 1000);
  
      return () => clearInterval(timer);
    }, []);

  return (
    <div className="max-w-full overflow-x-hidden">
        <Typography className='!text-3xl !mt-5 text-info text-center' gutterBottom>
            Beat the Buzzer
        </Typography>
        <div className="flex flex-wrap justify-center gap-2 text-center mt-5">
            <div className="flex flex-col p-3 rounded-box bg-secondary text-primary">
                <span className="countdown text-5xl">
                <span style={{ '--value': 0 } as React.CSSProperties}></span>
                </span>
                hours
            </div>
            <div className="flex flex-col p-3 rounded-box bg-secondary text-primary">
                <span className="countdown text-5xl">
                <span style={{ '--value': 0 } as React.CSSProperties}></span>
                </span>
                min
            </div>
            <div className="flex flex-col p-3 rounded-box bg-neutral text-primary">
                <span className="countdown text-5xl">
                <span style={{ '--value': counter } as React.CSSProperties}></span>
                </span>
                sec
            </div>
        </div>
        <Typography className='!text-xl !mt-5 text-info text-center' gutterBottom>
            Time to connect is slipping away ! 
            <br/>
            Missed chances: {missedCount}
        </Typography>
    </div>
  );
};

export default CountdownTimer;