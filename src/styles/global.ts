import { globalCss } from "./stitches.config";

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0
},

body: {
    backgroundColor: '$gray800',
    color: '$gray100',
    '-webkit-font-smoothing': 'antialiased',
},

'body,input,textarea,button': {
    fontFamily: 'Nunito',
    fontWeight: 400
}
})