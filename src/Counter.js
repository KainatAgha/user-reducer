import React, { useReducer } from 'react';
import './Counter.css'; // Import the CSS file

// Reducer function for the counter
const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      throw new Error('Unknown action.');
  }
};

// Component using useReducer for counter
const Counter = () => {
  // Initial state for the counter
  const initialCounterState = { count: 0 };

  // useReducer hook
  const [counterState, dispatch] = useReducer(counterReducer, initialCounterState);

  return (
    <div>
        <h1 className='app-heading'>Counter App</h1>
    <div className="counter-container">
      <button className="increment-button" onClick={() => dispatch({ type: 'INCREMENT' })}>
        Increment
      </button>
      <button className="decrement-button" onClick={() => dispatch({ type: 'DECREMENT' })}>
        Decrement
      </button>
      <p className="count-display">Count: {counterState.count}</p>
    </div>
    </div>
  );
};

export default Counter;
