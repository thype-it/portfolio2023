import { theme as base, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    transparent: "transparent",
    black: "#000",
    white: "#fff",
    customGray: "#EFEEEC",
    whiteShadow: "rgba(255, 255, 255, 0.4)",
    highlight: {
      green: {
        "50": "#E7FEF7",
        "100": "#BBFCE8",
        "200": "#8FFADA",
        "300": "#63F7CB",
        "400": "#38F5BD",
        "500": "#0CF3AE",
        "600": "#09C38C",
        "700": "#079269",
        "800": "#056146",
        "900": "#023123",
      },
      orange: {
        "50": "#FFF2E5",
        "100": "#FFDAB8",
        "200": "#FFC28A",
        "300": "#FFAA5C",
        "400": "#FF922E",
        "500": "#FF7A00",
        "600": "#CC6200",
        "700": "#994900",
        "800": "#663100",
        "900": "#331800",
      },
      violet: {
        "50": "#F1E5FF",
        "100": "#D7B8FF",
        "200": "#BD8AFF",
        "300": "#A35CFF",
        "400": "#892EFF",
        "500": "#6F00FF",
        "600": "#5900CC",
        "700": "#430099",
        "800": "#2C0066",
        "900": "#160033",
      },
    },
  },
  breakpoints: {
    "3xl": "1920px",
  },
  fonts: {
    heading: "var(--font-roboto)",
    body: "var(--font-roboto)",
  },
  sizes: {
    fullHeight: "100svh",
    fullWidth: "100dvw",
  },
  components: {
    Text: {
      baseStyle: {
        fontWeight: "600",
      },
      variants: {
        logo: {
          fontFamily: "var(--font-montserratAlternates)",
          fontWeight: "400",
          textTransform: "uppercase",
        },
        topic: {
          fontFamily: "var(--font-montserrat)",
          fontWeight: "400",
        },
        quote: {
          fontFamily: "var(--font-ooohBaby)",
          fontWeight: "400",
        },
      },
    },
    Heading: {
      variants: {
        quote: {
          fontFamily: "var(--font-ooohBaby)",
        },
      },
    },
    Button: {
      variants: {
        outline: {
          border: "2px solid",
          color: base.colors.white,
          _hover: {
            color: base.colors.black,
          },
        },
        outlineBlack: {
          border: "2px solid",
          color: base.colors.white,
          backgroundColor: base.colors.black,
          borderColor: base.colors.black,
          _hover: {
            color: base.colors.black,
            backgroundColor: base.colors.white,
          },
        },
        outlineInverted: {
          border: "2px solid",
          color: base.colors.black,
          _hover: {
            color: base.colors.white,
            backgroundColor: base.colors.black,
          },
        },
      },
    },
  },
});

export default theme;
