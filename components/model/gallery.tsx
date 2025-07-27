const Gallery = () => {
  const images = [
    "../banner1.png",
    "../banner2.png",
    "../banner3.png",
    "../banner3.png",
    "../banner1.png",
    "../banner2.png",
  ];

  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-4xl font-bold">Previous Works</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            className="w-full h-100 rounded-lg object-cover"
            alt={`Gallery image ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
