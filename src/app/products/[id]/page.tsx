// app/products/[id]/page.js
export const dynamic = 'force-dynamic'; // Prevent any build caching

export default async function TestProductPage({ params }: any) {
    const resolvedParams = await params;
    const id = resolvedParams?.id;

    return (
        <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
            <h1>Debug Route Success!</h1>
            <p>The dynamic product ID is: <strong>{id}</strong></p>
        </div>
    );
}