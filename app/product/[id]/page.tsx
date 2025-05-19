    import AddToCartButton from '@/components/AddToCartButton '
    import { StarIcon } from '@heroicons/react/16/solid'
    import Image from 'next/image'
    import { notFound } from 'next/navigation'
    import React from 'react'


    async function getProduct(id: number) {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`,{
             cache: 'no-store' // For SSR (use 'force-cache' for SSG)
        })
        if (!res.ok) return undefined
        return res.json()
    }
    const ProductDetails = async ({ params }: { params: Promise<{ id: string }> }) => {
        const { id } = await params
        const product = await getProduct(Number(id))

        if (!product) {
            notFound()
        }

        return (
            <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                    <div className="mb-8 lg:mb-0">
                        <div className="bg-gray-100 rounded-lg overflow-hidden aspect-square relative">
                            <Image
                                src={product.image}
                                alt={product.title}
                                className="object-contain p-8"
                                priority
                                fill
                                quality={85}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

                            />
                        </div>
                    </div>
                    <div className="lg:pl-8">
                        <h1 className="text-3xl font-bold text-gray-900 mb-4">
                            {product.title}
                        </h1>
                        <div className="mb-8">
                            <h2 className="text-lg font-medium text-gray-900 mb-2">
                                Description
                            </h2>
                            <p className="text-gray-600">{product.description}</p>
                        </div>
                        <p className="text-2xl font-semibold text-gray-900 mb-6">
                            ${product.price}
                        </p>
                        <div className="flex items-center mb-6">
                            <div className="flex items-center mr-2">
                                {[0, 1, 2, 3, 4].map((rating) => (
                                    <StarIcon
                                        key={rating}
                                        className={`h-5 w-5 ${product.rating.rate > rating
                                            ? 'text-yellow-400'
                                            : 'text-gray-300'
                                            }`}
                                    />
                                ))}
                            </div>
                            <span className="text-gray-600">
                                {product.rating.rate} ({product.rating.count} reviews)
                            </span>
                        </div>

                        <AddToCartButton product={product} />
                    </div>
                </div>
            </div>
        )
    }

    export default ProductDetails