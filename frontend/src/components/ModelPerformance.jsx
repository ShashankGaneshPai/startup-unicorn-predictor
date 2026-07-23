import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function ModelPerformance() {

  const data = [
    {
      model: "RF Baseline",
      accuracy: 90.34,
    },
    {
      model: "RF Tuned",
      accuracy: 90.68,
    },
    {
      model: "XGBoost",
      accuracy: 89.98,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-24">

      <div className="text-center mb-16">

        <h2 className="text-5xl font-bold text-white">
          Model Performance
        </h2>

        <p className="text-slate-400 mt-4 text-lg">
          Evaluation metrics from trained machine learning models.
        </p>

      </div>

      <div className="grid lg:grid-cols-2 gap-8">

        {/* Left Card */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">

          <h3 className="text-2xl font-semibold text-white mb-6">
            Best Model Metrics
          </h3>

          <div className="space-y-6">

            <div>
              <p className="text-slate-400 mb-2">Accuracy</p>

              <div className="w-full h-4 bg-slate-800 rounded-full">
                <div
                  className="h-4 rounded-full bg-blue-500"
                  style={{ width: "90.68%" }}
                />
              </div>

              <p className="text-white mt-2">90.68%</p>
            </div>

            <div>
              <p className="text-slate-400 mb-2">ROC-AUC</p>

              <div className="w-full h-4 bg-slate-800 rounded-full">
                <div
                  className="h-4 rounded-full bg-green-500"
                  style={{ width: "95.43%" }}
                />
              </div>

              <p className="text-white mt-2">95.43%</p>
            </div>

            <div>
              <p className="text-slate-400 mb-2">F1 Score</p>

              <div className="w-full h-4 bg-slate-800 rounded-full">
                <div
                  className="h-4 rounded-full bg-purple-500"
                  style={{ width: "94.08%" }}
                />
              </div>

              <p className="text-white mt-2">94.08%</p>
            </div>

          </div>

        </div>

        {/* Right Chart */}

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">

          <h3 className="text-2xl font-semibold text-white mb-6">
            Model Comparison
          </h3>

          <ResponsiveContainer width="100%" height={300}>

            <BarChart data={data}>

              <XAxis dataKey="model" />

              <YAxis />

              <Tooltip />

              <Bar
                dataKey="accuracy"
                fill="#3B82F6"
                radius={[8, 8, 0, 0]}
              />

            </BarChart>

          </ResponsiveContainer>

        </div>

      </div>

    </section>
  );
}

export default ModelPerformance;