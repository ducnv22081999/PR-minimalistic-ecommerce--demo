import "./Nav.css";
import logo from "./../assets/img/logo.png";
import cartButton from "./../assets/img/cart-button.png";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="navbar navbar-expand-lg p-0">
              <Link to="/" className="navbar-brand p-0">
                <img className="logo_nav" src={logo} alt="image" />
              </Link>
              <button
                className="navbar-toggler menu__button"
                type="button"
                data-toggle="collapse"
                data-target="#navbarScroll"
                aria-controls="navbarScroll"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarScroll">
                <ul
                  className="navbar-nav mr-auto my-2 my-lg-0 navbar-nav-scroll"
                  style={{ maxHeight: 100 }}
                >
                  <li className="nav-item menu__item">
                    <Link to="/" className="nav-link">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item menu__item">
                    <Link to="/" className="nav-link">
                      Shop
                    </Link>
                  </li>
                  <li className="nav-item menu__item">
                    <Link to="/" className="nav-link">
                      Magazine
                    </Link>
                  </li>
                  <li className="nav-item menu__item">
                    <Link to="/admin/product" className="nav-link">
                      Admin
                    </Link>
                  </li>
                </ul>
                <div className="d-flex">
                  <a className="pr-4">
                    <img src={cartButton} alt="image" />
                  </a>
                  <a className="pl-4">Login</a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
