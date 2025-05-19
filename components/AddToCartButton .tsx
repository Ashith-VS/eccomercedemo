"use client"
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { addItemToCart, CartItem } from '@/redux/slice/cartSlice'
import { RootState } from '@/redux/store'
import { Product } from '@/types/product'
import { ShoppingCartIcon } from '@heroicons/react/16/solid'
import React from 'react'
import { toast } from 'react-toastify'

const AddToCartButton = ({ product }: { product: Product }) => {
  const dispatch = useAppDispatch()
  const { cartItems } = useAppSelector((state: RootState) => state.cart)

  const cartItemExists = cartItems.find((item: CartItem) => item.id === product.id);
  const handleAddToCart = () => {
    if (cartItemExists) {
      toast.info(`${product.title} is already in the cart`);
    } else {
      dispatch(addItemToCart(product));
      toast.success(`${product.title} added to cart!`);
    }
  }


  return (
    <button
      onClick={handleAddToCart}
      className="w-full md:w-auto flex items-center justify-center px-8 py-3 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition-colors"
    >
      <ShoppingCartIcon className="h-5 w-5 mr-2" />
      {cartItemExists ? 'Added to cart' : 'Add to Cart'}
    </button>
  )
}

export default AddToCartButton 