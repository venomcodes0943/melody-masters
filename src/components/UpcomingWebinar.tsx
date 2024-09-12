import Link from "next/link";
import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";

const UpcomingWebinar = () => {
  type Webinar = {
    title: string;
    description: string;
    slug: string;
    isFeatured: boolean;
  };

  const featuredWebinars: Webinar[] = [
    {
      title: "Mastering Music Production: From Beginner to Pro",
      description:
        "An in-depth webinar that covers the essentials of music production using digital audio workstations (DAWs) and advanced techniques for mixing and mastering.",
      slug: "mastering-music-production",
      isFeatured: true,
    },
    {
      title: "Vocal Techniques for All Skill Levels",
      description:
        "A webinar designed to help vocalists improve their range, tone, and breath control through proven exercises and techniques used by professionals.",
      slug: "vocal-techniques-all-skill-levels",
      isFeatured: false,
    },
    {
      title: "Music Theory Demystified",
      description:
        "This webinar simplifies complex music theory concepts, making them accessible to musicians of all backgrounds and skill levels.",
      slug: "music-theory-demystified",
      isFeatured: true,
    },
    {
      title: "Building a Career in the Music Industry",
      description:
        "Learn from industry experts about the steps to take to turn your passion for music into a full-time career, including marketing, networking, and finding opportunities.",
      slug: "building-music-career",
      isFeatured: false,
    },
    {
      title: "Advanced Instrument Techniques",
      description:
        "This webinar is aimed at musicians looking to refine their skills on instruments like guitar, piano, and drums by exploring advanced techniques and practices.",
      slug: "advanced-instrument-techniques",
      isFeatured: true,
    },
    {
      title: "Songwriting Masterclass",
      description:
        "A hands-on webinar that dives into the art of songwriting, teaching you how to create compelling lyrics, melodies, and song structures that resonate with listeners.",
      slug: "songwriting-masterclass",
      isFeatured: false,
    },
  ];

  return (
    <div className="py-12 bg-[#0e0d0d]  ">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 flex flex-col items-center justify-center">
        <div className="text-center">
          <h2 className="text-base text-teal-400 font-semibold tracking-wide uppercases ">
            featured webinars
          </h2>
          <p className="mt-2 text-3xl leading-6 font-extrabold tracking-tight text-white sm:text-4xl">
            Enhance music journey
          </p>
        </div>
        <div className="mt-10">
          <HoverEffect
            items={featuredWebinars.map((webinar) => ({
              title: webinar.title,
              description: webinar.description,
              link: webinar.slug,
            }))}
          />
        </div>
        <div className="mt-10 mx-auto">
          <Link href={"/"}>
            <button className="px-8 py-0.5  border-2 border-black dark:border-white font-bold uppercase bg-white text-black transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] ">
              View All Webinars
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UpcomingWebinar;
