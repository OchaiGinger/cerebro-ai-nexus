import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import AboutPreview from "@/components/AboutPreview";
import StatsSection from "@/components/StatsSection";
import FeaturesShowcase from "@/components/FeaturesShowcase";
import TeamPreview from "@/components/TeamPreview";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import ClosingBanner from "@/components/ClosingBanner";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutPreview />
      <StatsSection />
      <FeaturesShowcase />
      <TeamPreview />
      <TestimonialsCarousel />
      <ClosingBanner />
    </Layout>
  );
};

export default Index;
