import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "./UserContext";

let NavBar = () => {
  //get context
  let userContext = useContext(UserContext);

  //When the user clicks on Logout button
  let onLogoutClick = (event) => {
    event.preventDefault();

    //dispatch calls reducer
    userContext.dispatch({
      type: "logout",
    });

    window.location.hash = "/";
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-style">
      <a className="navbar-brand" href="/#">
        eCommerce
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          {userContext.user.isLoggedIn &&
          userContext.user.currentUserRole === "user" ? (
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/dashboard"
                activeClassName="active"
              >
                <i className="fa fa-dashboard"></i> Dashboard
              </NavLink>
            </li>
          ) : (
            ""
          )}

          {userContext.user.isLoggedIn &&
          userContext.user.currentUserRole === "user" ? (
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/store"
                activeClassName="active"
              >
                <i className="fa fa-shopping-bag"></i> Store
              </NavLink>
            </li>
          ) : (
            ""
          )}

          {userContext.user.isLoggedIn &&
          userContext.user.currentUserRole === "admin" ? (
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/products"
                activeClassName="active"
              >
                <i className="fa fa-suitcase"></i> Products
              </NavLink>
            </li>
          ) : (
            ""
          )}

          {!userContext.user.isLoggedIn ? (
            <li>
              <NavLink
                className="nav-link"
                to="/"
                activeClassName="active"
                exact={true}
              >
                Login
              </NavLink>
            </li>
          ) : (
            ""
          )}

          {!userContext.user.isLoggedIn ? (
            <li>
              <NavLink
                className="nav-link"
                to="/register"
                activeClassName="active"
              >
                Register
              </NavLink>
            </li>
          ) : (
            ""
          )}
        </ul>

        {/* right box starts */}
        {userContext.user.isLoggedIn ? (
          <div style={{ marginRight: 100 }}>
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fa fa-user-circle"></i>{" "}
                  {userContext.user.currentUserName}
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a
                    className="dropdown-item"
                    href="/#"
                    onClick={onLogoutClick}
                  >
                    Logout
                  </a>
                </div>
              </li>
            </ul>
          </div>
        ) : (
          ""
        )}

        {/* right box ends */}
      </div>
    </nav>
  );
};

export default NavBar;
