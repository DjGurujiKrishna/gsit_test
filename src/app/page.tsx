import HeroBanner from "@/components/HeroBanner";
import IntroSection from "@/components/IntroSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import ExcellenceSection from "@/components/ExcellenceSection";
import CollaborateFooter from "@/components/CollaborateFooter";

export default function Home() {
  return (
    <div className="site" id="top">
      <HeroBanner />
      <IntroSection />
      <ExpertiseSection />
      <ExcellenceSection />
      <CollaborateFooter />
    </div>
  );
}
