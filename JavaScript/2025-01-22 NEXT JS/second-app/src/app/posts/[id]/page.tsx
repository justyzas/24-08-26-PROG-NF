/* eslint-disable @next/next/no-img-element */
import { redirect } from "next/navigation";

export default async function Page({params}: {params: Promise<{ id: string }>}){
    const {id} = await params;

    const promise = await fetch("http://localhost:3000/posts.json"); //100ms
    const posts:Post[] = await promise.json(); //100ms

    const post = posts.find((post)=>post.id.toString() == id);
    // Jei post'as nerastas, norime redirectinti į bendrą post'ų puslapį;
    if(!post){
        redirect("/posts");
    }

    
    return <main>
       {post.img && <img src={post.img} alt={post.title} />}
        <h3 className="text-xl font-bold">{post.title}</h3>
        <p className="italic">{post.description}</p>
    </main>
}