import "./App.css";
import { Route, Routes } from "react-router-dom";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home/Home";
import Header from "./Pages/Shared/Header/Header";
import Footer from "./Pages/Shared/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route to="/" element={<Home />} />
        <Route to="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
