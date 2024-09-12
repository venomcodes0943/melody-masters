import FeatureSection from "@/components/FeatureSection";
import HeroSection from "@/components/HeroSection";
import TestimonialCards from "@/components/TestimonialCards";
import UpcomingWebinar from "@/components/UpcomingWebinar";
// import WhyChoosUs from "@/components/WhyChoosUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased">
      <HeroSection />
      <FeatureSection />
      {/* <WhyChoosUs /> */}
      <TestimonialCards />
      <UpcomingWebinar />
    </main>
  );
}
