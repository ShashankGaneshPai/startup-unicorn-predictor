import {
  Brain,
  TrendingUp,
  DollarSign,
  ShieldCheck,
  Database,
  Zap,
} from "lucide-react";

function FeaturesSection() {
  const features = [
    {
      icon: Brain,
      title: "AI Prediction Engine",
      description:
        "Random Forest Machine Learning model trained to identify future unicorn startups.",
    },
    {
      icon: TrendingUp,
      title: "Growth Analysis",
      description:
        "Evaluate startup growth potential using funding, hiring, and investor signals.",
    },
    {
      icon: DollarSign,
      title: "Funding Intelligence",
      description:
        "Analyze funding rounds and investment patterns to estimate success probability.",
    },
    {
      icon: Database,
      title: "Data Driven",
      description:
        "Predictions powered by thousands of startup records and feature engineering.",
    },
    {
      icon: ShieldCheck,
      title: "Risk Assessment",
      description:
        "Understand startup risk levels using probability-based classification.",
    },
    {
      icon: Zap,
      title: "Instant Results",
      description:
        "Get real-time predictions in less than a second through FastAPI backend.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-24">

      <div className="text-center mb-16">

        <h2 className="text-5xl font-bold text-white">
          Platform Features
        </h2>

        <p className="text-slate-400 mt-4 text-lg">
          Everything you need to evaluate startup unicorn potential.
        </p>

      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <div
              key={index}
              className="
                bg-slate-900/70
                border
                border-slate-800
                rounded-2xl
                p-8
                hover:border-blue-500/50
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >
              <div className="bg-blue-600/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <Icon size={28} className="text-blue-400" />
              </div>

              <h3 className="text-xl font-semibold text-white mb-4">
                {feature.title}
              </h3>

              <p className="text-slate-400">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>

    </section>
  );
}

export default FeaturesSection;