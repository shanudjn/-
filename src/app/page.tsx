import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/1481dbc7-9aa7-4daf-9f9e-95e83a63c0e6-3hj90w.jpg",
  "https://utfs.io/f/2a5f008e-039f-433b-8e75-7e65e38c3de5-7lk2dv.png",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url: url,
}));
export default function HomePage() {
  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <div key={image.id} className="h-full">
              <img src={image.url} className="h-full w-full" />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
