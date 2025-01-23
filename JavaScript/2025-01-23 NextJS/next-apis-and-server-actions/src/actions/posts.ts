"use server";
import fs from "node:fs/promises"
import path from "node:path";

const posts = [
    {
        id: 1,
        title: "lorem ipsum"
    },
    {
        id: 2,
        title: "dviračio šou"
    },
    {
        id: 3,
        title: "dar pažiūrėsim"
    },
];

export async function getAllPosts()
{
    // 1. kreiptis i db
    // 2. parsinti db duomenis
    return posts;
}

export async function getPost(id:number)
{
    console.log(id);
    try{
        const fileData = JSON.parse(
            (await fs.readFile(
                path.join(process.cwd(),
                `/public/posts/${id}.json`
            ))).toString());
        return fileData;
    }
    catch(err)
    {
        console.log(err);
        return {};
    }
}