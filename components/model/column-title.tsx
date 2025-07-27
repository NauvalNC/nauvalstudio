interface ColumnTitleProps {
  title: string;
  description: string;
  imageSrc: string;
  content: React.ReactNode;
}

const ColumnTitle = ({
  title,
  description,
  imageSrc,
  content,
}: ColumnTitleProps) => {
  return (
    <div className="flex flex-col lg:flex-row gap-6">
      <img
        className="rounded-md lg:w-1/2 self-stretch object-cover"
        src={imageSrc}
      />
      <div className="flex flex-col gap-6">
        <h1 className="font-bold text-5xl md:text-6xl">{title}</h1>
        <p className="text-xl">{description}</p>
        {content}
      </div>
    </div>
  );
};

export default ColumnTitle;
