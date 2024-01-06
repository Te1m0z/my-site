import { useState, useEffect } from 'react'
import type { TAppTheme } from '@/shared'

const useThemeDetector = (): TAppTheme => {

  const isClient = typeof window === 'object';

  const getIsDarkMedia = () => window.matchMedia("(prefers-color-scheme: dark)")

  const getCurrentTheme = () => isClient ? getIsDarkMedia().matches : false;

  const [isDarkTheme, setIsDarkTheme] = useState(getCurrentTheme());  

  const mqListener = ((e: MediaQueryListEvent) => setIsDarkTheme(e.matches));
  
  useEffect(() => {
    const darkThemeMq = getIsDarkMedia();
    darkThemeMq.addEventListener('change', mqListener);

    return () => darkThemeMq.removeEventListener('change', mqListener);
  }, []);

  return isDarkTheme ? 'dark' : 'light';
}

export {
  useThemeDetector
}
