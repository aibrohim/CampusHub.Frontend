import { format } from "date-fns";

export const formatTime = (time: string) =>
  format(new Date(`1/1/1970 ${time}:00`), "KK:mm a");
