import { background, theme as base, extendTheme } from "@chakra-ui/react";


const theme = extendTheme({
    colors: {
        transparent: 'transparent',
        black: '#000',
        white: '#fff',
        customGray: '#EFEEEC',
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
                "900": "#023123"
            }
        },
    },
    fonts: {
        heading: `Roboto, ${base.fonts?.heading}`,
        body: `Roboto, ${base.fonts?.body}`,
    },
    components: {
        Text: {
            baseStyle: {
                fontWeight: '600',
            },
            variants: {
                logo: {
                    fontFamily: 'Montserrat Alternates',
                    fontWeight: '400',
                    textTransform: 'uppercase',
                }
            }
        },
        Button: {
            variants: {
                outline: {
                    border: '2px solid',    
                    color: base.colors.white,
                    _hover: {
                        color: base.colors.black
                    }
                },
                outlineBlack: {
                    border: '2px solid',    
                    color: base.colors.white,
                    backgroundColor: base.colors.black,
                    borderColor: base.colors.black,
                    _hover: {
                        color: base.colors.black,
                        backgroundColor: base.colors.white,
                    }
                },
                outlineInverted: {
                    border: '2px solid',    
                    color: base.colors.black,
                    _hover: {
                        color: base.colors.white,
                        backgroundColor: base.colors.black,
                    }
                },
            }
        }
    },
});

export default theme;