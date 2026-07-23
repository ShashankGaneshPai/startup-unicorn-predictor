// // import { BrowserRouter, Routes, Route } from "react-router-dom";

// // import Home from "./pages/Home";
// // import Predict from "./pages/Predict";
// // import Result from "./pages/Result";

// // function App() {
// //   return (
// //     <BrowserRouter>
// //       <Routes>

// //         <Route path="/" element={<Home />} />

// //         <Route path="/predict" element={<Predict />} />

// //         <Route path="/result" element={<Result />} />

// //       </Routes>
// //     </BrowserRouter>
// //   );
// // }

// // export default App;

// import { Routes, Route } from "react-router-dom";

// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import Dashboard from "./pages/Dashboard";

// function App() {
//   return (
//     <>
//       <Navbar />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//       </Routes>
//     </>
//   );
// }

// export default App;

import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Predict from "./pages/Predict";
import Result from "./pages/Result";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/predict" element={<Predict />} />
        <Route path="/result" element={<Result />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;