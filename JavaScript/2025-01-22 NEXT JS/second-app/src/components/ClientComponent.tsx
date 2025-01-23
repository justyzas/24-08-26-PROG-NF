"use client";

import { useState } from "react";
import Button from "./Button";


const ClientComponent = ({posts}: {posts: Post[]})=>{
    console.log(window)
    const [count, setCount] = useState(0);
    // const [posts, setPosts] = useState<Post[]>([]);
    // const x: number = 5;
    // useEffect(()=>{
    //     async function callApi()
    //     {
    //         const promise = await fetch("/posts.json");
    //         const resp = await promise.json();
    //         setPosts(resp)
    //     }
    //     callApi();
    // },[])
    return <div className="min-h-[200px] shadow-lg border rounded-lg p-6 m-6">
        <h3 className="text-xl font-bold">Count is {count}</h3>
        <Button onClickAction={()=>setCount(c=>++c)}>Increase Count</Button>
        <ul>
            {posts.map((post)=>(<li className="list-disc" key={post.id}>{post.title}</li>))}
        </ul>
    </div>
}
export default ClientComponent;