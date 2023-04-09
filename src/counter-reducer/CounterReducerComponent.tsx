import { FC, useReducer } from 'react';

import { CounterState } from './interfaces/interfaces';
import { counterReducer } from './reducer/counterReducer';
import { doIncreaseBy, doReset } from './actions/actions';

const INITIAL_STATE: CounterState = {
  counter: 0,
  previous: 0,
  changes: 0,
};

const CounterReducerComponent: FC = () => {
  const [{ counter, changes, previous }, dispatch] = useReducer(
    counterReducer,
    INITIAL_STATE
  );

  const handleReset = () => {
    dispatch(doReset());
  };

  const increaseBy = (val: number) => {
    dispatch(doIncreaseBy(val));
  };

  return (
    <>
      <h1>Counter Reducer Component: {counter}</h1>
      <h2>Changes: {changes}</h2>
      <h2>Previous: {previous}</h2>
      <button onClick={() => increaseBy(1)}>+ 1</button>
      <button onClick={() => increaseBy(5)}>+ 5</button>
      <button onClick={() => increaseBy(10)}>+ 10</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};

export default CounterReducerComponent;
