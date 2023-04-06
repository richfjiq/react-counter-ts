import { FC, useState } from 'react';

interface Props {
  initialValue?: number;
}

const Counter: FC<Props> = ({ initialValue = 0 }) => {
  const [count, setCount] = useState(initialValue);

  const handleClick = (arg: string) => {
    if (arg === '+1') {
      setCount((prev) => prev + 1);
    } else {
      setCount((prev) => prev - 1);
    }
  };

  return (
    <>
      <h1>Counter</h1>
      <button onClick={() => handleClick('+1')}>+ 1</button>
      <h3>Count {count}</h3>
    </>
  );
};

export default Counter;
