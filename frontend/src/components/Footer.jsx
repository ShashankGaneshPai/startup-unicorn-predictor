import {
  Github,
  Linkedin,
  Mail,
  Rocket,
} from "lucide-react";

function Footer() {
  return (
    <footer className="border-t border-slate-800 mt-20">

      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">

              <div className="bg-blue-600 p-2 rounded-xl">
                <Rocket size={22} className="text-white" />
              </div>

              <h3 className="text-xl font-bold text-white">
                Unicorn Predictor
              </h3>

            </div>

            <p className="text-slate-400">
              AI-powered startup intelligence platform that predicts
              unicorn potential using machine learning.
            </p>
          </div>

          {/* Project */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Project Details
            </h3>

            <ul className="space-y-2 text-slate-400">
              <li>Random Forest Classifier</li>
              <li>FastAPI Backend</li>
              <li>React Frontend</li>
              <li>ROC-AUC: 95.43%</li>
              <li>Accuracy: 90.68%</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Connect
            </h3>

            <div className="flex gap-4">

              <a
                href="#"
                className="bg-slate-800 p-3 rounded-xl hover:bg-blue-600 transition"
              >
                <Github />
              </a>

              <a
                href="#"
                className="bg-slate-800 p-3 rounded-xl hover:bg-blue-600 transition"
              >
                <Linkedin />
              </a>

              <a
                href="#"
                className="bg-slate-800 p-3 rounded-xl hover:bg-blue-600 transition"
              >
                <Mail />
              </a>

            </div>
          </div>

        </div>

        <div className="border-t border-slate-800 mt-10 pt-6 text-center text-slate-500">

          © 2026 Unicorn Predictor | Built with React, FastAPI and Machine Learning

        </div>

      </div>

    </footer>
  );
}

export default Footer;