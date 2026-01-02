export default function GallerySection() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Gallery</h2>
      <div className="grid grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <div key={num} className="bg-gray-200 rounded-lg p-4 h-40">
            <p className="text-center">Image {num}</p>
          </div>
        ))}
      </div>
    </section>
  );
}