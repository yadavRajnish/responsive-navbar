import { useState, useEffect } from "react";

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState<any>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setMatches(window.matchMedia(query).matches);
      const mediaQueryList = window.matchMedia(query);

      const handleChange = () => setMatches(mediaQueryList.matches);

      mediaQueryList.addListener(handleChange);
      return () => mediaQueryList.removeListener(handleChange);
    }
  }, [query]);

  return matches;
};

export default useMediaQuery;
