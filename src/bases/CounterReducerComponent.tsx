import { FC, useReducer } from 'react';

interface CounterState {
  counter: number;
  previous: number;
  changes: number;
}

const INITIAL_STATE: CounterState = {
  counter: 0,
  previous: 0,
  changes: 0,
};

type CounterAction =
  | {
      type: 'increaseBy';
      payload: { value: number };
    }
  | {
      type: 'reset';
    };

const counterReducer = (
  state: CounterState,
  action: CounterAction
): CounterState => {
  switch (action.type) {
    case 'reset':
      return {
        counter: 0,
        changes: 0,
        previous: 0,
      };
    case 'increaseBy':
      return {
        counter: state.counter + action.payload.value,
        changes: state.changes++,
        previous: state.counter,
      };
    default:
      return state;
  }
};

const CounterReducerComponent: FC = () => {
  const [{ counter, changes, previous }, dispatch] = useReducer(
    counterReducer,
    INITIAL_STATE
  );

  const handleReset = () => {
    dispatch({ type: 'reset' });
  };

  const increaseBy = (val: number) => {
    dispatch({ type: 'increaseBy', payload: { value: val } });
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
