import { globalStyle, style } from '@vanilla-extract/css';

globalStyle('body', {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    fontFamily: "sans-serif"
})

export const container = style({
    display: "grid"
})