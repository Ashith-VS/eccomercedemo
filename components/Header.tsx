"use client"
import { useAppSelector } from '@/redux/hooks'
import { RootState } from '@/redux/store'
import { ShoppingCartIcon } from '@heroicons/react/16/solid'
import Link from 'next/link'
import React from 'react'

const Header = () => {
    const { cartItems } = useAppSelector((state: RootState) => state.cart)

    return (
        <header className="bg-white shadow-sm sticky top-0 z-10">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link href="/" className="text-xl font-bold text-indigo-600">
                    ShopNest
                </Link>
                <nav className="flex items-center space-x-6">
                    <Link
                        href="/"
                        className="text-gray-600 hover:text-indigo-600 transition-colors"
                    >
                        Home
                    </Link>
                    <div className="relative">
                        <Link
                            href="/cart"
                            className="text-gray-600 hover:text-indigo-600 transition-colors flex items-center"
                        >
                            <ShoppingCartIcon className="h-8 w-8" />
                            {cartItems.length > 0 && (
                                <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                                    {cartItems.length}
                                </span>
                            )}
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header