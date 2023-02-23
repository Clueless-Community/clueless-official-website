import { useState, useCallback, useEffect } from 'react';
import PcOpenSource from './pcOpenSource';
import MobileOpensource from './mobileOpenSource'; 
const useMediaQuery = (width: number) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`)
    media.addEventListener('change', e => updateTarget(e))
   if (media.matches) {
      setTargetReached(true)
    }

    return () => media.removeEventListener('change', e => updateTarget(e))
  }, [])

  return targetReached;
};



const Navbar = () => {
   const isBreakpoint = useMediaQuery(768)
   return (
    <div>
      { isBreakpoint ? (
        <div>
          <MobileOpensource />
        </div>
      ) : (
        <div>
           <PcOpenSource />
        </div>
   )
   }
   </div>
   );
}


export default Navbar;