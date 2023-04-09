import { CounterAction } from '../actions/actions';
import { CounterState } from '../interfaces/interfaces';

export const counterReducer = (
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
