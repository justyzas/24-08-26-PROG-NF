import Link from "next/link"

export default function Navigation()
{
    const pages = [
        {
            href: "/",
            title: "Main",
        }, 
        {
            href: "/posts",
            title: "Posts"
        }
    ]

    return <nav className="bg-slate-100 shadow py-2 ">
        <div className="container mx-auto flex gap-4 items-center">
        {pages.map((page)=>(
            <Link className="text-blue-500 hover:text-blue-600 hover:underline" href={page.href} key={page.href}>
                {page.title}
            </Link>))
        }
        </div>
    </nav>
}