import FeatureCard from "./components/feature-card";
import { FEATURES_DATA } from "../data";
import { FeatureType } from "./type";
import FeaturHeader from "./components/feature-header";

const FeaturesSection = () => {
  return (
    <section className="bg-brand-navy/20 py-24 px-8 border-y border-white/5">
      <div className="max-w-6xl mx-auto">
        {/* --- Header Section --- */}
        <FeaturHeader />
        {/* --- Cards Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {FEATURES_DATA.map((feature: FeatureType) => (
            <FeatureCard
              key={feature.id}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
