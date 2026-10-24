export interface TimezoneOption {
  value: string;
  label: string;
  region: string;
}

export const TIMEZONE_OPTIONS: TimezoneOption[] = [
  // North America
  { value: 'America/New_York', label: 'US Eastern Time (New York, Boston, Miami, Toronto)', region: 'North America' },
  { value: 'America/Chicago', label: 'US Central Time (Chicago, Dallas, Houston)', region: 'North America' },
  { value: 'America/Denver', label: 'US Mountain Time (Denver, Phoenix, Salt Lake City)', region: 'North America' },
  { value: 'America/Los_Angeles', label: 'US Pacific Time (San Francisco, Seattle, Los Angeles)', region: 'North America' },
  { value: 'America/Sao_Paulo', label: 'South America (São Paulo, Buenos Aires)', region: 'South America' },

  // Europe & UK
  { value: 'Europe/London', label: 'UK & Ireland (London, Dublin • GMT/BST)', region: 'Europe' },
  { value: 'Europe/Paris', label: 'Central Europe (Paris, Berlin, Frankfurt, Amsterdam, Zurich • CET)', region: 'Europe' },
  { value: 'Europe/Helsinki', label: 'Eastern Europe (Helsinki, Athens, Bucharest • EET)', region: 'Europe' },

  // Middle East & Africa
  { value: 'Asia/Dubai', label: 'Gulf Standard Time (Dubai, Abu Dhabi, Riyadh • GST)', region: 'Middle East' },
  { value: 'Africa/Johannesburg', label: 'South Africa Standard Time (Johannesburg)', region: 'Africa' },

  // Asia Pacific
  { value: 'Asia/Singapore', label: 'Singapore & Malaysia (Singapore, Kuala Lumpur • SGT)', region: 'Asia Pacific' },
  { value: 'Asia/Hong_Kong', label: 'Hong Kong & China (Hong Kong, Shanghai • HKT)', region: 'Asia Pacific' },
  { value: 'Asia/Tokyo', label: 'Japan & Korea (Tokyo, Seoul • JST)', region: 'Asia Pacific' },
  { value: 'Asia/Kolkata', label: 'India Standard Time (Mumbai, New Delhi, Bengaluru • IST)', region: 'Asia Pacific' },
  { value: 'Australia/Sydney', label: 'Australia Eastern (Sydney, Melbourne, Brisbane • AEST/AEDT)', region: 'Asia Pacific' },
  { value: 'Australia/Perth', label: 'Australia Western (Perth • AWST)', region: 'Asia Pacific' },
  { value: 'Pacific/Auckland', label: 'New Zealand (Auckland, Wellington • NZST/NZDT)', region: 'Asia Pacific' },
];

export function getDefaultTimezone(): string {
  try {
    const userTz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const match = TIMEZONE_OPTIONS.find((t) => t.value === userTz);
    if (match) return match.value;
    if (userTz) return userTz;
  } catch {
    // fallback
  }
  return 'America/New_York';
}
