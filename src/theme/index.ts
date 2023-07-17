import { theme as base, extendTheme } from "@chakra-ui/react";


const theme = extendTheme({
    colors: {
        brand: {}
    },
    fonts: {
        heading: `Montserrat, ${base.fonts?.body}`,
        body: `Roboto, ${base.fonts?.body}`,
    },
    components: {
        Text: {
            variants: {
                logo: {
                    fontFamily: 'Montserrat Alternates'
                }
            }
        }
    },
    
});

export default theme;