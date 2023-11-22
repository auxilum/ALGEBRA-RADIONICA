import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Popis_filmova from "./components/Popis_filmova";
import Film from "./components/Film";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/popis_filmova" element={<Popis_filmova />} />
        <Route path="/popis_filmova/film" element={<Film />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
