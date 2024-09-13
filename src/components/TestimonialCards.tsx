import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

type Testimonial = {
  quote: string;
  name: string;
  title: string;
};

const musicSchoolTestimonials: Testimonial[] = [
  {
    quote:
      "The lessons at this music school have truly transformed my understanding of music. The instructors are incredibly patient and knowledgeable.",
    name: "John Smith",
    title: "Beginner Guitar Student",
  },
  {
    quote:
      "I never thought I could compose my own music, but the composition course gave me the confidence and skills to create my first piece!",
    name: "Sarah Lee",
    title: "Aspiring Composer",
  },
  {
    quote:
      "The vocal training here helped me unlock my true voice. I’ve improved my range and technique more than I ever imagined.",
    name: "Emily Davis",
    title: "Vocalist and Performer",
  },
  {
    quote:
      "This music school provided me with a solid foundation in music theory, which has been invaluable in my journey as a producer.",
    name: "Michael Brown",
    title: "Music Producer",
  },
];
const TestimonialCards = () => {
  return (
    <div className="h-[40rem] w-full flex flex-col items-center justify-center overflow-hidden dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative ">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="text-center tracking-tight pb-8 font-bold text-xl  md:text-3xl">
        Hear Our Hormony: Voice Of Success    
      </div>
      <InfiniteMovingCards
        speed="normal"
        items={musicSchoolTestimonials}
        direction="right"
      />
    </div>
  );
};

export default TestimonialCards;
