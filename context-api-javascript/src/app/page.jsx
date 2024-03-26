"use client"

import { GlobalContext } from '@/context/GlobalContext'
import { decrement, increment } from '@/context/actions/counterActions';
import React, { useContext } from 'react'

const Home = () => {
  const { counterState, counterDispatch } = useContext(GlobalContext);

  return (
    <div>
      <h2>Count is: {counterState.count}</h2>
      <button onClick={() => counterDispatch(increment(2))}>Increment</button>
      <button onClick={() => counterDispatch(decrement(2))}>Decrement</button>
    </div>
  )
}

export default Home