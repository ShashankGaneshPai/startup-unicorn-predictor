import { useLocation, useNavigate } from "react-router-dom";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

function Result() {
  const location = useLocation();
  const navigate = useNavigate();

  const data = location.state;

  if (!data) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col justify-center items-center text-white">
        <h1 className="text-3xl font-bold mb-4">
          No Prediction Data Found
        </h1>

        <button
          onClick={() => navigate("/")}
          className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl"
        >
          Go Home
        </button>
      </div>
    );
  }

  const probability = Number(data.probability) || 0;

  const existing =
  JSON.parse(localStorage.getItem("predictions")) || [];

existing.unshift({
  prediction: data.prediction,
  probability: probability,
  date: new Date().toLocaleDateString(),
});

localStorage.setItem(
  "predictions",
  JSON.stringify(existing.slice(0, 10))
);

  const chartData = [
    {
      name: "Unicorn Potential",
      value: probability,
    },
    {
      name: "Remaining Probability",
      value: 100 - probability,
    },
  ];

  const recommendation =
    probability >= 80
      ? "Strong unicorn potential. Funding pattern, investor profile and growth indicators resemble successful unicorn startups."
      : probability >= 50
      ? "Moderate growth potential. Startup shows promising indicators but requires stronger scaling and investment traction."
      : "High-risk startup profile. Additional funding, hiring growth and market validation are recommended.";

  const insights =
    probability >= 80
      ? [
          "Strong funding pattern detected",
          "Investor profile matches successful startups",
          "Growth metrics indicate scalability",
          "High unicorn potential identified",
        ]
      : probability >= 50
      ? [
          "Moderate funding activity",
          "Some positive growth signals",
          "Investor profile partially matches unicorns",
          "Further scaling required",
        ]
      : [
          "Weak funding pattern",
          "Limited investor activity",
          "Growth indicators are low",
          "Higher startup risk detected",
        ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white">

      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* Back Button */}

        <button
          onClick={() => navigate("/predict")}
          className="mb-8 text-slate-400 hover:text-white transition"
        >
          ← Back To Predictor
        </button>

        {/* Hero Card */}

        <div className="bg-slate-900/70 backdrop-blur-md border border-slate-800 rounded-3xl p-10 mb-10 text-center">

          <div className="text-7xl mb-5">
            {data.prediction === "Unicorn" ? "🦄" : "📉"}
          </div>

          <h1 className="text-5xl font-black mb-4">
            {data.prediction}
          </h1>

          <p className="text-slate-400 text-lg">
            AI Startup Prediction Result
          </p>

        </div>

        {/* Probability */}

        <div className="bg-slate-900 rounded-3xl p-8 mb-10">

          <div className="flex justify-between mb-4">

            <h2 className="text-xl font-semibold">
              Unicorn Probability
            </h2>

            <span className="text-blue-400 font-bold text-xl">
              {probability.toFixed(2)}%
            </span>

          </div>

          <div className="w-full bg-slate-800 rounded-full h-6 overflow-hidden">

            <div
              className="h-6 rounded-full bg-gradient-to-r from-blue-500 via-cyan-500 to-green-500 transition-all duration-1000"
              style={{
                width: `${probability}%`,
              }}
            />

          </div>

        </div>

        {/* Stats Cards */}

        <div className="grid md:grid-cols-3 gap-6 mb-10">

          <div className="bg-slate-900 rounded-2xl p-6">

            <p className="text-slate-400 mb-2">
              Confidence
            </p>

            <h3 className="text-3xl font-bold text-green-400">
              {data.confidence}
            </h3>

          </div>

          <div className="bg-slate-900 rounded-2xl p-6">

            <p className="text-slate-400 mb-2">
              Risk Level
            </p>

            <h3 className="text-3xl font-bold text-yellow-400">
              {data.risk_level}
            </h3>

          </div>

          <div className="bg-slate-900 rounded-2xl p-6">

            <p className="text-slate-400 mb-2">
              Match Score
            </p>

            <h3 className="text-3xl font-bold text-blue-400">
              {probability.toFixed(1)}%
            </h3>

          </div>

        </div>

        {/* Chart + Insights */}

        <div className="grid lg:grid-cols-2 gap-8 mb-10">

          {/* Pie Chart */}

          <div className="bg-slate-900 rounded-3xl p-8">

            <h2 className="text-2xl font-bold mb-6">
              Prediction Distribution
            </h2>

            <div className="h-[320px]">

              <ResponsiveContainer width="100%" height="100%">

                <PieChart>

                  <Pie
                    data={chartData}
                    dataKey="value"
                    nameKey="name"
                    innerRadius={70}
                    outerRadius={110}
                  >

                    <Cell fill="#22c55e" />
                    <Cell fill="#ef4444" />

                  </Pie>

                  <Tooltip />
                  <Legend />

                </PieChart>

              </ResponsiveContainer>

            </div>

          </div>

          {/* Insights */}

          <div className="bg-slate-900 rounded-3xl p-8">

            <h2 className="text-2xl font-bold mb-6">
              AI Insights
            </h2>

            <div className="space-y-4">

              {insights.map((item, index) => (
                <div
                  key={index}
                  className="bg-slate-800 p-4 rounded-xl"
                >
                  ✅ {item}
                </div>
              ))}

            </div>

          </div>

        </div>

        {/* Recommendation */}

        <div className="bg-slate-900 rounded-3xl p-8 mb-10">

          <h2 className="text-2xl font-bold mb-4">
            AI Recommendation
          </h2>

          <p className="text-slate-300 leading-relaxed text-lg">
            {recommendation}
          </p>

        </div>

        {/* Actions */}

        <div className="flex flex-wrap justify-center gap-4">

          <button
            onClick={() => navigate("/predict")}
            className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-xl font-semibold"
          >
            New Prediction
          </button>

          <button
            onClick={() => navigate("/")}
            className="border border-slate-700 hover:border-blue-500 px-8 py-3 rounded-xl font-semibold"
          >
            Back Home
          </button>

        </div>

      </div>
    </div>
  );
}

export default Result;


// Founded Year      : 2018
// Funding Amount USD: 25000000
// Employee Count    : 500
// Funding Year      : 2024
// Funding Month     : 8
// Investor Count    : 5

// Country           : India
// Region            : Asia
// Industry          : Fintech
// Funding Round     : Series B
// Lead Investor     : Sequoia


// Founded Year      : 2025
// Funding Amount USD: 10000
// Employee Count    : 3
// Funding Year      : 2025
// Funding Month     : 2
// Investor Count    : 1

// Country           : India
// Region            : Asia
// Industry          : Logistics
// Funding Round     : Pre-Seed
// Lead Investor     : Y Combinator