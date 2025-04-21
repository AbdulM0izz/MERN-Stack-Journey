import React, { useReducer } from 'react';

// Step 1: Reducer Function
const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: 0 };
    default:
      return state;
  }
};

// Step 2: Component
const Counter = () => {
  const initialState = { count: 0 };

  // Step 3: useReducer Hook
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Count: {state.count}</h2>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>➕ Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>➖ Decrement</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>🔄 Reset</button>
    </div>
  );
};

export default Counter;
