export const dynamic = 'force-dynamic'; 

interface RouteParams {
  params: Promise<{ id: string }>;
}

export default async function ProductDetailPage({ params }: RouteParams) {
  // Await the params object before destructuring (Required in modern Next.js)
  const resolvedParams = await params;
  const id = resolvedParams?.id;

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Debug Route Success!</h1>
      <p>The dynamic product ID is: <strong>{id}</strong></p>
    </div>
  );
}
