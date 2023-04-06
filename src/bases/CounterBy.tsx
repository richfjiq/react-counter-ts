import { FC, useState } from 'react';

interface Props {
  initialValue?: number;
}

interface CounterState {
  counter: number;
  clicks: number;
}

const CounterBy: FC<Props> = ({ initialValue = 5 }) => {
  const [{ counter, clicks }, setCount] = useState<CounterState>({
    counter: initialValue,
    clicks: 0,
  });

  const handleClick = (arg: string) => {
    setCount(({ clicks, counter }) => ({
      counter: counter + Number(arg),
      clicks: clicks + 1,
    }));
  };

  return (
    <>
      <h1>Counter By</h1>
      <button onClick={() => handleClick('+1')}>+ 1</button>
      <button onClick={() => handleClick('+5')}>+ 5</button>
      <button onClick={() => handleClick('-1')}>- 1</button>
      <h3>Count: {counter}</h3>
      <h3>Clicks: {clicks}</h3>
    </>
  );
};

export default CounterBy;
