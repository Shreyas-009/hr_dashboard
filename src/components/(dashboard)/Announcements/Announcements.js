"use client";
import { useState } from "react";
import styles from "./Announcements.module.css";

export default function Announcements() {
  const [announcements, setAnnouncements] = useState([
    {
      title: "Outing schedule for every departement",
      time: "5 Minutes ago",
      pinned: true,
    },
    {
      title: "Meeting HR Department",
      time: "Yesterday, 12:30 PM",
      pinned: false,
    },
    {
      title: "IT Department need two more talents for UX/UI Designer position",
      time: "Yesterday, 09:15 AM",
      pinned: false,
    },
  ]);

  return (
    <div className={styles.announcementsContainer}>
      <div className={styles.announcementsHeader}>
        <div className={styles.header}>
          <h2 className={styles.title}>Announcement</h2>
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

        <div className={styles.announcements}>
          {announcements.map((announcement, index) => (
            <div key={index} className={styles.announcementItem}>
              <div className={styles.announcementContent}>
                <div className={styles.announcementTitle}>
                  {announcement.title}
                </div>
                <div className={styles.announcementTime}>
                  {announcement.time}
                </div>
              </div>
              <div className={styles.announcementActions}>
                <button className={styles.pinButton}>
                  <img src="/icons/pin.svg" alt="Pin" width={20} height={20} />
                </button>
                <button className={styles.menuButton}>
                  <img src="/icons/menu.svg" alt="Menu" width={20} height={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.footer}>
        <a href="#" className={styles.seeAllLink}>
          See All Announcement
        </a>
      </div>
    </div>
  );
}
