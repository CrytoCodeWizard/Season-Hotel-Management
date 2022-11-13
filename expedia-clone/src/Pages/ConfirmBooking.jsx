import React from "react";
import { useNavigate } from "react-router-dom";

const ConfirmBooking = () => {
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <div className="lastdiv">
      <div>
        <img
          style={{ height: "200px", margin: "auto" }}
          src="https://www.poornima.edu.in/wp-content/uploads/2020/08/greentick.jpg"
          alt="Lastpage"
        />
      </div>
      <h2 style={{ fontSize: "30px", fontWeight: "bold" }}>
        Your Booking Is Complete!
      </h2>
      <p style={{ fontSize: "15px", marginTop: "20px", marginBottom: "20px" }}>
        You will be recieving a confirmation email on your registered e-mail
        regarding your trip details.
      </p>
      <p style={{ fontWeight: "bold" }}>Thank Your For Choosing Expedia.</p>
      <button id="lastbutton" onClick={handleClick}>
        Continue Booking
      </button>
    </div>
  );
};

export default ConfirmBooking;
