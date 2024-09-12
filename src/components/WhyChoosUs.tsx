"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

type Guide = {
  title: string;
  description: string;
};

const musicSchoolGuid: Guide[] = [
  { 
    title: "Introduction to Music Theory",
    description:
      "This section introduces beginners to the foundational elements of music theory, including notes, scales, intervals, and how these elements form the building blocks of musical compositions. It covers key signatures, time signatures, and how to read sheet music, which are essential for any aspiring musician to understand music on a deeper level.",
  },
  {
    title: "Vocal Techniques and Performance",
    description:
      "In this module, we dive deep into the science and art of singing. You'll learn breathing techniques, vocal warm-ups, and how to extend your vocal range safely. We'll also explore stage presence, microphone handling, and ways to emotionally connect with an audience, ensuring that your performances are both technically sound and engaging.",
  },
  {
    title: "Digital Music Production for Beginners",
    description:
      "This guide provides a thorough introduction to the world of digital music production. We will cover essential software such as DAWs (Digital Audio Workstations), along with the basics of recording, mixing, and mastering tracks. By the end, you'll have a good understanding of how to create and produce music digitally, even if you don’t have prior experience.",
  },
  {
    title: "Music History and Evolution of Genres",
    description:
      "Explore the rich history of music, starting from classical music all the way to modern genres like rock, jazz, and electronic. This section will help you appreciate how various cultural, social, and technological factors have influenced music over centuries and how different genres have evolved. This is essential for those looking to understand the context behind the music they play or create.",
  },
];

const WhyChoosUs = () => {
  return (
    <div>
      <StickyScroll content={musicSchoolGuid} />
    </div>
  );
};

export default WhyChoosUs;
