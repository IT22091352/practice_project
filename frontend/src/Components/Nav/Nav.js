import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <ul className="home-ul">
        <div className="home">
        <Link to="/mainhome" className="active-home">
          <h2>Home</h2>
        </Link>
        </div>
        <div className="contact">
        <Link to="/AddBus" className="active-home">
          <h2>Add buses</h2>
          </Link>
        </div>
        <div className="busDetails">
        <Link to="/busdetails" className="active-home">
            <h2>Bus Details</h2>
            </Link>
        </div>
      </ul>
    </div>
  );
}

export default Nav;
