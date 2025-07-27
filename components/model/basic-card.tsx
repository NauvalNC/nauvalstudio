import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { Button } from "../ui/button";

interface BasicCardProps {
  title: string;
  description: string;
  buttonText: string;
  imageSrc: string;
  href?: string;
  hrefTarget?: string;
}

const BasicCard = ({
  title,
  description,
  buttonText,
  imageSrc,
  href,
  hrefTarget,
}: BasicCardProps) => {
  return (
    <div className="flex flex-row flex-grow w-full">
      <div className="flex flex-col gap-4 w-full">
        <img className="rounded-md h-80 object-cover" src={imageSrc} />
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-neutral-500">{description}</p>
        <Link
          href={href || "#"}
          target={hrefTarget || "_self"}
          rel="noopener noreferrer"
        >
          <Button className="mt-auto w-full" rightIcon={<FaArrowRight />}>
            {buttonText}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default BasicCard;
