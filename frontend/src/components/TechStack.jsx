function TechStack() {

  const tech = [
    "React",
    "FastAPI",
    "Python",
    "Random Forest",
    "Scikit-Learn",
    "Pandas",
    "NumPy",
    "Tailwind CSS",
    "Recharts",
    "Joblib",
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      <h2 className="text-center text-5xl font-bold text-white mb-12">
        Built With
      </h2>

      <div className="flex flex-wrap justify-center gap-4">

        {tech.map((item) => (
          <div
            key={item}
            className="
              bg-slate-900
              border border-slate-800
              px-6 py-3
              rounded-xl
              text-slate-300
              hover:border-blue-500
              transition
            "
          >
            {item}
          </div>
        ))}

      </div>

    </section>
  );
}

export default TechStack;