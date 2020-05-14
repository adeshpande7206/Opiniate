import React from "react";
import { NavLink, Link } from 'react-router-dom';

function home() {
  return (
<div>
<div className="container">
  <div className="columns">
    <div className="column c1 is-8 is-full-touch">
      <div className="contents">
        <img src={require("../../images/Ellipse.png")} alt="Ellipse" />
        <p className="is-size-5 has-text-weight-semibold is-uppercase">
          Welcome !
        </p>
        <h2 className="is-size-1 has-text-weight-bold">
          Host Free & Private Polls.
        </h2>
        <p className="is-size-6-mobile">
          Join us ! To stay Updated about your Products.
        </p>
        <Link to='/emptyDash'><button className="button is-dark is-medium">Create</button></Link>
      </div>
    </div>
    <Link to='/emptyDash'><button className="btn button is-dark is-medium">Create</button></Link>
    <div className="column c2 is-4 is-hidden-touch"></div>
  </div>
</div>
<div className="team-arrow">
  <a href="#team-carousel">
    <img src={require("../../images/home-arrow.png")} alt="arrow" />
  </a>
</div>
<div className="team">
  <div className="team-details" id="team-carousel">
    <h2 className="is-size-2 has-text-weight-semibold">Meet the Team</h2>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, error
      sunt magni obcaecati et voluptatem.
    </p>
    <div className="team-carousel">
    <div className="team-info"></div>
    <div className="team-info"></div>
    <div className="team-info"></div>
  </div>
  </div>
</div>
</div>
  );
}

export default home;
