import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const [testimonials, setTestimonials] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/testimonials")
      .then((res) => setTestimonials(res.data));
  }, []);

  function logout() {
    localStorage.removeItem("user");
    navigate("/");
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Approved Testimonials</h2>
        <div className="flex gap-2">
          <Link to="/submit" className="bg-green-500 text-white px-4 py-2">
            + Add Testimonial
          </Link>
          <button
            onClick={logout}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </div>

      <div className="grid gap-4">
        {testimonials.map((t) => (
          <Link
            to={`/testimonial/${t.id}`}
            key={t.id}
            className="p-4 border rounded hover:bg-gray-50"
          >
            <h3 className="font-bold">{t.title}</h3>
            <p className="text-gray-600">
              {t.fullName} - {t.designation}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
