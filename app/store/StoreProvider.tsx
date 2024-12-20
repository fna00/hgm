/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { store } from '@/app/store/store'
import { Provider } from 'react-redux';

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode
}) {

  return <Provider store={store}>{children as any}</Provider>
}