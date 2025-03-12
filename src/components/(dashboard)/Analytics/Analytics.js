"use client";
import { useState } from "react";
import styles from "./Analytics.module.css";
import { LineChart, Line, ResponsiveContainer, Area, Tooltip } from "recharts";

export default function Analytics() {
  const [stats, setStats] = useState([
    {
      color: "orange",
      label: "Available Position",
      number: "24",
      subtext: "4 Urgently needed",
    },
    {
      color: "blue",
      label: "Job Open",
      number: "10",
      subtext: "4 Active hiring",
    },
    {
      color: "purple",
      label: "New Employees",
      number: "24",
      subtext: "4 Department",
    },
  ]);

  const [metrics, setMetrics] = useState([
    {
      title: "Total Employees",
      number: "216",
      details: ["120 Men", "96 Women"],
      trend: "2% Past month",
      data: [
        { value: 10 },
        { value: 40 },
        { value: 30 },
        { value: 50 },
        { value: 25 },
        { value: 45 },
        { value: 40 },
      ],
    },
    {
      title: "Talent Request",
      number: "16",
      details: ["6 Men", "10 Women"],
      trend: "5% Past month",
      data: [
        { value: 15 },
        { value: 35 },
        { value: 25 },
        { value: 45 },
        { value: 30 },
        { value: 40 },
        { value: 35 },
      ],
    },
  ]);

  const TrendGraph = ({ data }) => (
    <ResponsiveContainer width="100%" height={60}>
      <LineChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FF5151" />
            <stop offset="100%" stopColor="#FFFFFF" />
          </linearGradient>

          <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#FF5151" stopOpacity={0.8} />
            <stop offset="100%" stopColor="#FF5151" />
          </linearGradient>

          <filter id="boxShadow" x="-10%" y="-10%" width="120%" height="190%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
            <feOffset dx="0" dy="4" result="offsetblur" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.4" />
            </feComponentTransfer>
            <feFlood flood-color="#FF5151" flood-opacity="0.5" />
            <feComposite in2="offsetblur" operator="in" />
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <Area
          type="monotone"
          dataKey="value"
          stroke="none"
          fill="url(#areaGradient)"
          fillOpacity={0.2}
        />

        <Line
          type="monotone"
          dataKey="value"
          stroke="url(#lineGradient)"
          strokeWidth={2}
          dot={false}
          activeDot={{
            stroke: "#FF5151",
            fill: "#FFFFFF",
          }}
          strokeLinecap="round"
          filter="url(#boxShadow)"
        />

        <Tooltip
          content={({ active, payload }) => {
            if (active && payload && payload.length) {
              return (
                <div
                  style={{
                    background: "#fff",
                    padding: "5px 10px",
                    border: "1px solid #FF5151",
                    borderRadius: "4px",
                    color: "#161E54",
                    fontSize: "12px",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                  }}
                >
                  <p>{`Value: ${payload[0].value}`}</p>
                </div>
              );
            }
            return null;
          }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
  return (
    <div className={styles.analyticsContainer}>
      <div className={styles.statsGrid}>
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`${styles.statsCard} ${styles[stat.color]}`}
          >
            <div className={styles.statsContent}>
              <span className={styles.statsLabel}>{stat.label}</span>
              <h3 className={styles.statsNumber}>{stat.number}</h3>
              <span className={`styles.statsSubtext ${styles[stat.color]}`}>
                {stat.subtext}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.metricsGrid}>
        {metrics.map((metric, index) => (
          <div key={index} className={styles.metricCard}>
            <div className={styles.metricHeader}>
              <div className={styles.metricContent}>
                <h3 className={styles.metricTitle}>{metric.title}</h3>
                <div className={styles.metricNumber}>{metric.number}</div>
                <div className={styles.metricDetails}>
                  {metric.details.map((detail, i) => (
                    <span key={i}>{detail}</span>
                  ))}
                </div>
              </div>
              <div className={styles.trendIndicator}>
                <div className={styles.trendGraph}>
                  <TrendGraph data={metric.data} />
                </div>
                <p className={styles.trendValue}>{metric.trend}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
