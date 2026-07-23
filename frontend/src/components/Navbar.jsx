import { Link } from "react-router-dom";
import { Rocket } from "lucide-react";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/70 border-b border-slate-800">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <Link
          to="/"
          className="flex items-center gap-3"
        >
          <div className="bg-blue-600 p-2 rounded-xl">
            <Rocket size={24} />
          </div>

          <div>
            <h1 className="text-white text-xl font-bold">
              Unicorn Predictor
            </h1>

            <p className="text-xs text-slate-400">
              AI Startup Intelligence
            </p>
          </div>
        </Link>

        <div className="flex gap-8 items-center">

          <Link
            to="/"
            className="text-slate-300 hover:text-white"
          >
            Home
          </Link>

          <Link
            to="/predict"
            className="text-slate-300 hover:text-white"
          >
            Analyze
          </Link>

          <Link
  to="/predict"
  className="
    bg-blue-600
    hover:bg-blue-700
    px-5
    py-2
    rounded-lg
    text-white
    font-medium
    transition
  "
>
  Get Started
</Link>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;