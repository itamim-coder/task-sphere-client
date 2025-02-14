import { CheckCircle, ListChecks, Star } from "lucide-react";
import React from "react";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative py-32 bg-gradient-to-b from-purple-700 to-blue-800 text-white">
      <div className="container text-center">
        {/* Hero Content */}
        <div className="mx-auto flex max-w-screen-lg flex-col gap-6">
          <h1 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl leading-tight">
            Stay Organized, Stay Productive with{" "}
            <span className="text-yellow-300">TaskSphere</span>
          </h1>
          <p className="text-lg text-gray-200 sm:text-xl">
            Manage your tasks seamlessly with smart tracking, reminders, and team collaboration. 
            Boost productivity with an intuitive interface designed for efficiency.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
          <Button size="lg" className="rounded-full bg-yellow-400 text-black hover:bg-yellow-500">
            Get Started
          </Button>
          <Button size="lg" variant="outline" className="rounded-full border-white text-black hover:bg-white hover:text-black">
            Learn More
          </Button>
        </div>

        {/* Feature Highlights */}
        <div className="mx-auto mt-12 flex justify-center flex-col items-center gap-6 sm:flex-row">
          {/* Feature Icons */}
          <div className="flex  items-center gap-4 text-gray-300 text-lg font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle className="size-6 text-green-300" />
              Task Automation
            </div>
            <div className="flex items-center gap-2">
              <ListChecks className="size-6 text-blue-300" />
              Smart Task Lists
            </div>
          </div>
        </div>

        {/* Avatar Group & Rating */}
        <div className="mx-auto mt-12 flex w-fit flex-col items-center gap-4 sm:flex-row">
          {/* Avatars */}
          <span className="mx-4 flex items-center -space-x-4">
            {[1, 2, 3, 4, 5].map((num) => (
              <Avatar key={num} className="size-14 border-2 border-white transition-transform duration-300 hover:scale-110">
                <AvatarImage
                  src={`https://shadcnblocks.com/images/block/avatar-${num}.webp`}
                  alt={`User ${num}`}
                />
              </Avatar>
            ))}
          </span>

          {/* Ratings */}
          <div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="size-5 fill-yellow-300 text-yellow-300 animate-pulse" />
              ))}
              <span className="font-semibold text-yellow-300 text-lg">4.9</span>
            </div>
            <p className="text-left font-medium text-gray-200">
              Trusted by <span className="font-bold">10,000+ professionals</span> worldwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
