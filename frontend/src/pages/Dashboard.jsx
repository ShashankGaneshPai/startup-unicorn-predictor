import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  LineChart,
  Line,
} from "recharts";

function Dashboard() {

  const industryData = [
    { name: "Fintech", value: 35 },
    { name: "SaaS", value: 25 },
    { name: "Healthcare", value: 15 },
    { name: "E-Commerce", value: 15 },
    { name: "Blockchain", value: 10 },
  ];

  const fundingData = [
    { round: "Seed", startups: 120 },
    { round: "Series A", startups: 95 },
    { round: "Series B", startups: 70 },
    { round: "Series C", startups: 40 },
  ];

  const trendData = [
    { year: 2020, unicorns: 15 },
    { year: 2021, unicorns: 32 },
    { year: 2022, unicorns: 41 },
    { year: 2023, unicorns: 55 },
    { year: 2024, unicorns: 72 },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white p-10">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-bold mb-10">
          Analytics Dashboard
        </h1>

        <div className="grid md:grid-cols-4 gap-6 mb-10">

          <div className="bg-slate-900 p-6 rounded-2xl">
            <h3 className="text-slate-400">Predictions</h3>
            <p className="text-4xl font-bold">1,247</p>
          </div>

          <div className="bg-slate-900 p-6 rounded-2xl">
            <h3 className="text-slate-400">Success Rate</h3>
            <p className="text-4xl font-bold text-green-400">
              90.68%
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-2xl">
            <h3 className="text-slate-400">Models</h3>
            <p className="text-4xl font-bold">
              3
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-2xl">
            <h3 className="text-slate-400">Features</h3>
            <p className="text-4xl font-bold">
              31
            </p>
          </div>

        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          <div className="bg-slate-900 rounded-2xl p-8">

            <h2 className="text-2xl font-bold mb-6">
              Unicorn Growth Trend
            </h2>

            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={trendData}>
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="unicorns"
                  stroke="#3B82F6"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>

          </div>

          <div className="bg-slate-900 rounded-2xl p-8">

            <h2 className="text-2xl font-bold mb-6">
              Industry Distribution
            </h2>

            <ResponsiveContainer width="100%" height={300}>
              <PieChart>

                <Pie
                  data={industryData}
                  dataKey="value"
                  outerRadius={100}
                >

                  <Cell fill="#3B82F6"/>
                  <Cell fill="#22C55E"/>
                  <Cell fill="#EAB308"/>
                  <Cell fill="#EF4444"/>
                  <Cell fill="#8B5CF6"/>

                </Pie>

                <Tooltip />

              </PieChart>
            </ResponsiveContainer>

          </div>

        </div>

        <div className="mt-10 bg-slate-900 rounded-2xl p-8">

          <h2 className="text-2xl font-bold mb-6">
            Funding Round Analysis
          </h2>

          <ResponsiveContainer width="100%" height={300}>

            <BarChart data={fundingData}>

              <XAxis dataKey="round" />
              <YAxis />
              <Tooltip />

              <Bar
                dataKey="startups"
                fill="#3B82F6"
              />

            </BarChart>

          </ResponsiveContainer>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;