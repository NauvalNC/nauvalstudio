import { testimonials } from "@/lib/utils";
import TestimonyCard from "./testimony-card";

const Testimony = () => {
  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-4xl font-bold">Trusted by Many</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
        {testimonials.map((item, index) => (
          <TestimonyCard
            key={index}
            author={item.author}
            authorDescription={item.country}
            message={item.message}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimony;
