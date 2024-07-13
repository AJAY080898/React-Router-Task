import { NavLink } from "react-router-dom";

function NavigationBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand d-flex align-items-center" to="/icon">
          <h5><img src="https://www.guvi.in/blog/wp-content/themes/guvi-blog/assets/images/guvi-logo.svg" alt="Guvi Blog Logo" width={100} className="me-2" /></h5>
          <h5 className="sm-0">|Blog</h5>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                exact
                to="/"
                activeClassName="active"
              >
                All
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/fullstack"
                activeClassName="active"
              >
                Full Stack Development
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/datascience"
                activeClassName="active"
              >
                Data Science
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/cybersecurity"
                activeClassName="active"
              >
                Cyber Security
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/career"
                activeClassName="active"
              >
                Career
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
