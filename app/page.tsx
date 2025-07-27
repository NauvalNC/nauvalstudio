import BasicCard from "@/components/model/basic-card";
import HeroCard from "@/components/model/hero-card";
import HeroTitle from "@/components/model/hero-title";
import Testimony from "@/components/model/testimony";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaCartShopping } from "react-icons/fa6";
import { RiMailFill } from "react-icons/ri";

export default function Home() {
  return (
    <>
      {/* Section - Hero Title */}
      <HeroTitle
        title="Welcome to Nauval Studio"
        description="Hi! My name is Nauval. I am a Software Engineer and 3D Model Designer. I
        build this website to share and trying to help people to create contents
        using my works."
        content={
          <>
            <Link href="/shop">
              <Button
                variant="destructive"
                leftIcon={<FaCartShopping />}
                className="w-full"
              >
                Explore Shop
              </Button>
            </Link>
            <img
              className="rounded-md w-full h-125 object-cover"
              src="../banner0.png"
            />
          </>
        }
      />
      {/* Section - Commission */}
      <HeroCard
        title="Custom 3D Models"
        imageSrc="../banner3.png"
        content={
          <>
            <p>
              I&apos;ve worked with many clients to create custom 3D models,
              whether it is for VTubers, games, or animation. With my years of
              experience using Blender, Unreal Engine, and Unity, I can help you
              to achieve your vision through 3D models.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
              <img className="h-8 w-auto max-w-lg" src="../warudo.png" />
              <img
                className="h-8 w-auto max-w-lg invert"
                src="../unreal_engine.svg"
              />
              <img
                className="h-8 w-auto max-w-lg invert"
                src="../unity_engine.svg"
              />
            </div>
            <Link href="/commission">
              <Button
                variant="destructive"
                leftIcon={<RiMailFill />}
                className="w-full mt-auto"
              >
                Order Commission
              </Button>
            </Link>
          </>
        }
      />
      {/* Section - What Am I Doing */}
      <div className="flex flex-col gap-8">
        <h2 className="text-4xl font-bold">What Am I Doing?</h2>
        <div className="flex flex-col md:flex-row gap-6 items-stretch">
          <BasicCard
            imageSrc="../banner1.png"
            title="Custom 3D Models"
            description="Whether it is for VTubers, games, or animation, I can help you with with to achieve your vision."
            buttonText="Order Commission"
            href="/commission"
          />
          <BasicCard
            imageSrc="../banner2.png"
            title="Content Creation"
            description="I also have YouTube channel to share my knowledge and works through videos and live streams."
            buttonText="Visit My Channel"
            href="https://www.youtube.com/@NauvalStudio"
            hrefTarget="_blank"
          />
          <BasicCard
            imageSrc="../banner3.png"
            title="Software Engineering"
            description="I also worked as professionally as software engineer, mainly using C++ and C# to build SDK."
            buttonText="Visit My LinkedIn"
            href="https://www.linkedin.com/in/nauvalmfirdaus"
            hrefTarget="_blank"
          />
        </div>
      </div>
      {/* Section - Testimony */}
      <Testimony />
    </>
  );
}
