import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  function logout() {
    localStorage.removeItem("user");
    navigate("/");
  }

  return (
    <nav className="flex justify-between items-center bg-blue-600 text-white px-6 py-3">
      <h1 className="font-bold text-lg">Testimonials</h1>
      <div className="flex gap-4 items-center">
        {user && user.role === "user" && (
          <>
            <Link to="/home">Home</Link>
            <Link to="/submit">Submit</Link>
          </>
        )}
        {user && user.role === "admin" && <Link to="/admin">Dashboard</Link>}
        {user && (
          <button onClick={logout} className="bg-red-500 px-2 py-1">
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
