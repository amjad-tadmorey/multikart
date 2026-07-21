import ProductMainDetails from "@/ui/ProductMainDetails";
import RelatedProducts from "@/ui/RelatedProducts";
import TabbedContent from "@/ui/TabbedContent";

const product = {
    title: "Gym Coords Set",
    mainImage: "/data-product-1-1.jpg",
    imgs: [
        "/data-product-1-2.jpg",
        "/data-product-1-3.jpg",
        "/data-product-1-4.jpg",
    ]
};

interface PageProps {
    params: Promise<{ id: string }>;
}

// Keep this as an async Server Component (No "use client" at the very top)
export default async function ProductDetailPage({ params }: PageProps) {
    // Await params to read the ID dynamically on the server
    const resolvedParams = await params;
    const id = resolvedParams.id;

    return (
        <div className="">
            <div className="bg-lighter py-8">
                <h1 className="text-3xl text-center font-md">{product.title}</h1>
                <p className="text-center text-gray font-semibold mt-2">
                    Home / Product / {product.title} (ID: {id})
                </p>
            </div>
            <div className="px-2 md:px-20 space-y-6 mt-12">
                {/* Your Client Components work perfectly inside here */}
                <ProductMainDetails product={product} />
                <TabbedContent />
                <RelatedProducts />
            </div>
        </div>
    );
}
