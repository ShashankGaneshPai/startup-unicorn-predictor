import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

function FeatureImportance() {

  const featureData = [
    { feature: "Funding Amount", importance: 0.24 },
    { feature: "Employee Count", importance: 0.18 },
    { feature: "Startup Age", importance: 0.15 },
    { feature: "Investor Count", importance: 0.13 },
    { feature: "Founded Year", importance: 0.11 },
    { feature: "Funding Year", importance: 0.10 },
    { feature: "Funding Month", importance: 0.09 },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-24">

      <div className="text-center mb-16">

        <h2 className="text-5xl font-bold text-white">
          Feature Importance
        </h2>

        <p className="text-slate-400 mt-4 text-lg">
          Key factors influencing unicorn prediction.
        </p>

      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">

        <ResponsiveContainer width="100%" height={400}>

          <BarChart data={featureData} layout="vertical">

            <XAxis type="number" />

            <YAxis
              type="category"
              dataKey="feature"
              width={120}
            />

            <Tooltip />

            <Bar
              dataKey="importance"
              fill="#3B82F6"
              radius={[0, 8, 8, 0]}
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </section>
  );
}

export default FeatureImportance;