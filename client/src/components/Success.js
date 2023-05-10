import React from "react";

const Success = () => {
  return (
    <>
      <main className="container success-sec">
        <img src="img/success.png" alt="ticket Confirmed" />
        <h2>Your Ticket is Confirmed</h2>
        <p>
          Further Journey Details Will be Sent to Your Email and MobileNo
        </p>
        <p>Stay
          Connected ...</p>
        <a href="/getticket" className="home-btn">
         VIEW TICKET
        </a>
        <a href="/" className="home-btn">
          BACK TO HOMEPAGE
        </a>
      </main>
    </>
  );
};

export default Success;
