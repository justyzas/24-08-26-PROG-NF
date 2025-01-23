"use client";

import { getAllPosts, getPost } from "@/actions/posts";

export default function Home() {

// SERVER ACTION KVIETIMAS
  async function getPostViaServerAction()
  {
    const posts = await getPost(1); //fetch(POST);
    console.log(posts);
  }
  
  // VS.

// API iškvietimas
  async function getPostViaApi()
  {
    const promise = await fetch("/api/1");
    const response = await promise.json();
    console.log(response);
  }

  return (
    <main>
     <h1 className="text-xl font-bold">Main page</h1>
     <hr />
     <button className="px-4 py-1 bg-slate-300 hover:bg-slate-400 text-black rounded" onClick={getPostViaServerAction}>Mygtukas</button>
    </main>
  );
}
