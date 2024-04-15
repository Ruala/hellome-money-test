import { useState, useEffect, useCallback } from "react";

function useScreenWidth() {
  const isWindow = typeof window === "object";

  const [windowSize, setWindowSize] = useState({
    width: isWindow && window.innerWidth,
  });

  const setSize = useCallback(() => {
    if (isWindow) {
      setWindowSize({
        width: window.innerWidth,
      });
    }
  }, [isWindow]);

  useEffect(() => {
    if (isWindow) {
      window.addEventListener("resize", setSize, { passive: true });
    }

    return () => {
      if (isWindow) {
        window.removeEventListener("resize", setSize);
      }
    };
  }, [isWindow, setSize]);

  const { width } = windowSize;

  return {
    isMobile: width < 640,
    isDesktop: width >= 1024,
  };
}

export default useScreenWidth;
