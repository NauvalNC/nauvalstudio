import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// This check can be removed, it is just for tutorial purposes
export const hasEnvVars =
  process.env.NEXT_PUBLIC_SUPABASE_URL &&
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_OR_ANON_KEY;

// Showcase images data
export const banners = [
  "../banners/banner1.png",
  "../banners/banner2.png",
  "../banners/banner3.png",
  "../banners/banner4.png",
  "../banners/banner5.png",
];

// Showcase images data
export const showcaseImages = [
  "../showcases/showcase1.png",
  "../showcases/showcase2.png",
  "../showcases/showcase3.png",
  "../showcases/showcase4.png",
  "../showcases/showcase5.png",
  "../showcases/showcase6.png",
  "../showcases/showcase7.png",
  "../showcases/showcase8.png",
  "../showcases/showcase9.png",
  "../showcases/showcase10.png",
  "../showcases/showcase11.png",
  "../showcases/showcase12.png",
  "../showcases/showcase13.png",
  "../showcases/showcase14.png",
  "../showcases/showcase15.png",
  "../showcases/showcase16.png",
  "../showcases/showcase17.png",
  "../showcases/showcase18.png",
  "../showcases/showcase19.png",
  "../showcases/showcase20.png",
  "../showcases/showcase21.png",
  "../showcases/showcase22.png",
  "../showcases/showcase23.png",
  "../showcases/showcase24.png",
];

// Testimonials data
export const testimonials = [
  {
    author: "pikapwn",
    country: "United States",
    message:
      "The order was delivered very fast and exactly as I wanted it! They showed me the first version of the model, and I requested some changes and they implemented the changes perfectly! Thank you for the great work!",
  },
  {
    author: "froilen13",
    country: "Mexico",
    message:
      "This was an excellent experience, from start to finish I got all my expectations exceeded. I wish I knew this artist before. Great job!",
  },
  {
    author: "panuchka",
    country: "Finland",
    message:
      "He is a real deal. If you wish to have professional quality models, awesome communication and speedy delivery, look no further! Will definitely order again.",
  },
  {
    author: "elusivemaiva",
    country: "Ireland",
    message:
      "Was very reasonable with their pricing and was very accomadating to my rather complex order, I cannot recommend him enough! :)",
  },
  {
    author: "wumingdesign",
    country: "Malaysia",
    message:
      "Fast delivery! The 3D character is 100% same as my design, riggings details is superb! Will definitely come back for the service again :)",
  },
  {
    author: "lonelyghostrecs",
    country: "United States",
    message:
      "He was a pleasure to work with. He took my inspiration drawing and brought it to reality, and when I had changes to the design he was able to turn around the changes quickly!",
  },
];
