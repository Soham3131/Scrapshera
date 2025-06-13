import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../src/components/Navbar";
import Home from "./pages/Home";
import ScrapRates from "../src/pages/scrapRates"
import Footer from "../src/pages/Footer"

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/scrap-rates" element={<ScrapRates />} />
      </Routes>
      <Footer />
    </Router>
  );
}
