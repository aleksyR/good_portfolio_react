import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Legal from "./pages/Legal";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apropos" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
