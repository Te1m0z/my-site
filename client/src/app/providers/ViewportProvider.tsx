import { useMemo, useState, useEffect, createContext, type ReactElement } from 'react';
import { BREAKPOINTS, debounce } from '@/shared';

type ViewportProviderProps = {
  children: ReactElement | ReactElement[];
}

const ViewportContext = createContext({
  screenSize: 'xxl'
})

const ViewportProvider = ({ children }: ViewportProviderProps) => {
  //
  const [screenSize, setScreenSize] = useState('xxl')
  //
  function getScreenSize() {
    //
    const width = window.innerWidth
    //
    let currentSize = 'xxl'
    //
    for (const [sizeName, sizeValue] of Object.entries(BREAKPOINTS)) {
      //
      if (width < parseInt(sizeValue)) currentSize = sizeName
    }
    //
    return currentSize
  }
  //
  function handleResize() {
    //
    const newSize = getScreenSize();
    //
    console.log(newSize);
    //
    if (newSize !== screenSize) setScreenSize(newSize)
  }
  //
  useEffect(() => {
    //
    const resizeCallback = debounce(handleResize, 200)
    //
    window.addEventListener('resize', resizeCallback)
    //
    return () => {
      window.removeEventListener('resize', handleResize)
    }
    //
  }, [])
  //

  const viewportProviderValue = useMemo(() => {
    return {
      screenSize,
    }
  }, [screenSize])

  return (
    <ViewportContext.Provider
      value={viewportProviderValue}
    >
      {children}
    </ViewportContext.Provider>
  )
};

export {
    ViewportProvider,
    ViewportContext
}