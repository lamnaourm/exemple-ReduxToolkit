import React from 'react'
import { useDispatch } from 'react-redux'
import { decrement, increment, initialise } from '../redux/CounterSlice';

export default function Operations() {

    const dispatch = useDispatch();

  return (
    <div>
        <button onClick={() => dispatch(increment(2))}>Incrementer</button>
        <button onClick={() => dispatch(decrement(3))}>Incrementer</button>
        <button onClick={() => dispatch(initialise())}>Incrementer</button>
    </div>
  )
}
