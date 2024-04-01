// Get the list of timezones

import { getTimeZones } from "./getTimezones";
const timeZones = Intl.supportedValuesOf("timeZone");

interface TimezoneOptions {
  value: string;
  label: string;
}

export const getTimezoneOptions = (): TimezoneOptions[] =>
  getTimeZones()
    .filter((item) => timeZones.includes(item.tzCode))
    .map((item) => ({
      label: item.label,
      value: item.tzCode,
    }));
