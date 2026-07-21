"use client";

import ProductMainDetails from "@/ui/ProductMainDetails";
import RelatedProducts from "@/ui/RelatedProducts";
import TabbedContent from "@/ui/TabbedContent";

const product = {
    title: "Gym Coords Set",
    mainImage: "/data-product-1-1.jpg",
    imgs: ["/data-product-1-2.jpg", "/data-product-1-3.jpg", "/data-product-1-4.jpg"]
};

export default function ProductClientLayout({ id }: { id: string }) {
    return (
        <div>
            <div className="bg-lighter py-8">
                <h1 className="text-3xl text-center font-md">{product.title}</h1>
                <p className="text-center text-gray font-semibold mt-2">Home / Product / {product.title}</p>
            </div>
            <div className="px-2 md:px-20 space-y-6 mt-12">
                <ProductMainDetails product={product} />
                <TabbedContent />
                <RelatedProducts />
            </div>
        </div>
    );
}
