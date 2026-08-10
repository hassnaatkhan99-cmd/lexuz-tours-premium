export type RealTripPhoto = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

export const realTripMedia = {
  bannerRiverside: {
    src: "/images/real-trips/banner-riverside.webp",
    alt: "Travellers holding a Lexuz Tours banner beside a river",
    caption: "A real Lexuz group moment beside a mountain river.",
    width: 1800,
    height: 1350
  },
  groupMeadowSquare: {
    src: "/images/real-trips/group-meadow-square.webp",
    alt: "Lexuz Tours group gathered outdoors with a tour banner",
    caption: "Travellers together during a Lexuz group trip.",
    width: 1800,
    height: 1800
  },
  groupForestBanner: {
    src: "/images/real-trips/group-forest-banner.webp",
    alt: "Lexuz Tours group with a banner in a forest clearing",
    caption: "A real group departure photographed during a Lexuz trip.",
    width: 1800,
    height: 1350
  },
  travellersCoaster: {
    src: "/images/real-trips/travellers-coaster.webp",
    alt: "Lexuz Tours travellers gathered beside a coaster",
    caption: "Travellers and a Lexuz coaster during a group journey.",
    width: 1800,
    height: 1350
  },
  groupCoasterLineup: {
    src: "/images/real-trips/group-coaster-lineup.webp",
    alt: "Lexuz Tours group lined up beside a branded coaster",
    caption: "A group and branded transport ready for the road.",
    width: 1800,
    height: 1350
  },
  coasterBoarding: {
    src: "/images/real-trips/coaster-boarding.webp",
    alt: "Travellers preparing to board a Lexuz Tours coaster",
    caption: "A real departure moment beside Lexuz transport.",
    width: 1800,
    height: 1350
  },
  mountainCoasterGroup: {
    src: "/images/real-trips/mountain-coaster-group.webp",
    alt: "Lexuz Tours group with a banner beside a coaster in the mountains",
    caption: "Travellers, mountain scenery and Lexuz transport.",
    width: 1800,
    height: 1350
  },
  brandedCoasterFront: {
    src: "/images/real-trips/branded-coaster-front.webp",
    alt: "Front view of a branded Lexuz Tours coaster",
    caption: "A branded Lexuz coaster used for group travel.",
    width: 1350,
    height: 1800
  },
  snowBannerGroup: {
    src: "/images/real-trips/snow-banner-group.webp",
    alt: "Lexuz Tours group holding a banner in a snowy mountain setting",
    caption: "A Lexuz group photographed in snowy mountain scenery.",
    width: 1024,
    height: 1536
  },
  sunlitDepartureGroup: {
    src: "/images/real-trips/sunlit-departure-group.webp",
    alt: "Lexuz Tours travellers gathered beside a coaster before departure",
    caption: "Travellers gathering beside Lexuz transport.",
    width: 1800,
    height: 1350
  },
  snowyCoasterGroup: {
    src: "/images/real-trips/snowy-coaster-group.webp",
    alt: "Lexuz Tours group with a banner and coaster in a snowy mountain landscape",
    caption: "A real Lexuz trip group with branded transport in the mountains.",
    width: 1537,
    height: 1023
  },
  smallGroupVehicle: {
    src: "/images/real-trips/small-group-vehicle.webp", alt: "Lexuz travellers gathered beside a tour vehicle", caption: "A smaller group moment beside tour transport.", width: 1620, height: 1080
  },
  bannerRoadsideGroup: {
    src: "/images/real-trips/banner-roadside-group.webp", alt: "Lexuz Tours group holding a banner during a road trip", caption: "Travellers pausing together during a Lexuz journey.", width: 1080, height: 809
  },
  coasterBoardingCandid: {
    src: "/images/real-trips/coaster-boarding-candid.webp", alt: "Travellers beside a Lexuz coaster during boarding", caption: "A candid moment as travellers prepare for the road.", width: 1350, height: 1800
  },
  wideOutdoorGroup: {
    src: "/images/real-trips/wide-outdoor-group.webp", alt: "Large Lexuz Tours group gathered outdoors", caption: "A wide group gathering from a real Lexuz trip.", width: 1800, height: 1350
  },
  largeCoasterGroup: {
    src: "/images/real-trips/large-coaster-group.webp", alt: "Large Lexuz Tours group gathered beside a coach", caption: "Travellers together beside Lexuz transport.", width: 1800, height: 1350
  },
  twoTravellersBanner: {
    src: "/images/real-trips/two-travellers-banner.webp", alt: "Two travellers holding a Lexuz Tours banner beside a coach", caption: "A banner moment beside Lexuz transport.", width: 1800, height: 1350
  },
  snowyTravelGroup: {
    src: "/images/real-trips/snowy-travel-group.webp", alt: "Lexuz Tours group gathered in snowy mountain scenery", caption: "A real group experience in winter scenery.", width: 1350, height: 1800
  },
  coachBannerMoment: {
    src: "/images/real-trips/coach-banner-moment.webp", alt: "Lexuz Tours banner displayed beside a coach", caption: "Lexuz branding and transport during a group journey.", width: 1800, height: 1350
  },
  sunlitCoachGroup: {
    src: "/images/real-trips/sunlit-coach-group.webp", alt: "Lexuz Tours group gathered beside a coach in evening light", caption: "A real departure group beside Lexuz transport.", width: 1800, height: 1350
  },
  travellerMountainCoach: {
    src: "/images/real-trips/traveller-mountain-coach.webp", alt: "Traveller beside a Lexuz coach with mountain scenery", caption: "A travel moment beside Lexuz transport.", width: 1350, height: 1800
  }
} satisfies Record<string, RealTripPhoto>;

export const realTripGallery = [
  realTripMedia.groupForestBanner,
  realTripMedia.snowyCoasterGroup,
  realTripMedia.groupMeadowSquare,
  realTripMedia.travellersCoaster,
  realTripMedia.bannerRiverside,
  realTripMedia.mountainCoasterGroup,
  realTripMedia.groupCoasterLineup,
  realTripMedia.snowBannerGroup,
  realTripMedia.coasterBoarding,
  realTripMedia.sunlitDepartureGroup,
  realTripMedia.largeCoasterGroup,
  realTripMedia.snowyTravelGroup,
  realTripMedia.coachBannerMoment,
  realTripMedia.wideOutdoorGroup
];

export const realTripCarousel = [
  realTripMedia.bannerRiverside,
  realTripMedia.largeCoasterGroup,
  realTripMedia.twoTravellersBanner,
  realTripMedia.snowyTravelGroup,
  realTripMedia.coachBannerMoment,
  realTripMedia.smallGroupVehicle,
  realTripMedia.sunlitCoachGroup,
  realTripMedia.travellerMountainCoach
];

export function tripEvidenceFor(seed: string, count = 3) {
  const pool = realTripCarousel;
  const start = [...seed].reduce((total, character) => total + character.charCodeAt(0), 0) % pool.length;
  return Array.from({ length: count }, (_, index) => pool[(start + index) % pool.length]);
}
