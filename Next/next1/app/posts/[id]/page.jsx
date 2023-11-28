import Posts from "../page"
import { Suspense } from 'react';
import PostCard from '@/components/PostCard';
async function getPosts(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json()
    return data;
}

export default async function Page({ params }) {
    const post = await getPosts(params.id);
    return <div>
        <PostCard post={post} />
        <Suspense fallback={<div>Cargando publicaciones...</div>}>
                <Posts />
            </Suspense>
    </div>
}