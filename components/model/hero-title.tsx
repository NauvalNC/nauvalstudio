import React from "react";

interface HeroTitleProps {
  title: string;
  description: string;
  content: React.ReactNode;
}

const HeroTitle = ({ title, description, content }: HeroTitleProps) => {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="font-bold text-5xl md:text-6xl">{title}</h1>
      <p className="text-xl">{description}</p>
      {content}
    </div>
  );
};

export default HeroTitle;
