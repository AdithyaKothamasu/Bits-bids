import { Link } from "react-router-dom";
import RoleNav from "./RoleNav";
import logo from "../images/bid.png";

const Header = () => {
  return (
    <div>
      <nav class="navbar  navbar-expand-lg custom-bg text-color">
        <div class="container-fluid text-color">
          <img
            src={logo}
            width="70"
            height="auto"
            class="d-inline-block align-top"
            alt=""
          />
          <Link to="/" class="navbar-brand">
            <i>
              <b className="text-color">BITSbids</b>
            </i>
          </Link>
          {/* <Link to="/" class="navbar-item">
            <i>
              <b className="text-color">Home</b>
            </i>
          </Link> */}
          <div className="mt-3">
            <ul class="nav-item">
                  <Link to="/" class="nav-link active" aria-current="page">
                    <b className="text-color">Home</b>
                  </Link>
            </ul>
          </div>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              {/* <li class="nav-item">
                <Link to="/about" class="nav-link active" aria-current="page">
                  <b className="text-color">About Us</b>
                </Link>
              </li> */}

              {/* <li class="nav-item">
                <Link to="/contact" class="nav-link active" aria-current="page">
                  <b className="text-color">Contact Us</b>
                </Link>
              </li> */}
            </ul>

            <RoleNav />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
