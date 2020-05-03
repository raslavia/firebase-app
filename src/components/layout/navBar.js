import React from "react";
import { Link } from "react-router-dom";
import SingnedInLinks from "./signedInLinks";
import SingnedOutLinks from "./signedOutLinks";
import { connect } from "react-redux";

const NavBar = props => {
  const { auth, profile } = props;
  const links = auth.uid ? (
    <SingnedInLinks profile={profile} />
  ) : (
    <SingnedOutLinks />
  );
  return (
    <nav className='nav-wrapper grey darken-3'>
      <div className='container'>
        <Link to='/' className='brand-logo'>
          PLAN
        </Link>
        {links}
      </div>
    </nav>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

export default connect(mapStateToProps)(NavBar);
