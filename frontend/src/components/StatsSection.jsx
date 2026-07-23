function StatsSection() {
  const stats = [
    {
      title: "Model Accuracy",
      value: "90.68%",
      desc: "Random Forest Tuned",
    },
    {
      title: "ROC-AUC Score",
      value: "95.43%",
      desc: "Excellent Classification",
    },
    {
      title: "Startups Analyzed",
      value: "10K+",
      desc: "Training Dataset",
    },
    {
      title: "Prediction Speed",
      value: "<1s",
      desc: "Real-Time Inference",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-10">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        {stats.map((stat, index) => (
          <div
            key={index}
            className="
              bg-slate-900/70
              border border-slate-800
              rounded-2xl
              p-6
              hover:border-blue-500/40
              transition-all
              duration-300
              hover:-translate-y-1
            "
          >
            <h3 className="text-slate-400 text-sm mb-2">
              {stat.title}
            </h3>

            <p className="text-4xl font-bold text-white">
              {stat.value}
            </p>

            <p className="text-slate-500 mt-2">
              {stat.desc}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}

export default StatsSection;