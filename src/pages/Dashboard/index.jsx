import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import NavBar from "../../components/NavBar";
import "./index.css";
function Dashboard(props) {

  const onLogoutClick = e => {
    e.preventDefault();
    props.logoutUser();
  };
    const { user } = props.auth;
    console.log(user);
return (
  <div className="dashboardcontainer">
    <NavBar onLogoutClick={onLogoutClick}/>
    <div className="container d-flex">
      
    </div>
    {/* {user.role.toLowerCase() === "TEACHER".toLowerCase()?(<div>Teacher</div>):(<div>Student</div>)}
    <button onClick={onLogoutClick}>Logout</button> */}
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