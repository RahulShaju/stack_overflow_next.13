import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getTimeStamp = (createdAt: Date): string => {
  const now = new Date();
  const timeDiff = now.getTime() - createdAt.getTime();
  const secondsAgo = Math.floor(timeDiff / 1000);

  if (secondsAgo < 60) {
    return `${secondsAgo} second${secondsAgo === 1 ? "" : "s"} ago`;
  }

  const minutesAgo = Math.floor(secondsAgo / 60);
  if (minutesAgo < 60) {
    return `${minutesAgo} minute${minutesAgo === 1 ? "" : "s"} ago`;
  }

  const hoursAgo = Math.floor(minutesAgo / 60);
  if (hoursAgo < 24) {
    return `${hoursAgo} hour${hoursAgo === 1 ? "" : "s"} ago`;
  }

  const daysAgo = Math.floor(hoursAgo / 24);
  if (daysAgo < 7) {
    return `${daysAgo} day${daysAgo === 1 ? "" : "s"} ago`;
  }

  const weeksAgo = Math.floor(daysAgo / 7);
  if (weeksAgo < 52) {
    return `${weeksAgo} week${weeksAgo === 1 ? "" : "s"} ago`;
  }

  const yearsAgo = Math.floor(weeksAgo / 52);
  return `${yearsAgo} year${yearsAgo === 1 ? "" : "s"} ago`;
};
export const convertNumbers = (number: number) => {
  if (number >= 1000000) {
    return (number / 1000000).toFixed(1) + "M";
  } else if (number >= 1000) {
    return (number / 1000).toFixed(1) + "K";
  } else {
    return number.toString();
  }
};
