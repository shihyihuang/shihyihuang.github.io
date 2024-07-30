import React, { useState, useEffect } from 'react';

const CountdownTimer: React.FC = () => {
    const [counter, setCounter] = useState<number>(60);

    useEffect(() => {
      const timer = setInterval(() => {
        setCounter((prevCounter) => {
          if (prevCounter <= 1) {
            return 60;
          }
          return prevCounter - 1;
        });
      }, 1000);
    
      return () => clearInterval(timer);
    }, []);

  return (
    <div className="max-w-full overflow-x-hidden">
        <div className="flex flex-wrap justify-center gap-2 text-center">
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
    </div>
  );
};

export default CountdownTimer;