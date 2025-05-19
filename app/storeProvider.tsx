'use client'
import { makeStore } from '@/redux/store'
import { ReactNode, useRef } from 'react'
import { Provider } from 'react-redux'

interface StoreProviderProps {
    children: ReactNode; // ReactNode is a type that includes any valid React child (string, number, JSX, etc.)
}

export default function StoreProvider({ children }: StoreProviderProps) {
    const storeRef = useRef<any>(null)
    if (!storeRef.current) {
        // Create the store instance the first time this renders
        storeRef.current = makeStore()
    }

    return <Provider store={storeRef.current}>{children}</Provider>
}