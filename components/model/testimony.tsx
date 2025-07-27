import TestimonyCard from "./testimony-card";

const Testimony = () => {
  const testimonies = [
    {
      author: "Michael Yordan",
      authorDescription: "United States",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      author: "Thomas Jeremy",
      authorDescription: "New Zealand",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      author: "Dani Yarn",
      authorDescription: "Canada",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-4xl font-bold">Trusted by Many</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
        {testimonies.map((item, index) => (
          <TestimonyCard
            key={index}
            author={item.author}
            authorDescription={item.authorDescription}
            message={item.message}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimony;
