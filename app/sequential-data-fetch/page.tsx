import { Suspense } from "react";
import Author from "./Author";

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

async function getPosts(): Promise<Post[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  return res.json();
}

export default async function Page() {
  const posts = await getPosts();

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-10">📝 Blog Posts</h1>

      <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-5 border border-gray-100"
          >
            <div className="flex justify-between items-center mb-3">
              <span className="text-xs px-2 py-1 bg-blue-100 text-blue-600 rounded-full">
                User {post.userId}
              </span>
              <span className="text-xs text-gray-400">#{post.id}</span>
            </div>
            <h2 className="font-semibold text-lg line-clamp-2 mb-2">
              {post.title}
            </h2>
            <p className="text-gray-600 text-sm line-clamp-4">{post.body}</p>
            Improved Author:{" "}
            <Suspense fallback="author loading">
              <Author userId={post.userId} />
            </Suspense>
            {/* Author : <Author userId={post.userId} /> */}
            <button className="mt-4 text-sm text-blue-500 hover:underline">
              Read more →
            </button>
          </article>
        ))}
      </div>
    </div>
  );
}
