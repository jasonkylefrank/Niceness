
// APPROACH:  I'm trying-out making the theme compatible with MUI's theme structure
//            (see: https://mui.com/material-ui/customization/theming/).
//            This way I can pass it to both MUI and the Styled Component theme.

const theme = {
    palette: {
      text: {
        primary: 'rgba(0,0,0,0.87)', // normal
        secondary: 'rgba(0,0,0,0.54)', // subdued
        disabled: 'rgba(0,0,0,0.3)'
      }
    }
};

export default theme;