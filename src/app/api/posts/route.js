import posts from "@/utils/posts"


// GET(Request) --> /api/posts
export async function GET(request) {
    const data = await prisma.post.findMany()

    return new Response(JSON.stringify(data))
}


// /api/route
export async function POST(request) {
    const data = await request.json()
    console.log(data)
    return new Response(
        JSON.stringify(
            {message: "Post successfuly added"}
        )
    )
}

