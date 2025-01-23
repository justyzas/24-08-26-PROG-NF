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
]

// GET metodas   /api
export async function GET() {
    // console.log(request.cookies.get("connect.sid")?.value);
    return Response.json(posts)
}

export async function POST(req: Request, )
{
    const body = await req.formData()
    console.log(body.get("id"));
    console.log(body.get("username"));

    return Response.json({message:"ok"});

}
