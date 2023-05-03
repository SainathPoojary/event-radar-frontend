import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Events from "./pages/Events";
import Colleges from "./pages/Colleges";
import Event from "./pages/Event";
import Header from "./components/Header";
import College from "./pages/College";
import Admin from "./pages/Admin";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/colleges" element={<Colleges />} />
        <Route path="/event" element={<Event />} />
        <Route path="/college" element={<College />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  );
}

export default App;
