import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
  faMap,
  faShoePrints,
  faUserShield,
} from "@fortawesome/free-solid-svg-icons";
import "./Process.css";

const Process = () => {
  const feet = <FontAwesomeIcon icon={faShoePrints} />;
  const map = <FontAwesomeIcon icon={faMap} />;
  const cart = <FontAwesomeIcon icon={faCartPlus} />;
  const shield = <FontAwesomeIcon icon={faUserShield} />;
  return (
    <div>
      <h1 className="text-center my-5 fst-italic text-success">
        We Make All The
        <br />
        Process Easy
      </h1>

      <div className="row process">
        <div className="col-lg-6 col-sm-12">
          <div className="d-flex p-4">
            <p className="logo fs-1 m-3">{feet}</p>
            <div>
              <h4>Best Travel Agent</h4>
              <p>
                Here you can find our handy resources in a flash. Book a tour
                online, personalise a trip for your customer, access order
                brochures online.
              </p>
            </div>
          </div>
          <div className="d-flex p-4">
            <p className="logo fs-1 m-3">{map}</p>
            <div>
              <h4>Beautiful Places</h4>
              <p>
                Most beautiful places in the world like Greece, Croatia, Chile
                and Italy, as well as U.S. places such as Colorado, Washington,
                South Carolina and many other states.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-sm-12">
          <div className="d-flex p-4">
            <p className="logo fs-1 m-3">{shield}</p>
            <div>
              <h4>Trust & Safety</h4>
              <p>
                Safety and security are vital to providing quality in tourism.
                More than any other economic activity, the success or failure of
                a tourism destination depends on being able to provide a safe
                and secure environment for visitors.
              </p>
            </div>
          </div>
          <div className="d-flex p-4">
            <p className="logo fs-1 m-3">{cart}</p>
            <div>
              <h4>Fast Booking</h4>
              <p>
                Communicate with guests from your account rather than logging in
                into all various booking portals. Since all messages are
                dynamically allocated to your bookings, you can easily email or
                chat with guests, as well as review conversation history. Online
                or via our mobile app.
              </p>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Process;
