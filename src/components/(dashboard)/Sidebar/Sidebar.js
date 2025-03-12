"use client";
// import styles from "./Sidebar.module.css";
import "./Sidebar.css";
import Image from "next/image";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <nav className="menu-container">
        <div className="logo">
          <h1>WeHR</h1>
        </div>

        <div className="menu-section">
          <div className="menu-title-container">
            <span className="menu-title">MAIN MENU</span>
          </div>

          <div className="menu-items">
            <div className="menu-item active">
              <div className="icon">
                <Image
                  src="/icons/ic_dashboard.svg"
                  width={24}
                  height={24}
                  alt="Dashboard icon"
                />
              </div>
              <span className="active">Dashboard</span>
            </div>

            <div className="menu-item">
              <div className="icon">
                <Image
                  src="/icons/ic_recruitment.svg"
                  width={24}
                  height={24}
                  alt="Recruitment icon"
                />
              </div>
              <span>Recruitment</span>
            </div>

            <div className="menu-item">
              <div className="icon">
                <Image
                  src="/icons/ic_calendar.svg"
                  width={24}
                  height={24}
                  alt="Schedule icon"
                />
              </div>
              <span>Schedule</span>
            </div>

            <div className="menu-item">
              <div className="icon">
                <Image
                  src="/icons/ic_employee.svg"
                  width={24}
                  height={24}
                  alt="Employee icon"
                />
              </div>
              <span>Employee</span>
            </div>

            <div className="menu-item">
              <div className="icon">
                <Image
                  src="/icons/ic_department.svg"
                  width={24}
                  height={24}
                  alt="Department icon"
                />
              </div>
              <span>Department</span>
            </div>
          </div>
        </div>

        <div className="menu-section">
          <div className="menu-title-container">
            <span className="menu-title">OTHER</span>
          </div>

          <div className="menu-items">
            <div className="menu-item">
              <div className="icon">
                <Image
                  src="/icons/ic_support.svg"
                  width={24}
                  height={24}
                  alt="Support icon"
                />
              </div>
              <span>Support</span>
            </div>

            <div className="menu-item">
              <div className="icon">
                <Image
                  src="/icons/ic_settings.svg"
                  width={24}
                  height={24}
                  alt="Settings icon"
                />
              </div>
              <span>Settings</span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
