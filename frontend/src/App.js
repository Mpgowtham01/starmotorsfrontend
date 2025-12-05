import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Home from "./components/Home";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/bike" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
