import { db } from "~/server/db";

export const dynamic = "force-dynamic";
const mockUrls = [
  "https://utfs.io/f/1481dbc7-9aa7-4daf-9f9e-95e83a63c0e6-3hj90w.jpg",
  "https://utfs.io/f/2a5f008e-039f-433b-8e75-7e65e38c3de5-7lk2dv.png",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url: url,
}));
export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  console.log(posts);
  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id} className="w-48">
            {post.name}
          </div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            <img src={image.url} className="h-full w-full" />
          </div>
        ))}
      </div>
    </main>
  );
}
