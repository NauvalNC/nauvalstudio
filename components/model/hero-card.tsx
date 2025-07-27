interface HeroCardProps {
  title: string;
  imageSrc: string;
  content: React.ReactNode;
}

const HeroCard = ({ title, imageSrc, content }: HeroCardProps) => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 rounded-md bg-gradient-to-b from-[#2b2d42] to-[#8d99ae] p-6">
      <img
        className="rounded-md lg:w-100 self-stretch object-cover"
        src={imageSrc}
      />
      <div className="flex flex-col text-white gap-6">
        <h2 className="text-4xl font-bold">{title}</h2>
        {content}
      </div>
    </div>
  );
};

export default HeroCard;
