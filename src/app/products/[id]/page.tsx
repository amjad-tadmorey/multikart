import ProductClientLayout from "@/ui/ProductClientLayout";

export const dynamic = "force-dynamic";


interface PageProps {
    params: Promise<{ id: string }>;
}

export default async function ProductDetailPage({ params }: PageProps) {
    const resolvedParams = await params;
    const id = resolvedParams.id;

    return <ProductClientLayout id={id} />;
}
