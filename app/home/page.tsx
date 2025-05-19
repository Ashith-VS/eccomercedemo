import ProductCard from '@/components/ProductCard'
import { Product } from '@/types/product'
import React from 'react'

async function getProducts() {
    const res = await fetch('https://fakestoreapi.com/products', {
        cache: 'no-store' // For SSR (use 'force-cache' for SSG
    })
    if (!res.ok) throw new Error('Failed to fetch products')
    return res.json()
}

const Home = async () => {
    const products = await getProducts()
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product: Product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}

export default Home