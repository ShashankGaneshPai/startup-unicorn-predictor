import { Database, Brain, BadgeCheck } from "lucide-react";

function HowItWorks() {
  const steps = [
    {
      icon: Database,
      title: "Enter Startup Data",
      description:
        "Provide startup funding, employee count, investors, region and industry details.",
    },
    {
      icon: Brain,
      title: "AI Model Analysis",
      description:
        "Our Random Forest model analyzes multiple startup success indicators instantly.",
    },
    {
      icon: BadgeCheck,
      title: "Receive Prediction",
      description:
        "Get probability score, confidence level and risk assessment in real time.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-24">

      <div className="text-center mb-16">

        <h2 className="text-5xl font-bold text-white">
          How It Works
        </h2>

        <p className="text-slate-400 mt-4 text-lg">
          Predict startup unicorn potential in three simple steps.
        </p>

      </div>

      <div className="grid md:grid-cols-3 gap-8">

        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <div
              key={index}
              className="
                bg-slate-900/70
                border border-slate-800
                rounded-2xl
                p-8
                relative
                hover:border-blue-500/50
                transition-all
              "
            >
              <div className="absolute top-4 right-4 text-blue-500 text-5xl font-bold opacity-20">
                {index + 1}
              </div>

              <div className="w-16 h-16 rounded-2xl bg-blue-600/20 flex items-center justify-center mb-6">
                <Icon size={32} className="text-blue-400" />
              </div>

              <h3 className="text-2xl font-semibold text-white mb-4">
                {step.title}
              </h3>

              <p className="text-slate-400">
                {step.description}
              </p>
            </div>
          );
        })}
      </div>

    </section>
  );
}

export default HowItWorks;