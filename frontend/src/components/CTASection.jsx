import { Link } from "react-router-dom";

function CTASection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">

      <div
        className="
          bg-gradient-to-r
          from-blue-600
          to-indigo-600
          rounded-3xl
          p-16
          text-center
        "
      >
        <h2 className="text-5xl font-bold text-white mb-6">
          Ready to Predict Startup Success?
        </h2>

        <p className="text-blue-100 text-lg mb-10">
          Analyze any startup instantly using our machine learning platform.
        </p>

        <Link
          to="/predict"
          className="
            bg-white
            text-slate-900
            px-8
            py-4
            rounded-xl
            font-bold
            hover:scale-105
            transition
          "
        >
          Start Prediction
        </Link>
      </div>

    </section>
  );
}

export default CTASection;