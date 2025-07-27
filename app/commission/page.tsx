"use client";

import Gallery from "@/components/model/gallery";
import HeroCard from "@/components/model/hero-card";
import HeroTitle from "@/components/model/hero-title";
import Testimony from "@/components/model/testimony";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRef } from "react";
import { FaArrowRight, FaDiscord } from "react-icons/fa";
import { RiMailFill } from "react-icons/ri";

const Commission = () => {
  const pricingPlansTarget = useRef<HTMLDivElement | null>(null);
  const previousWorksTarget = useRef<HTMLDivElement | null>(null);

  const scrollToPreviousWorks = (
    target: React.RefObject<HTMLDivElement | null>
  ) => {
    target?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Section - Hero Title */}
      <HeroTitle
        title="Custom 3D Commission"
        description="I mainly focus on 3D character model with anime-like design, but I can work with any type of art design that suits your need. Whether it is for VTubers, games, or animation, I can help to achieve your vision! The models I created are compatible with VRM tools such as Warudo, and game engines including Unreal Engine and Unity."
        content={
          <>
            <div className="flex flex-col items-center gap-4 md:flex-row sm:justify-between">
              <img
                className="h-12 w-auto max-w-lg invert"
                src="../warudo.png"
              />
              <img
                className="h-12 w-auto max-w-lg"
                src="../unreal_engine.svg"
              />
              <img className="h-12 w-auto max-w-lg" src="../unity_engine.svg" />
            </div>

            <div className="flex flex-col items-stretch md:flex-row gap-4">
              <Button
                variant="destructive"
                className="flex-grow"
                rightIcon={<FaArrowRight />}
                onClick={() => scrollToPreviousWorks(pricingPlansTarget)}
              >
                See Pricing & Plans
              </Button>{" "}
              <Button
                variant="destructive"
                className="flex-grow"
                rightIcon={<FaArrowRight />}
                onClick={() => scrollToPreviousWorks(previousWorksTarget)}
              >
                See Previous Works
              </Button>
            </div>
          </>
        }
      />
      {/* Section - Testimony */}
      <Testimony />
      {/* Section - Commission */}
      <div className="flex flex-col gap-8" ref={pricingPlansTarget}>
        <h2 className="text-4xl font-bold">Pricing & Plans</h2>
        {/* Section - Full Body */}
        <HeroCard
          title="Full Size Character"
          imageSrc="../banner3.png"
          content={
            <>
              <div>
                <p className="text-destructive font-bold line-through">
                  $600 USD
                </p>
                <p className="font-bold text-5xl">$500 USD</p>
              </div>
              <div>
                <p className="font-bold">Base price includes:</p>
                <ul className="list-disc pl-6">
                  <li>Include Blender file.</li>
                  <li>Fully rigged character.</li>
                  <li>
                    Basic facial expressions, including eye blinks, eyebrows,
                    and mouth vowels.
                  </li>
                  <li>
                    Support one of the following based on your request: VRM,
                    Unreal Engine, or Unity.
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-bold">Optional extras:</p>
                <ul className="list-disc pl-6">
                  <li>
                    Include base body: <b>$50 USD</b>
                  </li>
                  <li>
                    Apple ARKit facial expressions support: <b>$50 USD</b>
                  </li>
                  <li>
                    Simple animation/emote: <b>$10 USD per animation</b>
                  </li>
                  <li>
                    Extra facial expressions: <b>$10 USD per expression</b>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-bold">Timeline and Revisions:</p>
                <ul className="list-disc pl-6">
                  <li>14-20 Days</li>
                  <li>
                    Minor revisions with reasonable amount on every stage of the
                    progress (modeling, texturing, rigging, animation).
                  </li>
                  <li>Major revisions may add additional cost.</li>
                </ul>
              </div>
              <Link href="/contact">
                <Button
                  variant="destructive"
                  leftIcon={<RiMailFill />}
                  className="w-full mt-auto"
                >
                  Contact Me for Commission
                </Button>
              </Link>
            </>
          }
        />
        {/* Section - Chibi */}
        <HeroCard
          title="Chibi Character"
          imageSrc="../banner2.png"
          content={
            <>
              <div>
                <p className="text-destructive font-bold line-through">
                  $350 USD
                </p>
                <p className="font-bold text-5xl">$250 USD</p>
              </div>
              <div>
                <p className="font-bold">Base price includes:</p>
                <ul className="list-disc pl-6">
                  <li>Include Blender file.</li>
                  <li>Fully rigged character.</li>
                  <li>
                    Basic facial expressions, including eye blinks, eyebrows,
                    and mouth vowels.
                  </li>
                  <li>
                    Support one of the following based on your request: VRM,
                    Unreal Engine, or Unity.
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-bold">Optional extras:</p>
                <ul className="list-disc pl-6">
                  <li>
                    Include base body: <b>$30 USD</b>
                  </li>
                  <li>
                    Apple ARKit facial expressions support: <b>$40 USD</b>
                  </li>
                  <li>
                    Simple animation/emote: <b>$10 USD per animation</b>
                  </li>
                  <li>
                    Extra facial expressions: <b>$10 USD per expression</b>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-bold">Timeline and Revisions:</p>
                <ul className="list-disc pl-6">
                  <li>10-14 Days</li>
                  <li>
                    Minor revisions with reasonable amount on every stage of the
                    progress (modeling, texturing, rigging, animation).
                  </li>
                  <li>Major revisions may add additional cost.</li>
                </ul>
              </div>
              <Link href="/contact">
                <Button
                  variant="destructive"
                  leftIcon={<RiMailFill />}
                  className="w-full mt-auto"
                >
                  Contact Me for Commission
                </Button>
              </Link>
            </>
          }
        />
      </div>
      {/* Section - Previous Works */}
      <div ref={previousWorksTarget}>
        <Gallery />
      </div>
    </>
  );
};

export default Commission;
