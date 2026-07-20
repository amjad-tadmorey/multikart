import Link from "next/link";

// Mock data array simulating a database or API response
const SAMPLE_PRODUCTS = [
    { id: "101", name: "Wireless Mechanical Keyboard", price: 129 },
    { id: "102", name: "Ergonomic Vertical Mouse", price: 79 },
    { id: "103", name: "UltraWide 4K Monitor", price: 449 },
];

export default function ProductsPage() {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-6 text-slate-800">Our Catalog</h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {SAMPLE_PRODUCTS.map((product) => (
                    <div key={product.id} className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm flex flex-col justify-between">
                        <div>
                            <h2 className="text-xl font-bold text-slate-800 mb-2">{product.name}</h2>
                            <p className="text-2xl font-semibold text-emerald-600 mb-4">${product.price}</p>
                        </div>

                        {/* Dynamic Routing Navigation Link */}
                        <Link
                            href={`/products/${product.id}`}
                            className="w-full text-center block bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium py-2 px-4 rounded-lg transition"
                        >
                            View Details →
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
