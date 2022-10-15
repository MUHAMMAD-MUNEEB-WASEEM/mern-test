import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import AdminHome from "./pages/AdminHome";
import Creator from "./pages/Creator";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin-home" element={<AdminHome />} />
        <Route path="/student-home" element={<Creator />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
