import { gsap } from 'gsap';
import { FC, useEffect, useRef, useState } from 'react';

const MAXIMUM_COUNT = 10;

const CounterEffect: FC = () => {
  const [count, setCount] = useState(5);
  const counterElement = useRef<HTMLHeadingElement>(null);

  const handleClick = (arg: string) => {
    if (arg === '+1') {
      // setCount((prev) => (prev + 1 >= MAXIMUM_COUNT ? 10 : prev + 1));
      setCount((prev) => Math.min(prev + 1, MAXIMUM_COUNT));
    } else {
      setCount((prev) => prev - 1);
    }
  };

  useEffect(() => {
    if (count < 10) return;
    console.log('Max value reached');

    const timeLine = gsap.timeline();

    timeLine.to(counterElement.current, {
      y: -10,
      duration: 0.2,
      ease: 'ease.out',
    });
    timeLine.to(counterElement.current, {
      y: 0,
      duration: 1,
      ease: 'bounce.out',
    });
  }, [count]);

  return (
    <>
      <h1>CounterEffect</h1>
      <h2 ref={counterElement}>{count}</h2>
      <button onClick={() => handleClick('+1')}>+ 1</button>
    </>
  );
};

export default CounterEffect;
