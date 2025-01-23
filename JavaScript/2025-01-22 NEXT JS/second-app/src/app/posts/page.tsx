
import Link from "next/link";

export default async function Page()
{

  // Server-Componentuos'e - reikalingas pilnas fetch'o adresas
  const promise = await fetch("http://localhost:3000/posts.json"); //100ms
  const posts:Post[] = await promise.json(); //100ms
    return <main>
        <h3 className="text-xl font-bold">These are all of our posts</h3>

        <ul>
            {posts.map((post)=>(<li key={post.id}><Link className="text-blue-500 hover:text-blue-600 hover:underline" href={`/posts/${post.id}`}>{post.title}</Link></li>))}  
        </ul>  
    </main>
}