import React from "react";
import courseData from "../data/music_data.json";
import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}
const FeatureSection = () => {
  const FeatureCourse = courseData.courses.filter(
    (course: Course) => course.isFeatured
  );
  return (
    <div className="w-full bg-[#0e0d0d] py-12 px-4">
      <div>
        <div className="text-center">
          <h2 className="text-base text-teal-400 font-semibold tracking-wide uppercases ">
            FEATURED COURSES
          </h2>
          <p className="mt-2 text-3xl leading-6 font-extrabold tracking-tight text-white sm:text-4xl">
            Learn With The Best
          </p>
        </div>
      </div>
      <div className="my-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {FeatureCourse.map((course: Course) => (
            <div className="flex justify-center" key={course.id}>
              <BackgroundGradient className="rounded-[20px] cursor-pointer overflow-hidden h-full max-w-sm p-4 sm:p-6 bg-white dark:bg-zinc-900">
                <div className="text-center flex items-center tracking-tight justify-center flex-col flex-grow p-4 sm:p-6">
                  <p className="text-lg md:text-2xl font-semibold pb-2">
                    {course.title}
                  </p>
                  <p className="pb-2 text-sm md:text-base">
                    {course.description}
                  </p>
                  <button className="px-4 py-2 rounded-md border border-neutral-600 text-black bg-white hover:bg-gray-100 transition duration-200">
                    Learn More
                  </button>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10 text-center">
        <Link href={"/courses"}>
          <button className="px-8 py-0.5  border-2 border-black dark:border-white font-bold uppercase bg-white text-black transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] ">
            View All Courses
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FeatureSection;
