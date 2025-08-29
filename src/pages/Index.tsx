import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import AboutPreview from "@/components/AboutPreview";
import TeamPreview from "@/components/TeamPreview";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import ClosingBanner from "@/components/ClosingBanner";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutPreview />
      <TeamPreview />
      <TestimonialsCarousel />
      <ClosingBanner />
    </Layout>
  );
};

export default Index;
