"use client";
import styles from "./RecentActivities.module.css";

export default function RecentActivities() {
  return (
    <div className={styles.activitiesContainer}>
      <div className={styles.activitiesHeader}>
        <h2 className={styles.title}>Recently Activity</h2>
      </div>

      <div className={styles.activities}>
        <div className={styles.activityContent}>
          <div className={styles.timeStamp}>10:40 AM, Fri 10 Sept 2021</div>

          <h3 className={styles.activityTitle}>You Posted a New Job</h3>

          <p className={styles.activityDescription}>
            Kindly check the requirements and terms of work and make sure
            everything is right.
          </p>
        </div>

        <div className={styles.footer}>
          <p className={styles.activityCount}>Today you makes 12 Activity</p>
          <button className={styles.seeAllButton}>See All Activity</button>
        </div>
      </div>
    </div>
  );
}
