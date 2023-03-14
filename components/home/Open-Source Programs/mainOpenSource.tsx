import { useState, useCallback, useEffect } from 'react';
import PcOpenSource from './pcOpenSource';
import MobileOpensource from './mobileOpenSource';
const useMediaQuery = (width: number) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e: { matches: any }) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addEventListener('change', (e) => updateTarget(e));
    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeEventListener('change', (e) => updateTarget(e));
  }, []);

  return targetReached;
};

const OpenSourcePrograms = () => {
  return (
    <div>
      <div>
        <PcOpenSource />
      </div>
    </div>
  );
};

export default OpenSourcePrograms;
