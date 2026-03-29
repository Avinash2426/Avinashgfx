import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import PortfolioGrid from "./PortfolioGrid";
import AboutSection from "./AboutSection";
import WhyChooseMe from "./WhyChooseMe";
import StatsSection from "./StatsSection";
import ReviewsSection from "./ReviewsSection";
import FAQSection from "./FAQSection";
import Footer from "./Footer";

function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <PortfolioGrid />
      <AboutSection />
      <WhyChooseMe />
      <StatsSection />
      <ReviewsSection />
      <FAQSection />
      <Footer />
    </div>
  );
}

export default Home;
