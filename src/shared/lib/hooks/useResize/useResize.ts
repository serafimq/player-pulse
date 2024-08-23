import React from 'react';
import {SCREEN_LG, SCREEN_MD, SCREEN_SM, SCREEN_XL} from '../../../consts/breakpoints';

export const useResize = () => {
    const [width, setWidth] = React.useState(window.innerWidth);

    React.useEffect(() => {
      const handleResize = (event: UIEvent) => {
        setWidth((event.target as Window).innerWidth);
      };
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    return {
      width,
      isScreenSm: width >= SCREEN_SM,
      isScreenMd: width >= SCREEN_MD,
      isScreenLg: width >= SCREEN_LG,
      isScreenXl: width >= SCREEN_XL,
    };
}