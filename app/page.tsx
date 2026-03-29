import { CreatePost, getPost } from "@/actions/index";

export default async function Home() {
  const posts = await getPost();

  return (
    <div className="mx-auto max-w-xl p-6">
      {/* Header */}
      <div className="space-y-1 mb-10">
        <h1 className="text-2xl font-semibold">
          Prisma + Next.js
        </h1>
        <p className="text-xl font-semibold">
          Create and manage posts with a simple UI
        </p>
      </div>
      <div className="bg-white shadow-md rounded-2xl p-6 space-y-6 border">
        {/* Form */}
        <div className="space-y-4">
          <h2 className="text-lg font-medium text-gray-900">Add a Post</h2>

          <form action={CreatePost} className="space-y-4">
            {/* Title */}
            <div className="flex flex-col space-y-1">
              <label className="text-sm font-medium text-gray-700">Title</label>
              <input
                type="text"
                name="title"
                placeholder="Enter your title"
                className="border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black text-black"
              />
            </div>

            {/* Description */}
            <div className="flex flex-col space-y-1">
              <label className="text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                name="description"
                placeholder="Enter your description"
                rows={3}
                className="border rounded-lg px-3 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-black text-black"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-lg text-sm font-medium hover:opacity-90 transition cursor-pointer"
            >
              Create Post
            </button>
          </form>
        </div>
      </div>
      <section className="mt-8 space-y-4">
        <h2 className="text-lg font-medium">All Posts</h2>

        <div className="space-y-3">
          {posts.length === 0 ? (
            <p className="text-sm text-gray-500">No posts yet. Create one 👆</p>
          ) : (
            posts.map((post) => (
              <div
                key={post.id}
                className="border rounded-xl p-4 shadow-sm bg-white"
              >
                <h3 className="font-semibold text-gray-900">{post.title}</h3>

                {post.description && (
                  <p className="text-sm text-gray-600 mt-1">
                    {post.description}
                  </p>
                )}

                <p className="text-xs text-gray-400 mt-2">
                  {new Date(post.createdAt).toLocaleString()}
                </p>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
}
