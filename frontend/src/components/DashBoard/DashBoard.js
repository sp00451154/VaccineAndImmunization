import React from "react";
import { Navigate, useLocation, Link } from "react-router-dom";
import _ from "lodash";
import "./Dashboard.css";

class DashBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submit: true,
      logout: false,
      loggedInUserObj: {},
    };
  }

  componentDidMount() {
    const locationState = this.props.location?.state;
    const loggedInUserName = _.get(locationState, "userName", "");
    const userData = JSON.parse(localStorage.getItem(loggedInUserName));
    if (userData) {
      this.setState({ loggedInUserObj: userData });
    }
  }

  onLogout = () => {
    const userKey = _.get(this.state.loggedInUserObj, "userName", "");
    const userData = JSON.parse(localStorage.getItem(userKey));
    if (userData) {
      userData.isUserLoggedIn = false;
      localStorage.setItem(userKey, JSON.stringify(userData));
    }
    this.setState({ submit: false, logout: true });
  };

  render() {
    const { loggedInUserObj, submit, logout } = this.state;
    const localUname = `${_.get(loggedInUserObj, "firstName", "")} ${_.get(
      loggedInUserObj,
      "lastName",
      ""
    )}`.trim();

    if (!submit) return <Navigate to="/" replace />;

    return (
      <div className="dashboard-container">
        {/* ✅ Bootstrap Navbar */}
        <nav className="custom-navbar navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container">
    <Link to="/" className="navbar-brand d-flex align-items-center custom-brand">
      <img src="/logo.png" alt="Logo" className="custom-logo me-2" />
      <span>Vaccine Dashboard</span>
    </Link>

    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#customNavbarNav"
      aria-controls="customNavbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="customNavbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <button className="btn btn-danger custom-logout-btn" onClick={this.onLogout}>
            Logout
          </button>
        </li>
      </ul>
    </div>
  </div>
</nav>


        {/* User Greeting */}
        <div className="container mt-4 text-center">
          <h1>Hello, {localUname || "User"}</h1>
          <p>Welcome to your dashboard.</p>
        </div>

        {/* Dashboard Cards */}
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-4 mb-3">
              <Link
                to="/appointments"
                className="card p-3 shadow-sm text-decoration-none text-dark"
              >
                <h5>Appointments</h5>
                <p>View and manage your appointments.</p>
              </Link>
            </div>
            <div className="col-md-4 mb-3">
              <Link
                to="/vaccines"
                className="card p-3 shadow-sm text-decoration-none text-dark"
              >
                <h5>Vaccines</h5>
                <p>Browse available vaccines.</p>
              </Link>
            </div>
            <div className="col-md-4 mb-3">
              <Link
                to="/provider-register"
                className="card p-3 shadow-sm text-decoration-none text-dark"
              >
                <h5>Account</h5>
                <p>Manage your profile and logout securely.</p>
              </Link>
            </div>
          </div>
        </div>

        {/* Logout Message */}
        {logout && (
          <div className="text-center text-success mt-3">
            Logout successful.
          </div>
        )}
      </div>
    );
  }
}

const DashBoardWrapper = (props) => {
  const location = useLocation();
  return <DashBoard {...props} location={location} />;
};

export default DashBoardWrapper;
