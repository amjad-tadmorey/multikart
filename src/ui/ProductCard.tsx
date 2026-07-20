import React from 'react';

type Product = {
    img: string;
    title: string;
    des: string;
    price: number;
    compareAtPrice: number;
    discount: number;
};

type ProductCardProps = {
    product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
    return (
        <div className="parent group w-full max-w-sm overflow-hidden bg-white border border-light relative">
            
            {/* Injecting CSS Keyframes directly so you don't need a Tailwind Config file */}
            <style dangerouslySetInnerHTML={{__html: `
                @keyframes marqueeCustom {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(-100%); }
                }
            `}} />

            {/* Image Container */}
            <div className="relative overflow-hidden bg-white p-3">
                <img
                    src={product.img}
                    alt={product.title}
                    className="h-80 w-full object-cover transition duration-500 group-hover:scale-105"
                />

                {/* Discount badge */}
                {product.discount && (
                    <span className="absolute left-4 top-4 bg-black px-3 py-1 text-xs font-semibold text-white z-10">
                        -{product.discount}%
                    </span>
                )}

                {/* Curtain Slide Action Icons Stack */}
                <div className="absolute right-4 top-4 flex flex-col gap-2 z-20 overflow-hidden pb-2">
                    <button className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-700 shadow-md hover:bg-black hover:text-white transition duration-300 -translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 ease-out delay-[0ms]">
                        ♡
                    </button>
                    <button className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-700 shadow-md hover:bg-black hover:text-white transition duration-300 -translate-y-24 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 ease-out delay-[50ms]">
                        👁
                    </button>
                    <button className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-700 shadow-md hover:bg-black hover:text-white transition duration-300 -translate-y-36 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 ease-out delay-[100ms]">
                        ⇄
                    </button>
                    <button className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-700 shadow-md hover:bg-black hover:text-white transition duration-300 -translate-y-[200px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 ease-out delay-[150ms]">
                        🛒
                    </button>
                </div>
            </div>

            {/* Content Container */}
            <div className="px-3 py-1">
                <div className='px-2'>
                    <h2 className="md:text-lg font-semibold text-gray-900">
                        {product.title}
                    </h2>

                    <p className="mt-1 text-sm text-gray-500">
                        {product.des}
                    </p>

                    {/* Price */}
                    <div className="mt-4 flex items-center gap-3">
                        <span className="md:text-lg text-gray-900">
                            ${product.price}
                        </span>

                        {product.discount && (
                            <>
                                <span className="text-gray-400 line-through">
                                    ${product.compareAtPrice}
                                </span>
                                <span className="text-brand font-bold">
                                    ${product.compareAtPrice}
                                </span>
                            </>
                        )}
                    </div>
                </div>

                {/* News Tape Ticker Banner (No config required layout) */}
                <div className="border-t border-light py-2 text-gray mt-4 overflow-hidden bg-neutral-50 relative flex items-center">
                    
                    {/* Track 1 */}
                    <div 
                        // style={{ animation: 'marqueeCustom 12s linear infinite' }}
                        className="anime flex whitespace-nowrap min-w-full shrink-0 items-center justify-around gap-4 [animation-duration:12s] group-hover:[animation-duration:6s]"
                    >
                        <span className="text-xs font-semibold uppercase tracking-wider text-[#f07c4c]">⚡ Limited time offer: {product.discount || 5}% OFF</span>
                        <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">🔥 Selling Fast</span>
                    </div>
                    
                    {/* Track 2 (Appended clone for a seamless infinity illusion) */}
                    <div 
                        // style={{ animation: 'marqueeCustom 12s linear infinite' }}
                        className="anime flex whitespace-nowrap min-w-full shrink-0 items-center justify-around gap-4 [animation-duration:12s] group-hover:[animation-duration:6s]"
                        aria-hidden="true"
                    >
                        <span className="text-xs font-semibold uppercase tracking-wider text-[#f07c4c]">⚡ Limited time offer: {product.discount || 5}% OFF</span>
                        <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">🔥 Selling Fast</span>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProductCard;
