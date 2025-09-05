import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SubmitTestimonial() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    designation: "",
    company: "",
    rating: 5,
    title: "",
    feedback: "",
    consent: false,
  });

  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await axios.post("http://localhost:4000/api/testimonials", form);
    alert("Submitted for approval");
    navigate("/home");
  }

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">Submit Testimonial</h2>
      <form onSubmit={handleSubmit} className="grid gap-2">
        <input
          className="border p-2"
          name="fullName"
          placeholder="Full Name"
          onChange={handleChange}
        />
        <input
          className="border p-2"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          className="border p-2"
          name="designation"
          placeholder="Designation"
          onChange={handleChange}
        />
        <input
          className="border p-2"
          name="company"
          placeholder="Company"
          onChange={handleChange}
        />
        <input
          className="border p-2"
          type="number"
          name="rating"
          placeholder="Rating (1-5)"
          onChange={handleChange}
        />
        <input
          className="border p-2"
          name="title"
          placeholder="Title"
          onChange={handleChange}
        />
        <textarea
          className="border p-2"
          name="feedback"
          placeholder="Feedback"
          onChange={handleChange}
        ></textarea>
        <label className="flex gap-2 items-center">
          <input type="checkbox" name="consent" onChange={handleChange} />{" "}
          Consent to publish
        </label>
        <button className="bg-blue-500 text-white py-2">Submit</button>
      </form>
    </div>
  );
}

export default SubmitTestimonial;
