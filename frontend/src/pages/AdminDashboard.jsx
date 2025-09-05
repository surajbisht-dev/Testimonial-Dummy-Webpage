import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AdminDashboard() {
  const [testimonials, setTestimonials] = useState([]);
  const navigate = useNavigate();

  function fetchData() {
    axios
      .get("http://localhost:4000/api/admin/testimonials")
      .then((res) => setTestimonials(res.data));
  }

  useEffect(() => {
    fetchData();
  }, []);

  async function updateStatus(id, status) {
    await axios.patch("http://localhost:4000/api/admin/testimonials/" + id, {
      status,
    });
    fetchData();
  }

  async function deleteTestimonial(id) {
    await axios.delete("http://localhost:4000/api/admin/testimonials/" + id);
    fetchData();
  }

  function logout() {
    localStorage.removeItem("user");
    navigate("/");
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Admin Dashboard</h2>
        <button
          onClick={logout}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>

      <div className="grid gap-4">
        {testimonials.map((t) => (
          <div key={t.id} className="p-4 border rounded">
            <h3 className="font-bold">{t.title}</h3>
            <p>
              {t.fullName} - {t.designation}
            </p>
            <p>Status: {t.status}</p>
            <div className="flex gap-2 mt-2">
              <button
                onClick={() => updateStatus(t.id, "approved")}
                className="bg-green-500 text-white px-2 py-1"
              >
                Approve
              </button>
              <button
                onClick={() => updateStatus(t.id, "rejected")}
                className="bg-yellow-500 text-white px-2 py-1"
              >
                Reject
              </button>
              <button
                onClick={() => deleteTestimonial(t.id)}
                className="bg-red-500 text-white px-2 py-1"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminDashboard;
