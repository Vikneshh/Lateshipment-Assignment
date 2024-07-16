import React from "react";
import logo from "../assets/logo-color.png";
import useAnimationObserver from "../utils/useAnimationObserver";

const Navbar = () => {
  const fadeInLeft = useAnimationObserver("animate__fadeInLeft");
  return (
    <nav ref={fadeInLeft}>
      <div className="bg-white">
        <ul className="d-flex justify-content-end align-items-center navbar-nav flex-row d-none d-lg-flex">
          <li className="nav-item mx-4 ">
            <a href="#" className="nav-link">
              Solutions
              <i className="bi bi-chevron-down ms-2 custom-chevron-font"></i>
            </a>
          </li>
          <li className="nav-item mx-4">
            <a href="#" className="nav-link">
              Company
              <i className="bi bi-chevron-down ms-2 custom-chevron-font"></i>
            </a>
          </li>
          <li className="nav-item mx-4">
            <a href="#" className="nav-link">
              FAQ
            </a>
          </li>
          <li className="nav-item mx-4 me-5 custom-pink-color">
            <a href="#" className="nav-link ">
              Log in
            </a>
          </li>
        </ul>
        <hr className="custom-line d-none d-lg-block" />
      </div>

      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <img src={logo} alt="Logo Image" className=" custom-logo " />
          <div className="vr ms-5 d-none d-lg-flex custom-vr"></div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navCollapse">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0  ">
              <li className="nav-item mx-4 ">
                <a href="#" className="nav-link nav-link-bold">
                  Products
                  <i className="bi bi-chevron-down ms-2 custom-chevron-font"></i>
                </a>
              </li>
              <li className="nav-item mx-4">
                <a href="#" className="nav-link nav-link-bold">
                  Integrations
                  <i className="bi bi-chevron-down ms-2 custom-chevron-font"></i>
                </a>
              </li>
              <li className="nav-item mx-4">
                <a
                  href="#"
                  className="nav-link custom-pink-color nav-link-bold"
                >
                  Use Cases
                  <i className="bi bi-chevron-down ms-2 custom-chevron-font"></i>
                </a>
              </li>
              <li className="nav-item mx-4">
                <a href="#" className="nav-link nav-link-bold">
                  Resources
                  <i className="bi bi-chevron-down ms-2 custom-chevron-font"></i>
                </a>
              </li>
              <li className="nav-item mx-4">
                <a href="#" className="nav-link nav-link-bold ">
                  Pricing
                </a>
              </li>

              <li className="nav-item mx-4 d-lg-none d-block">
                <a href="#" className="nav-link nav-link-bold">
                  Solutions
                  <i className="bi bi-chevron-down ms-2 custom-chevron-font"></i>
                </a>
              </li>
              <li className="nav-item mx-4 d-lg-none d-block">
                <a href="#" className="nav-link nav-link-bold">
                  Company
                  <i className="bi bi-chevron-down ms-2 custom-chevron-font"></i>
                </a>
              </li>
              <li className="nav-item mx-4 d-lg-none d-block">
                <a href="#" className="nav-link nav-link-bold">
                  FAQ
                </a>
              </li>
              <li className="nav-item mx-4 me-5 d-lg-none d-block  custom-pink-color">
                <a
                  href="#"
                  className="nav-link custom-pink-color nav-link-bold"
                >
                  Log in
                </a>
              </li>
            </ul>

            <div className="vr me-5  d-none d-lg-flex custom-vr-2"></div>

            <div className="ms-auto">
              <button className="btn text-dark custom-pink-btn mx-3 rounded-4 px-4 py-2 fw-bold">
                Get Started
              </button>
              <button className="btn btn-dark mx-3 px-4 py-2 text-dark bg-white rounded-4 fw-bold">
                Product Tour
              </button>
            </div>
          </div>
        </div>
      </nav>
    </nav>
  );
};

export default Navbar;
