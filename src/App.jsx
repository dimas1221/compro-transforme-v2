import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { LanguageProvider } from "./context/LanguageContext";

import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import SuccessStory from "./pages/SuccessStory";
import PartnerJovision from "./pages/PartnerJovision";
import PartnerMaxvision from "./pages/PartnerMaxvision";
import ScrollTop from "./components/ScrollTop";
import ScrollToTopOnRoute from "./components/ScrollToTopOnRoute";
import Footer from "./components/Footer";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTopOnRoute />
        <Navbar />
        <div className="pt-24">
          {" "}
          {/* Wajib supaya konten turun */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products/*" element={<Products />} />
            <Route path="/partner/jovision" element={<PartnerJovision />} />
            <Route path="/partner/maxvision" element={<PartnerMaxvision />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/success-story" element={<SuccessStory />} />
            <Route path="/products/:slug" element={<ProductDetail />} />
          </Routes>
        </div>
        <Footer />
        <ScrollTop />
      </Router>
    </LanguageProvider>
  );
}

export default App;
