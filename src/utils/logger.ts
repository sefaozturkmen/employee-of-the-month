export interface LogData {
  timestamp: string;
  event: string;
  message: string;
}

export const logEvent = (event: string, message: string): void => {
  const logData: LogData = {
    timestamp: new Date().toISOString(),
    event,
    message,
  };

  const logs: LogData[] = JSON.parse(localStorage.getItem("logs") || "[]");
  logs.push(logData);
  localStorage.setItem("logs", JSON.stringify(logs));
};

export const getLogs = (): LogData[] => {
  const logs: LogData[] = JSON.parse(localStorage.getItem("logs") || "[]");
  return logs;
};
