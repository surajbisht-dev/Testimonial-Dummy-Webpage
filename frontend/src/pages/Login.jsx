import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/api/login", form);
      localStorage.setItem("user", JSON.stringify(res.data));
      if (res.data.role === "admin") navigate("/admin");
      else navigate("/home");
    } catch {
      alert("Invalid credentials");
    }
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow w-80"
      >
        <h2 className="text-xl font-bold mb-4">Login</h2>
        <input
          className="w-full mb-2 p-2 border"
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />
        <input
          className="w-full mb-2 p-2 border"
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          className="w-full mb-4 p-2 border"
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <button className="w-full bg-blue-500 text-white py-2">Login</button>
      </form>
    </div>
  );
}

export default Login;
