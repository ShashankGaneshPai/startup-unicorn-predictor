import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

const regions = [
"Asia",
"Europe",
"Latin America",
"MENA",
"North America",
"Oceania",
];

const industries = [
"Blockchain",
"E-commerce",
"Fintech",
"Healthcare",
"Logistics",
"SaaS",
];

const fundingRounds = [
"Pre-Seed",
"Seed",
"Series A",
"Series B",
"Series C",
"Series D",
];

const investors = [
"Andreessen Horowitz",
"Index Ventures",
"Sequoia",
"SoftBank",
"Tiger Global",
"Y Combinator",
];

function Predict() {
const navigate = useNavigate();

const [loading, setLoading] = useState(false);
const [error, setError] = useState("");

const [formData, setFormData] = useState({
founded_year: "",
funding_amount_usd: "",
employee_count: "",
funding_year: "",
funding_month: "",
investor_count: "",
country: "",
region: "",
industry: "",
funding_round: "",
lead_investor: "",
});

const handleChange = (e) => {
setFormData((prev) => ({
...prev,
[e.target.name]: e.target.value,
}));
};

const handleSubmit = async (e) => {
e.preventDefault();
// console.log("Submit button clicked");
// console.log(formData);

setError("");

const currentYear = new Date().getFullYear();

if (Number(formData.founded_year) > currentYear) {
  setError("Founded year cannot be in the future");
  return;
}

if (Number(formData.funding_year) > currentYear) {
  setError("Funding year cannot be in the future");
  return;
}

if (
  Number(formData.funding_month) < 1 ||
  Number(formData.funding_month) > 12
) {
  setError("Funding month must be between 1 and 12");
  return;
}

if (Number(formData.employee_count) <= 0) {
  setError("Employee count must be greater than 0");
  return;
}

if (Number(formData.investor_count) <= 0) {
  setError("Investor count must be greater than 0");
  return;
}

if (Number(formData.funding_amount_usd) <= 0) {
  setError("Funding amount must be greater than 0");
  return;
}

setLoading(true);

try {
  const payload = {
    ...formData,
    founded_year: Number(formData.founded_year),
    funding_amount_usd: Number(formData.funding_amount_usd),
    employee_count: Number(formData.employee_count),
    funding_year: Number(formData.funding_year),
    funding_month: Number(formData.funding_month),
    investor_count: Number(formData.investor_count),
  };

  const response = await api.post("/predict", payload);

  navigate("/result", {
    state: response.data,
  });
} catch (err) {
  console.error(err);
  setError("Prediction failed. Please try again.");
} finally {
  setLoading(false);
}


};

const inputClass =
"p-4 rounded-xl bg-slate-800 border border-slate-700 text-white outline-none focus:ring-2 focus:ring-blue-500";

return ( <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white py-10 px-4"> <div className="max-w-6xl mx-auto">

```
    <div className="text-center mb-10">
      <h1 className="text-5xl font-black mb-4">
        Unicorn Startup Predictor
      </h1>

      <p className="text-slate-400 text-lg">
        Enter startup information and predict unicorn potential using AI.
      </p>
    </div>

    {error && (
      <div className="mb-6 bg-red-500/20 border border-red-500 text-red-300 p-4 rounded-xl">
        {error}
      </div>
    )}

    <form
      onSubmit={handleSubmit}
      className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl grid md:grid-cols-2 gap-6"
    >
      <input
        type="number"
        name="founded_year"
        placeholder="Founded Year"
        value={formData.founded_year}
        onChange={handleChange}
        className={inputClass}
        required
      />

      <input
        type="number"
        name="funding_amount_usd"
        placeholder="Funding Amount (USD)"
        value={formData.funding_amount_usd}
        onChange={handleChange}
        className={inputClass}
        required
      />

      <input
        type="number"
        name="employee_count"
        placeholder="Employee Count"
        value={formData.employee_count}
        onChange={handleChange}
        className={inputClass}
        required
      />

      <input
        type="number"
        name="funding_year"
        placeholder="Funding Year"
        value={formData.funding_year}
        onChange={handleChange}
        className={inputClass}
        required
      />

      <input
        type="number"
        name="funding_month"
        placeholder="Funding Month (1-12)"
        value={formData.funding_month}
        onChange={handleChange}
        min="1"
        max="12"
        className={inputClass}
        required
      />

      <input
        type="number"
        name="investor_count"
        placeholder="Investor Count"
        value={formData.investor_count}
        onChange={handleChange}
        className={inputClass}
        required
      />

      <input
        type="text"
        name="country"
        placeholder="Country"
        value={formData.country}
        onChange={handleChange}
        className={inputClass}
        required
      />

      <select
        name="region"
        value={formData.region}
        onChange={handleChange}
        className={inputClass}
        required
      >
        <option value="">Select Region</option>
        {regions.map((region) => (
          <option key={region} value={region}>
            {region}
          </option>
        ))}
      </select>

      <select
        name="industry"
        value={formData.industry}
        onChange={handleChange}
        className={inputClass}
        required
      >
        <option value="">Select Industry</option>
        {industries.map((industry) => (
          <option key={industry} value={industry}>
            {industry}
          </option>
        ))}
      </select>

      <select
        name="funding_round"
        value={formData.funding_round}
        onChange={handleChange}
        className={inputClass}
        required
      >
        <option value="">Select Funding Round</option>
        {fundingRounds.map((round) => (
          <option key={round} value={round}>
            {round}
          </option>
        ))}
      </select>

      <input
  type="text"
  name="lead_investor"
  placeholder="Lead Investor (e.g. Sequoia Capital)"
  value={formData.lead_investor}
  onChange={handleChange}
  className={inputClass}
  required
/>

      <button
        type="submit"
        disabled={loading}
        className="md:col-span-2 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 py-4 rounded-xl font-bold text-lg transition disabled:opacity-50"
      >
        {loading
          ? "Analyzing Startup..."
          : "Predict Unicorn Potential 🚀"}
      </button>
    </form>
  </div>
</div>


);
}

export default Predict;
