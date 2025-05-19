"use client"
import Link from 'next/link'
import React from 'react'
import { Product } from '@/types/product'
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/16/solid'
interface ProductCardProps {
    product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {

    return (
        <Link
            href={`/product/${product.id}`}
            className="group relative bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
        >
            <div className="aspect-square bg-gray-100 relative">
                <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    priority
                    className="object-contain w-full h-full p-4 group-hover:opacity-90 transition-opacity"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
            </div>

            <div className="p-4">
                <h3 className="text-sm font-medium text-gray-900 mb-1 line-clamp-2">
                    {product.title}
                </h3>
                <div className="flex justify-between items-center mt-3">
                    <p className="text-lg font-semibold text-gray-900">
                        ${product.price}
                    </p>
                </div>
                <div className="flex items-center mb-2">
                    <div className="flex items-center">
                        {[0, 1, 2, 3, 4].map((rating) => (
                            <StarIcon
                                key={rating}
                                className={`h-4 w-4 ${product.rating.rate > rating
                                    ? 'text-yellow-400'
                                    : 'text-gray-300'
                                    }`}
                                aria-hidden="true"
                            />
                        ))}
                    </div>
                    <span className="text-xs text-gray-500 ml-1">
                        ({product.rating.count})
                    </span>
                </div>
            </div>
        </Link>
    )
}

export default ProductCard