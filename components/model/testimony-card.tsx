interface TestimonyProps {
  author: string;
  authorDescription: string;
  message: string;
}

const TestimonyCard = ({
  author,
  authorDescription,
  message,
}: TestimonyProps) => {
  return (
    <div className="flex flex-col w-full gap-4 border rounded-md p-6">
      <p>{message}</p>
      <div className="flex flex-col w-full items-end mt-auto">
        <p className="font-bold">{author}</p>
        <p className="text-neutral-500">{authorDescription}</p>
      </div>
    </div>
  );
};

export default TestimonyCard;
