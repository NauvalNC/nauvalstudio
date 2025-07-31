import { showcaseImages } from "@/lib/utils";
import Image from "next/image";

const Gallery = () => {
  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-4xl font-bold">Previous Works</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {showcaseImages.map((src, idx) => (
          <div
            className="relative rounded-md overflow-hidden group"
            key={idx}
            style={{ minHeight: 200 }}
          >
            <Image
              src={src}
              className="absolute inset-0 w-full h-full object-cover filter blur-md scale-110"
              alt=""
              aria-hidden="true"
            />
            <Image
              src={src}
              className="hover:cursor-pointer relative w-full h-150 rounded-md object-scale-down transition-transform duration-300 group-hover:scale-110"
              alt={`Gallery image ${idx + 1}`}
              style={{ zIndex: 1 }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
