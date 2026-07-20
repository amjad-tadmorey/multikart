import Link from "next/link";
import { RiEqualizer2Line, RiHeartFill, RiPhoneFill, RiSearchLine, RiShoppingCartLine, RiUser3Fill } from '@remixicon/react'

export default function Header() {
    return (
        <header className="w-full shadow-sm bg-white/80 backdrop-blur-md">
            <div className="flex items-center justify-between bg-dark text-light px-30 text-sm">
                <div className="flex items-center">
                    <p className="py-2.5 pr-6">Welcome to Our store Multikart</p>
                    <p className="flex items-center">
                        <RiPhoneFill
                            size={16}
                            className="text-brand shrink-0 mr-2"
                        />
                        Call Us: 123 - 456 - 7890
                    </p>
                </div>
                <div className="flex items-center">
                    <RiHeartFill
                        size={16}
                        className="text-light hover:scale-110 transition-transform cursor-pointer"
                    />
                    <p className="flex items-center gap-2 pl-8">
                        <RiUser3Fill
                            className="text-light"
                            size={16}
                        />
                        My Account
                    </p>
                </div>
            </div>

            <div className="mx-auto flex py-8 max-w-6xl items-center justify-between px-4">
                <div className="flex items-center gap-6">
                    <div>
                        nav
                    </div>
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 font-bold text-xl text-blue-600 tracking-tight">
                        <img src="/logo.png" alt="" className="w-40" />
                    </Link>
                </div>

                <div className="flex items-center gap-12">
                    {/* Navigation Links */}
                    <nav className="hidden md:flex items-center gap-10 text-md font-medium text-dark">
                        <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
                        <Link href="/" className="hover:text-blue-600 transition-colors">Feature</Link>
                        <Link href="/" className="hover:text-blue-600 transition-colors">Shop</Link>
                        <Link href="/products" className="hover:text-blue-600 transition-colors">Product</Link>
                        <Link href="/about" className="hover:text-blue-600 transition-colors">Pages</Link>
                        <Link href="/contact" className="hover:text-blue-600 transition-colors">Blog</Link>
                    </nav>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-4 text-gray">
                        <RiSearchLine />
                        <RiEqualizer2Line />
                        <RiShoppingCartLine />

                    </div>
                </div>
            </div>
        </header>
    );
}
