export const tripPhotos = {
  groupDepartureSummer: {
    src: "/images/trip/lexuz-group-departure-summer.webp",
    width: 1400,
    height: 1050,
    caption: "A Lexuz group with our coaster on a summer departure",
    alt: "Large Lexuz Tours group standing beside their tour coaster among trees on a summer trip"
  },
  studentGroupCoaster: {
    src: "/images/trip/lexuz-student-group-coaster.webp",
    width: 1600,
    height: 983,
    caption: "One of our student groups with the Lexuz branded coaster",
    alt: "University student group in front of a Lexuz Tours & Adventures branded coaster in a hill town"
  },
  groupMeadowBanner: {
    src: "/images/trip/lexuz-group-meadow-banner.webp",
    width: 1600,
    height: 1200,
    caption: "A Lexuz group at a meadow stop, banner and all",
    alt: "Lexuz Tours group of around thirty travellers sitting on a green meadow holding the company banner"
  },
  fleetThreeCoastersNight: {
    src: "/images/trip/lexuz-fleet-three-coasters-night.webp",
    width: 1600,
    height: 1200,
    caption: "Three of our branded coasters ready for overnight departures",
    alt: "Three Lexuz Tours & Adventures branded coasters parked at night before departure"
  },
  malamJabbaWinterGroup: {
    src: "/images/trip/lexuz-malam-jabba-winter-group.webp",
    width: 1200,
    height: 1600,
    caption: "Our winter group at Malam Jabba ski resort",
    alt: "Lexuz Tours winter group holding the company banner in front of the Malam Jabba sign with the snowy ski slope and chairlift behind"
  }
} as const;

export type TripPhoto = (typeof tripPhotos)[keyof typeof tripPhotos];
