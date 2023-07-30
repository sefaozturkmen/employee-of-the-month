/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { formatDate, getLogs } from "@/utils";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { LogData } from "../interface/log";

const logs = () => {
  const [logs, setLogs] = useState<LogData[]>([]);
  useEffect(() => {
    setLogs(getLogs());
  }, []);

  return (
    <div className="container">
      <Link href="/">Home</Link>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Event</th>
            <th>Message</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {logs.length > 0 ? (
            logs.map((log: LogData, index: number) => (
              <tr key={index}>
                <td>{log.event}</td>
                <td>{log.message}</td>
                <td>{formatDate(log.timestamp)}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td>Log not found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default logs;
