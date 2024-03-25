"use client"

import { GlobalContext } from '@/context/GlobalContext'
import { decrement, increment } from '@/context/actions/counterActions';
import React, { useContext } from 'react'

const Home = () => {
  const { state, dispatch } = useContext(GlobalContext);

  return (
    <div>
      <h2>Count is: {state.counter.count}</h2>
      <button onClick={() => dispatch(increment(2))}>Increment</button>
      <button onClick={() => dispatch(decrement(2))}>Decrement</button>
    </div>
  )
}

export default Home