'use client';

// import { redirect } from "next/navigation";

import React from 'react'
import type { RootState } from '@/app/store/store'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './store/slice'

export default function Home() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()
  // redirect("/en/home");
  return (
    <div className='mt-6 text-black outline'>
      asdasdasds
      <div>
        <button
          aria-label="Increment value"
            onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}
