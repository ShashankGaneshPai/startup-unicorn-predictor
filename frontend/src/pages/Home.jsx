

import { Link } from "react-router-dom";
import StatsSection from "../components/StatsSection";
import FeaturesSection from "../components/FeaturesSection";
import HowItWorks from "../components/HowItWorks";
import CTASection from "../components/CTASection";
import ModelPerformance from "../components/ModelPerformance";
import FeatureImportance from "../components/FeatureImportance";
import TechStack from "../components/TechStack";
import PredictInfo from "../components/PredictInfo";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white">

      {/* Hero Section */}
      <section className="relative overflow-hidden max-w-7xl mx-auto px-6 pt-28 pb-20">

  {/* Background Glow */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-600/20 blur-[140px] rounded-full"></div>

  <div className="relative text-center">

    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 mb-8">
      🚀 AI-Powered Startup Intelligence Platform
    </div>

    <h1 className="text-7xl md:text-8xl font-black leading-tight">

      Predict The Next

      <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
        Unicorn Startup
      </span>

    </h1>

    <p className="max-w-3xl mx-auto mt-8 text-xl text-slate-400 leading-relaxed">

      Discover startup success potential using Machine Learning,
      investor analytics, funding intelligence and business growth indicators.

    </p>

    <div className="flex flex-wrap justify-center gap-5 mt-12">

  <Link
    to="/predict"
    className="
      bg-blue-600
      hover:bg-blue-700
      px-8
      py-4
      rounded-xl
      text-lg
      font-semibold
      shadow-lg shadow-blue-600/30
      transition
    "
  >
    Start Prediction →
  </Link>

  <Link
    to="/dashboard"
    className="
      border
      border-slate-700
      hover:border-blue-500
      px-8
      py-4
      rounded-xl
      text-lg
      transition
    "
  >
    Analytics Dashboard
  </Link>

</div>

  </div>

</section>


      <StatsSection />

      <FeaturesSection />


      <HowItWorks />
      <ModelPerformance />
      <FeatureImportance />
      <TechStack/>
      <CTASection />

    </div>
  );
}

export default Home;