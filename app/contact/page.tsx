import ColumnTitle from "@/components/model/column-title";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiMailFill } from "react-icons/ri";

const Contact = () => {
  return (
    <>
      <ColumnTitle
        title="Business and Commission Inquiries"
        description="Ready to work together? Whether it is 3D models or software engineering, just hit me a message through one of the following contacts. I am excited to work with you!"
        imageSrc="../banners/banner1.png"
        content={
          <>
            <Link
              href="mailto:nauvernever@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="destructive"
                leftIcon={<RiMailFill />}
                className="w-full justify-start"
              >
                Send Email to nauvernever@gmail.com
              </Button>
            </Link>
            <Link
              href="https://discord.gg/nauvernever"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="default"
                leftIcon={<FaDiscord />}
                className="w-full justify-start bg-[#738adb] hover:bg-[#738adb]/90"
              >
                Contact via Discord
              </Button>
            </Link>
            <Link
              href="https://x.com/nauvernever"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="default"
                leftIcon={<FaXTwitter />}
                className="w-full justify-start"
              >
                Contact via X
              </Button>
            </Link>
          </>
        }
      />
    </>
  );
};

export default Contact;
