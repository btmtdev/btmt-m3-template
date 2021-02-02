import React from "react";
function Layout(props) {
  return (
    <div>
      <div className="header-container fixed-top">
        <header className="header navbar navbar-expand-sm">
          <a href="/" className="sidebarCollapse" data-placement="bottom">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-list"
            >
              <line x1="8" y1="6" x2="21" y2="6"></line>
              <line x1="8" y1="12" x2="21" y2="12"></line>
              <line x1="8" y1="18" x2="21" y2="18"></line>
              <line x1="3" y1="6" x2="3" y2="6"></line>
              <line x1="3" y1="12" x2="3" y2="12"></line>
              <line x1="3" y1="18" x2="3" y2="18"></line>
            </svg>
          </a>
        </header>
      </div>
      <div className="main-container" id="container">
        <div className="overlay"></div>
        <div className="search-overlay"></div>

        <div className="sidebar-wrapper sidebar-theme">
          <nav id="compactSidebar">
            <div className="theme-logo"></div>

            <ul className="menu-categories">
              <li className="menu active">
                <a href="#dashboard" data-active="true" className="menu-toggle">
                  <div className="base-menu">
                    <div className="base-icons">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-home"
                      >
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                      </svg>
                    </div>
                  </div>
                </a>
                <div className="tooltip">
                  <span>แดชบอร์ด</span>
                </div>
              </li>

              <li className="menu">
                <a href="#app" data-active="false" className="menu-toggle">
                  <div className="base-menu">
                    <div className="base-icons">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-cpu"
                      >
                        <rect
                          x="4"
                          y="4"
                          width="16"
                          height="16"
                          rx="2"
                          ry="2"
                        ></rect>
                        <rect x="9" y="9" width="6" height="6"></rect>
                        <line x1="9" y1="1" x2="9" y2="4"></line>
                        <line x1="15" y1="1" x2="15" y2="4"></line>
                        <line x1="9" y1="20" x2="9" y2="23"></line>
                        <line x1="15" y1="20" x2="15" y2="23"></line>
                        <line x1="20" y1="9" x2="23" y2="9"></line>
                        <line x1="20" y1="14" x2="23" y2="14"></line>
                        <line x1="1" y1="9" x2="4" y2="9"></line>
                        <line x1="1" y1="14" x2="4" y2="14"></line>
                      </svg>
                    </div>
                  </div>
                </a>
                <div className="tooltip">
                  <span>แอพลิเคชั่น</span>
                </div>
              </li>
            </ul>

            <div className="external-links"></div>
          </nav>

          <div id="compact_submenuSidebar" className="submenu-sidebar">
            <div className="theme-brand-name"></div>

            <div className="submenu" id="dashboard">
              <div className="category-info">
                <h5>แดชบอร์ด</h5>
                <p>
                  คุณสามารถเข้าถึงเมนูและแอพลิเคชั่นที่มีการใช้งานบ่อย
                  ได้จากรายการด้านล่าง
                </p>
              </div>

              <ul className="submenu-list" data-parent-element="#dashboard">
                <li>
                  <a href="/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-home"
                    >
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                      <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                    หน้าหลัก
                  </a>
                </li>
              </ul>
            </div>

            <div className="submenu" id="app">
              <div className="category-info">
                <h5>แอพลิเคชั่น</h5>
                <p>หน้าจอรวมแอพลิเคชั่นที่สำหรับใช้งานผ่านมือถือ</p>
              </div>
              <ul className="submenu-list" data-parent-element="#app"></ul>
            </div>
          </div>
        </div>

        <div id="content" className="main-content">
          <div className="layout-px-spacing">{props.content}</div>
          <div className="footer-wrapper">
            <div className="footer-section f-section-1"></div>
            <div className="footer-section f-section-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
