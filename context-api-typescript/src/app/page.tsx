"use client"

import { useGlobalContext } from '@/context/GlobalContext'
import { decrement, increment, resetCounter } from '@/context/actions/counterActions';

const Home = () => {
  const { counterState, counterDispatch } = useGlobalContext();

  const handleIncrement = (amount: number): void => {
    counterDispatch(increment(amount));
  };

  const handleDecrement = (amount: number): void => {
    counterDispatch(decrement(amount));
  };

  const handleReset = (): void => {
    counterDispatch(resetCounter());
  };

  return (
    <div>
      <h2>Count is: {counterState.count}</h2>
      <button onClick={() => handleIncrement(2)}>Increment</button>
      <button onClick={() => handleDecrement(2)}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default Home