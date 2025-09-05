import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import SubmitTestimonial from "./pages/SubmitTestimonial";
import TestimonialDetail from "./pages/TestimonialDetail";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/submit" element={<SubmitTestimonial />} />
      <Route path="/testimonial/:id" element={<TestimonialDetail />} />
      <Route path="/admin" element={<AdminDashboard />} />
    </Routes>
  );
}

export default App;
