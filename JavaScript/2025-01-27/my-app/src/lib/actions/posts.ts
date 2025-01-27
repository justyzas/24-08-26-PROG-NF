"use server";
import pool from "@/lib/utils/db";
import { revalidatePath } from "next/cache";


export async function getAllPosts()
{
    const [rows] = await pool.execute(`SELECT * FROM posts`);
    const scooters = rows as Post[];
    return scooters;
}

export async function createPost(post: Omit<Post, "id">|FormData)
{
    const sqlQuery = `INSERT INTO posts (title, description)
                    VALUES (?, ?);`

    let values: [string, string];

    if(post instanceof FormData){
        const postData: Omit<Post, "id"> = {
            title: post.get("title") as string,
            description: post.get("description") as string
        }
        values = [postData.title, postData.description]; 
    }else{
        values = [post.title, post.description]
    }
    
    const [result] = await pool.execute(sqlQuery, values);
    // Ši komanda perkrauna puslapyje užcachintą informaciją. (paima naujus duomenis iš db ir reloadina page).
    revalidatePath("/");

    return JSON.parse(JSON.stringify(result));
}