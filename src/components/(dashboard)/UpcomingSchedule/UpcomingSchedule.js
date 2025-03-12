"use client";
import { useState } from "react";
import styles from "./UpcomingSchedule.module.css";

export default function UpcomingSchedule() {
  const [schedules, setSchedules] = useState({
    priority: [
      {
        title: "Review candidate applications",
        time: "Today - 11:30 AM",
      },
    ],
    other: [
      {
        title: "Interview with candidates",
        time: "Today - 10:30 AM",
      },
      {
        title: "Short meeting with product designer from IT Department",
        time: "Today - 09:15 AM",
      },
      {
        title: "Short meeting with product designer from IT Department",
        time: "Today - 09:15 AM",
      },
    ],
  });

  return (
    <div className={styles.scheduleContainer}>
      <div className={styles.scheduleHeader}>
        <div className={styles.header}>
          <h2 className={styles.title}>Upcoming Schedule</h2>
          <div className={styles.dateSelector}>
            <span>Today, 13 Sep 2021</span>
            <img
              src="/icons/arrow_down.svg"
              alt="Calendar"
              width={20}
              height={20}
            />
          </div>
        </div>

        <div className={styles.scheduleContent}>
          <div className={styles.scheduleSection}>
            <h3 className={styles.sectionTitle}>Priority</h3>
            {schedules.priority.map((item, index) => (
              <div key={index} className={styles.scheduleItem}>
                <div className={styles.scheduleItemContent}>
                  <div className={styles.scheduleItemTitle}>{item.title}</div>
                  <div className={styles.scheduleItemTime}>{item.time}</div>
                </div>
                <button className={styles.menuButton}>
                  <img
                    src="/icons/menu.svg"
                    alt="Menu"
                    width={20}
                    height={20}
                  />
                </button>
              </div>
            ))}
          </div>

          <div className={styles.scheduleSection}>
            <h3 className={styles.sectionTitle}>Other</h3>
            {schedules.other.map((item, index) => (
              <div key={index} className={styles.scheduleItem}>
                <div className={styles.scheduleItemContent}>
                  <div className={styles.scheduleItemTitle}>{item.title}</div>
                  <div className={styles.scheduleItemTime}>{item.time}</div>
                </div>
                <button className={styles.menuButton}>
                  <img
                    src="/icons/menu.svg"
                    alt="Menu"
                    width={20}
                    height={20}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <button className={styles.createButton}>Create a New Schedule</button>
      </div>
    </div>
  );
}
