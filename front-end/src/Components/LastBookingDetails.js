import React, { useEffect, useContext } from "react";
import "../Css/LastBookingDetails.css"; // Import styling for the component
import BsContext from "../Context/BsContext"; // Import context for managing state
import { seats } from "../data"; // Import seat data for rendering

const LastBookingDetails = () => {
  // Access context using the useContext hook
  const context = useContext(BsContext);

  // Destructure values from the context
  const { handleGetLastBooking, lastBookingDetails } = context;

  // Fetch last booking details when the component mounts
  useEffect(() => {
    handleGetLastBooking(); // Call the API to get last booking details
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="last_booking_details_container_main">
      <h2 className="last_booking_details_header">Last Booking Details:</h2>
      {lastBookingDetails ? (
        <>
          <div className="seats_container">
            <p className="seats_header">Seats:</p>
            <ul className="seats">
              {seats.map((seat, index) => (
                // Display each seat and its count
                <li className="seat_value" key={index}>
                  {seat}: {Number(lastBookingDetails.seats[seat])}
                </li>
              ))}
            </ul>
          </div>
          <p className="slot" style={{ textAlign: "left" }}>
            Slot: <span>{lastBookingDetails.slot}</span>
          </p>
          <p className="movie">
            Movie: <span>{lastBookingDetails.movie}</span>
          </p>
        </>
      ) : (
        // Display a message when no previous booking is found
        <p className="no_previous_booking_msg">No Previous Booking Found!</p>
      )}
    </div>
  );
};

export default LastBookingDetails;
