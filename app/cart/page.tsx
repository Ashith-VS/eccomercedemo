"use client"
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { clearCart, decrementQuantity, incrementQuantity, removeItemFromCart } from '@/redux/slice/cartSlice'
import { RootState } from '@/redux/store'
import { Product } from '@/types/product'
import { MinusIcon, PlusIcon, XMarkIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { toast } from 'react-toastify'

const Cart = () => {
    const dispatch = useAppDispatch()
    const { cartItems } = useAppSelector((state: RootState) => state.cart)


    const handleRemoveFromCart = (item: Product) => {
        dispatch(removeItemFromCart(item.id))
        toast.success("Items removed from cart")
    }

    if (cartItems.length === 0) {
        return (
            <div className="h-screen flex items-center justify-center">
                <div className="max-w-2xl mx-auto px-4 py-16 text-center">
                    <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
                    <Link
                        href="/"
                        className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
                    >
                        Continue Shopping
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold mb-8">Your Shopping Cart</h1>
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                {/* Cart Items */}
                <div className="lg:col-span-8">
                    <div className="divide-y divide-gray-200">
                        {cartItems.map((item: any) => {
                            return (
                                <div key={item.id} className="py-6 flex">
                                    <div className="flex-shrink-0 w-24 h-24 bg-gray-100 rounded-md overflow-hidden relative">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-contain p-2"
                                            sizes="(max-width: 640px) 50vw, 25vw"
                                            priority={false}
                                        />
                                    </div>

                                    <div className="ml-4 flex-1">
                                        <div className="flex justify-between">
                                            <h2 className="text-lg font-medium text-gray-900 line-clamp-2">
                                                {item.title}
                                            </h2>
                                            <button
                                                onClick={() => handleRemoveFromCart(item)}
                                                className="text-gray-400 hover:text-gray-500"
                                            >
                                                <XMarkIcon className="h-5 w-5" />
                                            </button>
                                        </div>

                                        <div className="mt-2 flex items-center justify-between">
                                            <div className="flex items-center">
                                                <button
                                                    onClick={() => dispatch(decrementQuantity(item.id))}
                                                    className="p-1 rounded-full bg-gray-200 hover:bg-gray-300"
                                                >
                                                    <MinusIcon className="h-4 w-4 text-gray-700" />
                                                </button>

                                                <span className="px-2 text-sm font-medium">{item.quantity}</span>

                                                <button
                                                    onClick={() => dispatch(incrementQuantity(item.id))}
                                                    className="p-1 rounded-full bg-gray-200 hover:bg-gray-300"
                                                >
                                                    <PlusIcon className="h-4 w-4 text-gray-700" />
                                                </button>
                                            </div>

                                            <p className="text-lg font-semibold">
                                                ${(item.price * item.quantity).toFixed(2)}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                        <button
                            className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 transition-colors"
                            onClick={() => {
                                dispatch(clearCart())
                                toast.success('Checkout Successfully')
                            }}
                        >
                            Checkout
                        </button>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default Cart