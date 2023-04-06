import { gsap } from 'gsap';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';

export const useCounter = ({ maxCount = 10 }) => {
  const [count, setCount] = useState(5);
  const elementToAnimate = useRef<any>(null);
  const timeLine = useRef(gsap.timeline());

  const handleClick = (arg: string) => {
    if (arg === '+1') {
      // setCount((prev) => (prev + 1 >= MAXIMUM_COUNT ? 10 : prev + 1));
      setCount((prev) => Math.min(prev + 1, maxCount));
    } else {
      setCount((prev) => prev - 1);
    }
  };
  useLayoutEffect(() => {
    if (!elementToAnimate.current) return;
    timeLine.current
      .to(elementToAnimate.current, {
        y: -10,
        duration: 0.2,
        ease: 'ease.out',
      })
      .to(elementToAnimate.current, {
        y: 0,
        duration: 1,
        ease: 'bounce.out',
      })
      .pause();
  }, []);

  useEffect(() => {
    timeLine.current.play(0);
  }, [count]);

  return {
    count,
    handleClick,
    elementToAnimate,
  };
};
