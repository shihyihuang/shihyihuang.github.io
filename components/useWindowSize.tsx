import { useState, useEffect } from 'react';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';

const useWindowSize = () => {
  const [size, setSize] = useState<SizeProp>('sm'); // Default size

  useEffect(() => {
    const determineSize = (width: number): SizeProp => {
      if (width <= 600) {
        return 'lg';
      } else if (width < 1280) {
        return 'xl';
      } else {
        return 'xl';
      }
    };

    const handleResize = () => {
      setSize(determineSize(window.innerWidth));
    };

    if (typeof window !== 'undefined') {
      handleResize(); 
      window.addEventListener('resize', handleResize); 

      return () => window.removeEventListener('resize', handleResize); // Clean up on unmount
    }
  }, []);

  return size;
};

export default useWindowSize;
