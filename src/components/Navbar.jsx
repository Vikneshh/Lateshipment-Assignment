import React, { useState } from "react";
import logo from "../assets/logo-color.png";
import useAnimationObserver from "../utils/useAnimationObserver";

const Navbar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const fadeInLeft = useAnimationObserver("animate__fadeInLeft");

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav ref={fadeInLeft}>
      <div className="bg-white">
        <ul className="d-flex justify-content-end align-items-center navbar-nav flex-row d-none d-lg-flex">
          <li className="nav-item mx-5 custom-trap-medium">
            <a href="#" className="nav-link">
              Solutions
              <i className="bi bi-chevron-down ms-2 custom-chevron-font"></i>
            </a>
          </li>
          <li className="nav-item mx-5 custom-trap-medium">
            <a href="#" className="nav-link">
              Company
              <i className="bi bi-chevron-down ms-2 custom-chevron-font"></i>
            </a>
          </li>
          <li className="nav-item mx-5 custom-trap-medium">
            <a href="#" className="nav-link">
              FAQ
            </a>
          </li>
          <li className="nav-item mx-5 me-5 custom-pink-color custom-trap-medium">
            <a href="#" className="nav-link ">
              Log in
            </a>
          </li>
        </ul>
        <div className="custom-line d-none d-lg-block"></div>
      </div>

      <nav className="navbar navbar-expand-lg bg-white">
        <div className="container-fluid">
          <img src={logo} alt="Logo Image" className="custom-logo" />
          <div className="ms-5 d-none d-lg-flex custom-vr"></div>
          <button
            className="navbar-toggler"
            type="button"
            onClick={handleNavCollapse}
            aria-controls="navCollapse"
            aria-expanded={!isNavCollapsed}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
            id="navCollapse"
          >
            <ul className="navbar-nav mx-auto mb-2 mb-xl-0 mx-xl-0 mx-xxl-auto">
              <li className="nav-item mx-3 mx-lg-1 mx-xl-3">
                <a href="#" className="nav-link nav-link-bold">
                  Products
                  <i className="bi bi-chevron-down ms-2 custom-chevron-font"></i>
                </a>
              </li>
              <li className="nav-item mx-3 mx-lg-1 mx-xl-3">
                <a href="#" className="nav-link nav-link-bold">
                  Integrations
                  <i className="bi bi-chevron-down ms-2 custom-chevron-font"></i>
                </a>
              </li>
              <li className="nav-item mx-3 mx-lg-1 mx-xl-3">
                <a
                  href="#"
                  className="nav-link custom-pink-color nav-link-bold"
                >
                  Use Cases
                  <i className="bi bi-chevron-down ms-2 custom-chevron-font"></i>
                </a>
              </li>
              <li className="nav-item mx-3 mx-lg-1 mx-xl-3">
                <a href="#" className="nav-link nav-link-bold">
                  Resources
                  <i className="bi bi-chevron-down ms-2 custom-chevron-font"></i>
                </a>
              </li>
              <li className="nav-item mx-3 mx-lg-1 mx-xl-3">
                <a href="#" className="nav-link nav-link-bold ">
                  Pricing
                </a>
              </li>
              <li className="nav-item mx-3 d-lg-none custom-trap-medium">
                <a href="#" className="nav-link nav-link-bold">
                  Solutions
                  <i className="bi bi-chevron-down ms-2 custom-chevron-font"></i>
                </a>
              </li>
              <li className="nav-item mx-3 d-lg-none custom-trap-medium">
                <a href="#" className="nav-link nav-link-bold">
                  Company
                  <i className="bi bi-chevron-down ms-2 custom-chevron-font"></i>
                </a>
              </li>
              <li className="nav-item mx-3 d-lg-none custom-trap-medium">
                <a href="#" className="nav-link nav-link-bold">
                  FAQ
                </a>
              </li>
              <li className="nav-item mx-3 me-5 d-lg-none custom-pink-color custom-trap-medium">
                <a
                  href="#"
                  className="nav-link custom-pink-color nav-link-bold"
                >
                  Log in
                </a>
              </li>
            </ul>
            <div className="me-5 d-none d-lg-flex custom-vr-2 text-black"></div>
            <div className="col-lg-4">
              <button className="btn text-dark custom-pink-btn mx-3 rounded-4 px-3 py-2 fw-bold pink-bg-btn custom-nav-btn1">
                Get Started
              </button>
              <button className="btn btn-dark mx-3 px-3 py-2 text-dark bg-white rounded-4 fw-bold white-bg-btn mt-lg-3 mt-xl-2 mt-0 mt-xxl-1 ">
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
