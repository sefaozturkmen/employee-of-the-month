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

export const formatDate = (dateString: string): string => {
  const dateObj = new Date(dateString);

  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };

  const formattedDate: string = new Intl.DateTimeFormat(
    "tr-TR",
    options
  ).format(dateObj);

  return formattedDate;
};
