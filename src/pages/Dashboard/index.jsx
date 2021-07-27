import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

function Dashboard(props) {

  const onLogoutClick = e => {
    e.preventDefault();
    props.logoutUser();
  };
    const { user } = props.auth;
    console.log(user);
return (
  <div>
    {user.role === "TEACHER"?(<div>Teacher</div>):(<div>Student</div>)}
    <button onClick={onLogoutClick}></button>
  </div>
);
  
}
Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);