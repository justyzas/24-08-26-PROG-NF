import fs from "node:fs/promises";
import path from "node:path";


type responseObj = {
    data: any,
    message: string
}

export async function GET(req:Request, 
    {params}: {params: Promise<{id:string}>})
{
    const {id} = await params;//reikia laukti kol pareina id
    
    try{
        const pathToFile = path.join(process.cwd(), `/public/posts/${id}.json`);
        const fileData = JSON.parse((await fs.readFile(pathToFile)).toString());
        return Response.json(fileData);
    }
    catch(err)
    {
        console.log(err);
        return Response.json({message: "not found"}, {status:404});
    }
}
