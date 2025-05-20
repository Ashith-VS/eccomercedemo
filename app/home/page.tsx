import ProductCard from '@/components/ProductCard'
import { Product } from '@/types/product'
import React from 'react'

const getProducts = async () => {
    try {
        const res = await fetch('https://fakestoreapi.com/products', {
            cache: 'no-store'
        })
        if (!res.ok) return []
        return res.json()
    } catch (err) {
        console.error('Failed to load products', err)
        return []
    }
}

const Home = async () => {
    const products = await getProducts()

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            {products?.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products.map((product: Product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>) : (
                <div className="h-screen flex justify-center items-center">
                    <p className=" text-gray-500">
                        No products found.
                    </p>
                </div>
            )}
        </div>
    )
}

export default Home