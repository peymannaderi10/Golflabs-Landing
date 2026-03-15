export interface TownData {
  slug: string;
  town: string;
  county: string;
  driveTime: string;
  distance: string;
  tier: 1 | 2;
  zipCodes: string[];
  description: string;
  directions: string;
  nearby: string[];
}

export const SEO_TOWNS: TownData[] = [
  // ── Tier 1: Within 15 minutes ──
  {
    slug: "golf-simulator-southampton-nj",
    town: "Southampton",
    county: "Burlington",
    driveTime: "2 minutes",
    distance: "1 mile",
    tier: 1,
    zipCodes: ["08088"],
    description:
      "GolfLabs is located right in Southampton on Eayrestown Rd, just off Route 206. The closest golf simulator to anywhere in Southampton — walk-in distance for many residents.",
    directions:
      "Head to 133 Eayrestown Rd. If you're coming from Route 206, turn onto Eayrestown Rd near Pivotal Training gym. Free parking right outside.",
    nearby: ["mount-holly", "lumberton", "eastampton"],
  },
  {
    slug: "golf-simulator-mount-holly-nj",
    town: "Mount Holly",
    county: "Burlington",
    driveTime: "8 minutes",
    distance: "5 miles",
    tier: 1,
    zipCodes: ["08060"],
    description:
      "Mount Holly golfers are just 8 minutes from GolfLabs. Instead of driving 30+ minutes to a staffed facility charging $60–75/hr, you can be hitting balls in under 10 minutes for half the price.",
    directions:
      "Take Route 541 south to Route 206 south, then turn onto Eayrestown Rd. The whole drive is about 5 miles with no highway needed.",
    nearby: ["southampton", "eastampton", "lumberton"],
  },
  {
    slug: "golf-simulator-lumberton-nj",
    town: "Lumberton",
    county: "Burlington",
    driveTime: "7 minutes",
    distance: "4 miles",
    tier: 1,
    zipCodes: ["08048"],
    description:
      "Lumberton is one of the closest towns to GolfLabs — just 7 minutes down Route 38 and 206. Perfect for a quick practice session after work or a weekend round with friends.",
    directions:
      "Take Route 38 east to Route 206 south. Turn onto Eayrestown Rd — GolfLabs is on your right. Total drive is about 4 miles.",
    nearby: ["southampton", "mount-holly", "hainesport"],
  },
  {
    slug: "golf-simulator-eastampton-nj",
    town: "Eastampton",
    county: "Burlington",
    driveTime: "10 minutes",
    distance: "6 miles",
    tier: 1,
    zipCodes: ["08060"],
    description:
      "Eastampton residents can reach GolfLabs in about 10 minutes via Route 206. No need to drive to Moorestown or Cherry Hill — there's an affordable simulator right in your backyard.",
    directions:
      "Head south on Route 206 from Eastampton. Turn onto Eayrestown Rd just past Pivotal Training. About 6 miles total.",
    nearby: ["mount-holly", "southampton", "hainesport"],
  },
  {
    slug: "golf-simulator-hainesport-nj",
    town: "Hainesport",
    county: "Burlington",
    driveTime: "10 minutes",
    distance: "5 miles",
    tier: 1,
    zipCodes: ["08036"],
    description:
      "Hainesport is just 10 minutes from GolfLabs. Skip the 30-minute drive and membership fees at other facilities — book a session for $25–35/hr and be playing in minutes.",
    directions:
      "Take Route 38 east to Route 206 south, then turn onto Eayrestown Rd. Quick, easy drive with no highway traffic.",
    nearby: ["lumberton", "mount-holly", "eastampton"],
  },
  {
    slug: "golf-simulator-pemberton-nj",
    town: "Pemberton",
    county: "Burlington",
    driveTime: "12 minutes",
    distance: "7 miles",
    tier: 1,
    zipCodes: ["08068"],
    description:
      "Pemberton golfers — GolfLabs is the closest simulator to you at just 12 minutes away. Open 24/7 with no membership, so you can play anytime your schedule allows.",
    directions:
      "Take Route 206 south from Pemberton directly to Eayrestown Rd. Straightforward drive, about 7 miles.",
    nearby: ["southampton", "browns-mills", "vincentown"],
  },
  {
    slug: "golf-simulator-vincentown-nj",
    town: "Vincentown",
    county: "Burlington",
    driveTime: "10 minutes",
    distance: "5 miles",
    tier: 1,
    zipCodes: ["08088"],
    description:
      "Vincentown is right next to Southampton — GolfLabs is about 10 minutes away. The closest indoor golf option for Vincentown residents, at a fraction of the cost of other facilities.",
    directions:
      "Head north on Route 206 toward Southampton, then turn onto Eayrestown Rd. Short, simple drive.",
    nearby: ["southampton", "tabernacle", "medford"],
  },
  {
    slug: "golf-simulator-medford-nj",
    town: "Medford",
    county: "Burlington",
    driveTime: "14 minutes",
    distance: "10 miles",
    tier: 1,
    zipCodes: ["08055"],
    description:
      "Medford golfers looking for indoor practice — GolfLabs is 14 minutes away on Route 206. At $25–35/hr with no membership, it's the most affordable option in Burlington County.",
    directions:
      "Take Route 541 north to Route 206 south, or take Stokes Rd to Route 206. Turn onto Eayrestown Rd. About 10 miles total.",
    nearby: ["lumberton", "vincentown", "shamong"],
  },

  // ── Tier 2: 15–25 minutes ──
  {
    slug: "golf-simulator-marlton-nj",
    town: "Marlton",
    county: "Burlington",
    driveTime: "18 minutes",
    distance: "13 miles",
    tier: 2,
    zipCodes: ["08053"],
    description:
      "Marlton residents have options for indoor golf — but none at $25–35/hr with 24/7 access and no membership. GolfLabs is about 18 minutes south on Route 206.",
    directions:
      "Take Route 70 east to Route 206 south. Continue on 206 to Eayrestown Rd. About 13 miles.",
    nearby: ["medford", "lumberton", "cherry-hill"],
  },
  {
    slug: "golf-simulator-moorestown-nj",
    town: "Moorestown",
    county: "Burlington",
    driveTime: "20 minutes",
    distance: "14 miles",
    tier: 2,
    zipCodes: ["08057"],
    description:
      "Moorestown is home to GolfCave, where simulator time runs $60–75/hr. GolfLabs is 20 minutes south and charges $25–35/hr — no membership, no minimum hours, open 24/7.",
    directions:
      "Take Route 38 east to Route 206 south, then Eayrestown Rd. About 14 miles, mostly straight roads.",
    nearby: ["mount-holly", "lumberton", "cherry-hill"],
  },
  {
    slug: "golf-simulator-burlington-township-nj",
    town: "Burlington Township",
    county: "Burlington",
    driveTime: "15 minutes",
    distance: "9 miles",
    tier: 2,
    zipCodes: ["08016"],
    description:
      "Burlington Township golfers can reach GolfLabs in about 15 minutes. The only 24/7 no-membership golf simulator in Burlington County — and it's half the price of the competition.",
    directions:
      "Take Route 541 south to Route 206 south, then turn onto Eayrestown Rd. About 9 miles from Burlington Township center.",
    nearby: ["mount-holly", "eastampton", "willingboro"],
  },
  {
    slug: "golf-simulator-tabernacle-nj",
    town: "Tabernacle",
    county: "Burlington",
    driveTime: "15 minutes",
    distance: "9 miles",
    tier: 2,
    zipCodes: ["08088"],
    description:
      "Tabernacle is a quick 15-minute drive to GolfLabs. Perfect for golfers in the Pinelands area looking for affordable indoor practice without a long drive to Cherry Hill or Moorestown.",
    directions:
      "Take Route 206 north to Eayrestown Rd. Simple, direct route — about 9 miles.",
    nearby: ["vincentown", "shamong", "medford"],
  },
  {
    slug: "golf-simulator-shamong-nj",
    town: "Shamong",
    county: "Burlington",
    driveTime: "16 minutes",
    distance: "10 miles",
    tier: 2,
    zipCodes: ["08088"],
    description:
      "Shamong residents — GolfLabs is 16 minutes north on Route 206. The closest affordable golf simulator to the Pinelands area. Book as little as 15 minutes or play a full round.",
    directions:
      "Take Route 206 north to Eayrestown Rd in Southampton. About 10 miles, all on 206.",
    nearby: ["tabernacle", "medford", "vincentown"],
  },
  {
    slug: "golf-simulator-browns-mills-nj",
    town: "Browns Mills",
    county: "Burlington",
    driveTime: "18 minutes",
    distance: "11 miles",
    tier: 2,
    zipCodes: ["08015"],
    description:
      "Browns Mills and Joint Base MDL personnel — GolfLabs is about 18 minutes away on Route 206. Open 24/7, which means you can play before or after any shift. No membership required.",
    directions:
      "Take Route 206 north from Browns Mills straight to Eayrestown Rd. About 11 miles, no turns until the end.",
    nearby: ["pemberton", "southampton", "vincentown"],
  },
  {
    slug: "golf-simulator-bordentown-nj",
    town: "Bordentown",
    county: "Burlington",
    driveTime: "22 minutes",
    distance: "16 miles",
    tier: 2,
    zipCodes: ["08505"],
    description:
      "Bordentown golfers looking for simulator time without the Turnpike drive to North Jersey — GolfLabs is 22 minutes south. $25–35/hr, 24/7 access, and no membership.",
    directions:
      "Take Route 206 south from Bordentown all the way to Eayrestown Rd. Mostly a straight shot — about 16 miles.",
    nearby: ["burlington-township", "mount-holly", "eastampton"],
  },
  {
    slug: "golf-simulator-willingboro-nj",
    town: "Willingboro",
    county: "Burlington",
    driveTime: "20 minutes",
    distance: "13 miles",
    tier: 2,
    zipCodes: ["08046"],
    description:
      "Willingboro residents — GolfLabs is 20 minutes south with the most affordable simulator rates in Burlington County. No membership, no commitment, open around the clock.",
    directions:
      "Take Route 130 south to Route 541, then Route 206 south to Eayrestown Rd. About 13 miles total.",
    nearby: ["burlington-township", "mount-holly", "eastampton"],
  },
  {
    slug: "golf-simulator-cherry-hill-nj",
    town: "Cherry Hill",
    county: "Camden",
    driveTime: "25 minutes",
    distance: "18 miles",
    tier: 2,
    zipCodes: ["08002", "08003", "08034"],
    description:
      "Cherry Hill has several indoor golf options — but they all charge $60–75/hr and require memberships for 24/7 access. GolfLabs is 25 minutes away at half the price, no strings attached.",
    directions:
      "Take Route 70 east to Route 206 south, then Eayrestown Rd. About 18 miles, mostly highway.",
    nearby: ["marlton", "moorestown", "lumberton"],
  },
  {
    slug: "golf-simulator-evesham-nj",
    town: "Evesham",
    county: "Burlington",
    driveTime: "18 minutes",
    distance: "12 miles",
    tier: 2,
    zipCodes: ["08053"],
    description:
      "Evesham Township golfers — GolfLabs is 18 minutes away in Southampton. At $25–35/hr with no membership, it's the best value for indoor golf in the area.",
    directions:
      "Take Route 70 east to Route 206 south, then turn onto Eayrestown Rd. About 12 miles.",
    nearby: ["marlton", "medford", "lumberton"],
  },
  {
    slug: "golf-simulator-mount-laurel-nj",
    town: "Mount Laurel",
    county: "Burlington",
    driveTime: "22 minutes",
    distance: "15 miles",
    tier: 2,
    zipCodes: ["08054"],
    description:
      "Mount Laurel is home to TopGolf — great for entertainment, but if you want serious practice with ball and club data at $25–35/hr, GolfLabs is 22 minutes south in Southampton.",
    directions:
      "Take Route 38 east to Route 206 south, then Eayrestown Rd. About 15 miles.",
    nearby: ["moorestown", "lumberton", "cherry-hill"],
  },
];

export function getTownBySlug(slug: string): TownData | undefined {
  return SEO_TOWNS.find((t) => t.slug === slug);
}

export function getNearbyTowns(town: TownData): TownData[] {
  return town.nearby
    .map((n) => SEO_TOWNS.find((t) => t.slug.includes(n)))
    .filter(Boolean) as TownData[];
}
