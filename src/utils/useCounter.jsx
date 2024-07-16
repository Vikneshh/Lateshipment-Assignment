import { useState, useEffect } from "react";
import useIntersectionObserver from "./useIntersectionObserver";

const useCounter = (target) => {
  const [count, setCount] = useState(0);
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });

  useEffect(() => {
    if (isIntersecting && count < target) {
      const interval = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 20);

      return () => clearInterval(interval);
    }
  }, [isIntersecting, count, target]);

  return [ref, count];
};

export default useCounter;
