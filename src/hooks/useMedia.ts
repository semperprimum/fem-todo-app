import { useEffect, useState } from "react";

export const useMedia = (mediaQuery: string): boolean => {
  const [isMatch, setIsMatch] = useState<boolean>(false);

  useEffect(() => {
    const mediaWatcher = window.matchMedia(mediaQuery);
    setIsMatch(mediaWatcher.matches);

    function updateIsMatch(e: MediaQueryListEvent) {
      setIsMatch(e.matches);
    }
    mediaWatcher.addEventListener("change", updateIsMatch);

    return function cleanup() {
      mediaWatcher.removeEventListener("change", updateIsMatch);
    };
  }, [mediaQuery]);

  return isMatch;
};
