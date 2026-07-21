// pages/products/[id].js
import { useRouter } from 'next/router';

export default function ProductDetail() {
    const router = useRouter();
    const { id } = router.query;

    return (
        <div style={{ padding: '2rem' }}>
            <h1>Debug Pages Router Success!</h1>
            <p>Product ID: {id}</p>
        </div>
    );
}
