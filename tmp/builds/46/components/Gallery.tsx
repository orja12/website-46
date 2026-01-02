export function Gallery() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-gray-200 h-48">Image 1</div>
        <div className="bg-gray-200 h-48">Image 2</div>
        <div className="bg-gray-200 h-48">Image 3</div>
      </div>
    </section>
  );
}
