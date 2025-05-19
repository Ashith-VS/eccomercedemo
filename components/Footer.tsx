import Link from 'next/link'
import { HeartIcon } from '@heroicons/react/24/outline'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-gray-50 border-t mt-12">
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <Link href="/" className="text-xl font-bold text-indigo-600">
                            ShopNest
                        </Link>
                        <p className="text-gray-500 text-sm mt-2">
                            Your one-stop e-commerce destination
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-sm font-semibold text-gray-900 mb-3">Shop</h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link href="/" className="text-gray-500 hover:text-indigo-600 text-sm">
                                        All Products
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/cart" className="text-gray-500 hover:text-indigo-600 text-sm">
                                        Your Cart
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-500 text-sm flex items-center">
                        <HeartIcon className="h-4 w-4 mr-1 text-red-500" />
                        Made with love for the web
                    </p>
                    <p className="text-gray-500 text-sm mt-4 md:mt-0">
                        &copy; {currentYear} ShopNest. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}