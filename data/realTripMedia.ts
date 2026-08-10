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
  realTripMedia.sunlitDepartureGroup
];
