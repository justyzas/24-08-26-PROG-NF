import { createPost } from "@/lib/actions/posts";

export default function Page()
{

    return <form className="border m-4 my-8 p-4" action={createPost}>
    <h2 className="text-xl font-bold italic">Postu kūrimo forma</h2>
    <div className="my-2 flex flex-col">
      <label>
        <span className="inline-block mr-8">Pavadinimas</span>
        <input type="text" className="py-1 px-3 outline-none focus:shadow-lg border w-full" name="title" />
      </label>
      <label>
        <span className="inline-block mr-8">Aprašymas</span>
        <textarea name="description" className="outline-none focus:shadow-lg border w-full">
        </textarea>
      </label>
    </div>
    <div className="flex gap-2">
      <button type="submit" className="bg-blue-500 hover:bg-blue-600 hover:shadow-md text-white px-2 py-1 rounded">Pridėti įrašą</button>
      <button type="reset" className="bg-red-500 hover:bg-red-600 hover:shadow-md text-white px-2 py-1 rounded">Atstatyti</button>
    </div>
  </form>
}