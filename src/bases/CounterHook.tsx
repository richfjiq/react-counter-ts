import { useCounter } from '../hooks/useCounter';

const CounterHook = () => {
  const { count, elementToAnimate, handleClick } = useCounter({ maxCount: 15 });

  return (
    <>
      <h1>CounterHook</h1>
      <h2 ref={elementToAnimate}>{count}</h2>
      <button onClick={() => handleClick('+1')}>+ 1</button>
    </>
  );
};

export default CounterHook;
