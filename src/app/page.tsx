import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20 bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
        Welcome to NextStore
      </h1>
      <p className="text-slate-600 text-lg max-w-md mb-8">
        Discover incredible items built on an lightning-fast framework leveraging Server Components.
      </p>
      <Link
        href="/products"
        className="px-6 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 shadow-md shadow-blue-200 transition"
      >
        Browse Our Products
      </Link>
    </div>
  );
}
