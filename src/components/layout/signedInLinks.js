import React from "react";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";

const SingnedInLinks = (props) => {
  const { signOut } = props;
  return (
    <ul className='right'>
      <li>
        <NavLink to='/create'>New project</NavLink>
      </li>
      <li>
        <Link to='/' onClick={signOut}>
          Log out
        </Link>
      </li>
      <li>
        <NavLink to='/' className='btn btn-floating pink lighten-1'>
          {props.profile.initials}
        </NavLink>
      </li>
    </ul>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(null, mapDispatchToProps)(SingnedInLinks);
