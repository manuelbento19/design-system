import {colors,fontSizes,fontWeights,fonts,lineHeights,radius,space} from '@dev-ui/tokens';
import { createStitches, defaultThemeMap } from '@stitches/react';

export const  {
    styled,
    theme,
    getCssText,
    globalCss,
    config,
    createTheme,
    css
} = createStitches({
    themeMap: {
        ...defaultThemeMap,
        height:"space",
        width: "space"
    },
    theme:{
        colors,
        fonts,
        fontSizes,
        fontWeights,
        lineHeights,
        radii: radius,
        space
    }
})