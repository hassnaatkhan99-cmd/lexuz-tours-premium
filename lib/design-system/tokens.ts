export const designTokens = {
  color: {
    primary: "#1B4D3E",
    primaryHover: "#163F33",
    primaryPressed: "#11332A",
    secondary: "#E8F1EE",
    accent: "#D9A441",
    whatsapp: "#25D366",
    success: "#1E7F4F",
    warning: "#B7791F",
    error: "#C0392B",
    info: "#2C6E9B",
    ink: {
      100: "#14201B",
      80: "#33403A",
      60: "#5C6B64",
      30: "#A9B5AF"
    },
    line: "#E3E8E5",
    surface: "#FFFFFF",
    canvas: "#F7F9F8"
  },
  typography: {
    hero: "text-[2rem] leading-[1.15] font-black md:text-[2.5rem]",
    h1: "text-[1.625rem] leading-[1.2] font-black md:text-[2rem]",
    h2: "text-2xl leading-[1.3] font-bold",
    h3: "text-lg leading-[1.4] font-bold",
    body: "text-base leading-[1.6] font-normal",
    small: "text-sm leading-[1.5] font-normal",
    caption: "text-xs leading-[1.4] font-bold uppercase tracking-[0.06em]",
    price: "text-xl leading-[1.2] font-black text-brand-primary"
  },
  spacing: {
    unit: 4,
    section: "py-16 md:py-24",
    sectionCompact: "py-12 md:py-16",
    card: "p-5 md:p-6",
    mobileGutter: "px-4",
    desktopGutter: "md:px-6",
    gridGap: "gap-4 md:gap-6"
  },
  radius: {
    sm: "rounded-dsSm",
    md: "rounded-dsMd",
    lg: "rounded-dsLg",
    full: "rounded-full"
  },
  shadow: {
    resting: "shadow-ds1",
    raised: "shadow-ds2",
    overlay: "shadow-ds3"
  },
  motion: {
    fast: "duration-150 ease-out",
    base: "duration-200 ease-out",
    slow: "duration-300 ease-out",
    card: "transition duration-200 ease-out hover:-translate-y-1 hover:shadow-ds2",
    button: "transition duration-150 ease-out active:scale-[0.98]"
  },
  icon: {
    sm: 16,
    md: 20,
    lg: 24
  }
} as const;

export type DesignTokens = typeof designTokens;
