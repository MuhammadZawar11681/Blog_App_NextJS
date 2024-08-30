import Link from "next/link";
import { Button } from "@/app/ui/components/button";
import Post from '@/app/ui/components/posts/Post';
import { connectToDB, getPosts } from '@/app/lib/data';
import { auth } from "../../../../auth.config";

export default async function Page() {
  const client = await connectToDB();
  const posts = await getPosts();
  const session = await auth();

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {client && <p className='text-green-500 my-2 font-semibold'>Connected to database!</p>}
      
      {session?.user ? (
        <>
          <Link href="/blog/post/insert">
            <Button className="outline outline-1 border-purple-700 text-purple-700 hover:bg-purple-700 hover:text-white my-5 py-2 px-4 rounded transition duration-300">
              New +
            </Button>
          </Link>
        </>
      ) : (
        <div className="text-center mb-6">
          <p className="text-red-600 my-2 font-semibold">
            Dear User, Please Sign In to Upload Your Favorite Blog
          </p>
        </div>
      )}

      <h1 className="text-3xl font-bold mb-6 text-gray-800">Posts</h1>
      {posts?.map((post) => (
        <Post id={""} title={""} content={""} date={""} author={""} key={post.id} {...post} />
      ))}
    </div>
  );
}
