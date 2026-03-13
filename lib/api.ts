export const API_URL = process.env.API_URL || process.env.NEXT_PUBLIC_API_URL || "";
export const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.golflabs.us";

export interface Location {
  id: string;
  name: string;
  slug: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  phone?: string;
  timezone: string;
  status: string;
  salesTaxRate: number;
}

export interface PricingRule {
  name: string;
  hourlyRate: number;
  startTime: string;
  endTime: string;
  daysOfWeek: string;
}

export async function fetchLocations(): Promise<Location[]> {
  try {
    const res = await fetch(`${API_URL}/locations`, { next: { revalidate: 3600 } });
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}

export async function fetchPricingRules(locationId: string): Promise<PricingRule[]> {
  try {
    const res = await fetch(`${API_URL}/pricing-rules?locationId=${locationId}`, {
      next: { revalidate: 600 },
    });
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}
