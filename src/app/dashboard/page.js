"use client";

import styles from "./page.module.css";
import Sidebar from "../../components/(dashboard)/Sidebar/Sidebar";
import Navbar from "../../components/(dashboard)/Navbar/Navbar";
import Analytics from "../../components/(dashboard)/Analytics/Analytics";
import Announcements from "../../components/(dashboard)/Announcements/Announcements";
import RecentActivities from "../../components/(dashboard)/RecentActivities/RecentActivities";
import UpcomingSchedule from "../../components/(dashboard)/UpcomingSchedule/UpcomingSchedule";

export default function DashboardPage() {
  return (
    <div className={styles.dashboardContainer}>
      <Sidebar />
      <div className={styles.mainContent}>
        <Navbar />
        <div className={styles.contentWrapper}>

          <h1 className={styles.pageTitle}>Dashboard</h1>
          <div className={styles.mainGridContainer}>
            <div className={styles.leftSection}>
              <Analytics />
              <Announcements />
            </div>

            <div className={styles.rightSection}>
              <RecentActivities />
              <UpcomingSchedule />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
