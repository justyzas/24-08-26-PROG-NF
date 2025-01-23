"use client";
export default function Button({children, onClickAction = ()=>{ console.log("Hello") }}: {children: React.ReactNode, onClickAction?: ()=>void})
{
    return (
    <button className="px-8 py-1 rounded-md bg-violet-500 hover:bg-violet-600 text-white" onClick={onClickAction}>
        {children}
    </button>
    )
}