import React from "react";

function Header() {
  return (
    <>
      <nav className="navbar mt-3">
        <div className="container">
          <div className="nav-group logo">
            <a href="/">
              <img
                src="https://www.naxa.com.np/792f5bf2487bd27628a54fe64a712630.png"
                alt="logo"
              />
            </a>
          </div>
          <div className="nav-group pt-2">
            <ul>
              <li className="nav-item">
                <a href="/">
                  <span>Services</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="/">
                  <span>Portfolio</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="/">
                  <span>Company</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="/">
                  <span>Events & Media</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="/">
                  <span>Blogs</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="nav-group">
            <a href="/">
              <button className="btn "> Let's talk</button>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
