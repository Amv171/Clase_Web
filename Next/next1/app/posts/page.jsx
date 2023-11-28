import PostCard from '@/components/PostCard';
async function getPosts() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return data;
  }

export default async function Posts(){
    const posts = await getPosts();
    return <div>
        {
            posts.map(post =>(
               <PostCard post = {post}/>
                ))
        }
    </div>};