function PredictInfo() {
  return (
    <div className="bg-slate-900 rounded-3xl p-8 h-full">

      <div className="text-5xl mb-6">
        🦄
      </div>

      <h2 className="text-3xl font-bold text-white mb-4">
        Startup Intelligence Engine
      </h2>

      <p className="text-slate-400 mb-8">
        Our machine learning model analyzes funding,
        investors, team size and growth indicators
        to estimate unicorn potential.
      </p>

      <div className="space-y-5">

        <div className="bg-slate-800 p-4 rounded-xl">
          <p className="text-slate-400">Model Accuracy</p>
          <h3 className="text-2xl font-bold text-green-400">
            90.68%
          </h3>
        </div>

        <div className="bg-slate-800 p-4 rounded-xl">
          <p className="text-slate-400">Features</p>
          <h3 className="text-2xl font-bold text-blue-400">
            31
          </h3>
        </div>

        <div className="bg-slate-800 p-4 rounded-xl">
          <p className="text-slate-400">Algorithm</p>
          <h3 className="text-2xl font-bold text-purple-400">
            Random Forest
          </h3>
        </div>

      </div>

    </div>
  );
}

export default PredictInfo;