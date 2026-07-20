"use client"
import React from 'react';
import Link from 'next/link';
// Make sure to install 'remixicon-react' or use standard global Remix Icon classes

export default function Footer() {
    return (
        <footer className="w-full bg-[#222222] font-sans text-lighter text-sm px-20">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">

                {/* Brand / Contact Column */}
                <div className="space-y-4">
                    <div className="flex items-center space-x-1">
                        <img src="/logo-2.png" alt="" className='w-35' />
                    </div>
                    <p className="leading-relaxed">
                        Discover the latest trends and enjoy seamless shopping with our exclusive collections.
                    </p>
                    <div className="space-y-3 pt-2">
                        <div className="flex items-start space-x-3">
                            {/* <MapPinLineIcon className="w-4 h-4 text-[#f07c4c] mt-1 flex-shrink-0" /> */}
                            <span>Multikart Demo Store,<br />Demo Store India 345-659</span>
                        </div>
                        <div className="flex items-center space-x-3">
                            {/* <PhoneLineIcon className="w-4 h-4 text-[#f07c4c] flex-shrink-0" /> */}
                            <span>Call Us: 123-456-7898</span>
                        </div>
                        <div className="flex items-center space-x-3">
                            {/* <MailLineIcon className="w-4 h-4 text-[#f07c4c] flex-shrink-0" /> */}
                            <span>Email Us: Support@Multikart.Com</span>
                        </div>
                    </div>
                </div>

                {/* Categories Column */}
                <div>
                    <h4 className="text-white font-bold tracking-wider uppercase mb-4">Categories</h4>
                    <ul className="space-y-2.5 text-lg">
                        <li>
                            <Link href="#" className="hover:text-[#f07c4c] transition-colors">
                                <h2 className="relative text-lighter w-fit pb-1 group/text cursor-pointer">
                                    Baby Essentials
                                    {/* Animated Underline Element */}
                                    <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#f07c4c] transition-all duration-300 ease-out group-hover/text:w-full" />
                                </h2>
                                <h2 className="relative text-lighter w-fit pb-1 group/text cursor-pointer">
                                    Bag Emporium
                                    {/* Animated Underline Element */}
                                    <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#f07c4c] transition-all duration-300 ease-out group-hover/text:w-full" />
                                </h2>
                                <h2 className="relative text-lighter w-fit pb-1 group/text cursor-pointer">
                                    Books
                                    {/* Animated Underline Element */}
                                    <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#f07c4c] transition-all duration-300 ease-out group-hover/text:w-full" />
                                </h2>
                                <h2 className="relative text-lighter w-fit pb-1 group/text cursor-pointer">
                                    Christmas
                                    {/* Animated Underline Element */}
                                    <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#f07c4c] transition-all duration-300 ease-out group-hover/text:w-full" />
                                </h2>
                                <h2 className="relative text-lighter w-fit pb-1 group/text cursor-pointer">
                                    Classic Furnishings
                                    {/* Animated Underline Element */}
                                    <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#f07c4c] transition-all duration-300 ease-out group-hover/text:w-full" />
                                </h2>
                                <h2 className="relative text-lighter w-fit pb-1 group/text cursor-pointer">
                                    Crystal Clarity Optics
                                    {/* Animated Underline Element */}
                                    <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#f07c4c] transition-all duration-300 ease-out group-hover/text:w-full" />
                                </h2>
                            </Link>
                        </li>

                    </ul>
                </div>

                {/* Useful Links Column */}
                <div>
                    <h4 className="text-white font-bold tracking-wider uppercase mb-4">Useful Links</h4>
                    <ul className="space-y-2.5">
                        <h2 className="relative text-lighter w-fit pb-1 group/text cursor-pointer">
                            Home
                            {/* Animated Underline Element */}
                            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#f07c4c] transition-all duration-300 ease-out group-hover/text:w-full" />
                        </h2>
                        <h2 className="relative text-lighter w-fit pb-1 group/text cursor-pointer">
                            Collections
                            {/* Animated Underline Element */}
                            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#f07c4c] transition-all duration-300 ease-out group-hover/text:w-full" />
                        </h2>
                        <h2 className="relative text-lighter w-fit pb-1 group/text cursor-pointer">
                            About Us
                            {/* Animated Underline Element */}
                            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#f07c4c] transition-all duration-300 ease-out group-hover/text:w-full" />
                        </h2>
                        <h2 className="relative text-lighter w-fit pb-1 group/text cursor-pointer">
                            Blogs
                            {/* Animated Underline Element */}
                            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#f07c4c] transition-all duration-300 ease-out group-hover/text:w-full" />
                        </h2>
                        <h2 className="relative text-lighter w-fit pb-1 group/text cursor-pointer">
                            Offers
                            {/* Animated Underline Element */}
                            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#f07c4c] transition-all duration-300 ease-out group-hover/text:w-full" />
                        </h2>
                        <h2 className="relative text-lighter w-fit pb-1 group/text cursor-pointer">
                            Search
                            {/* Animated Underline Element */}
                            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#f07c4c] transition-all duration-300 ease-out group-hover/text:w-full" />
                        </h2>
                    </ul>
                </div>

                {/* Help Center Column */}
                <div>
                    <h4 className="text-white font-bold tracking-wider uppercase mb-4">Help Center</h4>
                    <ul className="space-y-2.5">
                        <h2 className="relative text-lighter w-fit pb-1 group/text cursor-pointer">
                            My Account
                            {/* Animated Underline Element */}
                            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#f07c4c] transition-all duration-300 ease-out group-hover/text:w-full" />
                        </h2>
                        <h2 className="relative text-lighter w-fit pb-1 group/text cursor-pointer">
                            My Orders
                            {/* Animated Underline Element */}
                            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#f07c4c] transition-all duration-300 ease-out group-hover/text:w-full" />
                        </h2>
                        <h2 className="relative text-lighter w-fit pb-1 group/text cursor-pointer">
                            Track Order
                            {/* Animated Underline Element */}
                            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#f07c4c] transition-all duration-300 ease-out group-hover/text:w-full" />
                        </h2>
                        <h2 className="relative text-lighter w-fit pb-1 group/text cursor-pointer">
                            Wishlist
                            {/* Animated Underline Element */}
                            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#f07c4c] transition-all duration-300 ease-out group-hover/text:w-full" />
                        </h2>
                        <h2 className="relative text-lighter w-fit pb-1 group/text cursor-pointer">
                            Faq's
                            {/* Animated Underline Element */}
                            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#f07c4c] transition-all duration-300 ease-out group-hover/text:w-full" />
                        </h2>
                        <h2 className="relative text-lighter w-fit pb-1 group/text cursor-pointer">
                            Contact Us
                            {/* Animated Underline Element */}
                            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#f07c4c] transition-all duration-300 ease-out group-hover/text:w-full" />
                        </h2>
                    </ul>
                </div>

                {/* Newsletter Column */}
                <div className="space-y-4">
                    <h4 className="text-white font-bold tracking-wider uppercase">Follow Us</h4>
                    <p className="leading-relaxed">
                        Never Miss Anything From Store By Signing Up To Our Newsletter.
                    </p>
                    <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
                        <input
                            type="email"
                            placeholder="Enter Email Address"
                            className="w-full px-4 py-2.5 bg-white text-gray-800 focus:outline-none text-sm placeholder-gray-400"
                            required
                        />
                        <button
                            type="submit"
                            className="w-full bg-[#f07c4c] text-white py-2.5 font-semibold text-sm hover:bg-[#d96636] transition-colors tracking-wide"
                        >
                            Subscribe
                        </button>
                    </form>
                    {/* Social Icons */}
                    <div className="flex items-center space-x-2 pt-2">
                        <Link href="#" className="p-2 bg-[#2d2d2d] text-gray-400 hover:text-white hover:bg-[#f07c4c] transition-colors rounded-sm">
                            {/* <FacebookFillIcon className="w-4 h-4" /> */}
                        </Link>
                        <Link href="#" className="p-2 bg-[#2d2d2d] text-gray-400 hover:text-white hover:bg-[#f07c4c] transition-colors rounded-sm">
                            {/* <TwitterFillIcon className="w-4 h-4" /> */}
                        </Link>
                        <Link href="#" className="p-2 bg-[#2d2d2d] text-gray-400 hover:text-white hover:bg-[#f07c4c] transition-colors rounded-sm">
                            {/* <InstagramLineIcon className="w-4 h-4" /> */}
                        </Link>
                        <Link href="#" className="p-2 bg-[#2d2d2d] text-gray-400 hover:text-white hover:bg-[#f07c4c] transition-colors rounded-sm">
                            {/* <PinterestFillIcon className="w-4 h-4" /> */}
                        </Link>
                    </div>
                </div>

            </div>

            {/* Sub-Footer (Copyright & Payments) */}
            <div className="w-full bg-[#1e1e1e] border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
                    <p>© 2024-25 themeforest powered by pixelstrap</p>

                    {/* Payment Badges Mockup */}
                    <div className="flex items-center space-x-1.5 opacity-80">
                        <span className="px-1.5 py-0.5 bg-[#1b3160] text-white font-bold rounded-sm text-[10px]">AMEX</span>
                        <span className="px-1.5 py-0.5 bg-white text-black font-semibold rounded-sm text-[10px]"> Pay</span>
                        <span className="px-1.5 py-0.5 bg-white text-blue-600 font-bold rounded-sm text-[10px]">G Pay</span>
                        <span className="px-1.5 py-0.5 bg-[#ff5f00] text-white font-bold rounded-sm text-[10px]">mastercard</span>
                        <span className="px-1.5 py-0.5 bg-[#0079c1] text-white font-bold rounded-sm text-[10px]">Pay</span>
                        <span className="px-1.5 py-0.5 bg-[#1a1f71] text-white font-italic font-bold rounded-sm text-[10px]">VISA</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
