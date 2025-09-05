import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function TestimonialDetail() {
  const { id } = useParams();
  const [testimonial, setTestimonial] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/testimonials/" + id)
      .then((res) => setTestimonial(res.data))
      .catch(() => alert("Not available"));
  }, [id]);

  if (!testimonial) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6 max-w-xl mx-auto border rounded">
      <h2 className="text-2xl font-bold mb-2">{testimonial.title}</h2>
      <p className="text-gray-600 mb-2">
        {testimonial.fullName} - {testimonial.designation},{" "}
        {testimonial.company}
      </p>
      <p className="mb-2">Rating: {testimonial.rating}/5</p>
      <p>{testimonial.feedback}</p>
    </div>
  );
}

export default TestimonialDetail;
