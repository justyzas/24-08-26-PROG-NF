import SearchBar from "@/components/SearchBar";
import { createPost, getAllPosts } from "@/lib/actions/posts";


// VITE, WEBPACK - bundlers.
// 


export default async function Home() {
  // console.log("As esu kazkoks komponentas");
  const startTime = Date.now();
  const posts = await getAllPosts();
  console.log(`Trukmė: ${Date.now() - startTime}ms`);
  
  // console.log(fields);
  return (
    <main className="py-8">

      <SearchBar/>
      <div className="flex flex-col gap-4">
        {posts.map(post=>(<div key={`post-${post.id}`} className="shadow rounded-md p-4">
          <h3 className="text-lg font-bold">{post.title}</h3>
          <p>{post.description}</p>
        </div>))}
      </div>
    </main>
  );
}
