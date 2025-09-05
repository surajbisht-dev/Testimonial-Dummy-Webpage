import { Link } from "react-router-dom";

function TestimonialCard({ testimonial }) {
  return (
    <Link
      to={`/testimonial/${testimonial.id}`}
      className="p-4 border rounded hover:bg-gray-50"
    >
      <h3 className="font-bold">{testimonial.title}</h3>
      <p className="text-gray-600">
        {testimonial.fullName} - {testimonial.designation}
      </p>
      <p className="text-sm">Rating: {testimonial.rating}/5</p>
    </Link>
  );
}

export default TestimonialCard;
