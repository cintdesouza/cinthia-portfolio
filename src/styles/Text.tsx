import { styled } from '@/styles/stitches.config';
import { colors } from '@/styles/Global'
import { keyframes } from '@stitches/react';

const headingsDefaultConfig = {
    fontFamily: "$titles"
}

const bodyDefaultConfig = {
    fontFamily: "$texts"
}

const typing = keyframes({
    "0%": {
        width: "0%",
        overflow: "hidden",
        whiteSpace: "nowrap",
    },
    "70%": {
        width: "100%",
        whiteSpace: "nowrap",
    }
  });

export const Text = styled("p", {
    color: "$brand2",
    fontSize: "$text1",
    fontWeight: 400,
    variants: {
        type: {
            heading1: {
                animation: `${typing} 4s steps(35, end)`,
                letterSpacing: ".10em",
                fontSize: "$title1",
                lineHeight: "$title1",
                fontWeight: 700,
                ...headingsDefaultConfig,
                "@mobile": {
                    fontSize: "$title1Mobile",
                    lineHeight: "$title1Mobile"
                }
            },
            heading2: {
                fontSize: "$title2",
                lineHeight: "$title2",
                fontWeight: 600,
                ...headingsDefaultConfig
            },
            heading3: {
                fontSize: "$title3",
                lineHeight: "$title3",
                fontWeight: 500,
                ...headingsDefaultConfig
            },
            heading4: {
                fontSize: "$title4",
                lineHeight: "$title4",
                fontWeight: 500,
                ...headingsDefaultConfig
            },
            body1: {
                fontSize: "$text1",
                lineHeight: "$text1",
                textAlign: "justify",
                ...bodyDefaultConfig
            },
            body2: {
                fontSize: "$text2",
                lineHeight: "$text2",
                ...bodyDefaultConfig
            },
        },
        ...colors
    }
})