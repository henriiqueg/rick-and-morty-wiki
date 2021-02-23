const colors = {
  primary: {
    900: "#62CF26",
    800: "#70F745",
    700: "#CBF77E",
    200: "#CBF77E",
  },
  gray: {
    800: '#24282F',
    700: '#3C3E44',
  }
};

const fonts = {
  heading: "Montserrat, 'Open Sans', 'Segoe UI', -apple-system, 'Helvetica Neue', sans-serif",
  body: "Montserrat, 'Open Sans', 'Segoe UI', -apple-system, 'Helvetica Neue', sans-serif",
};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
}

const global = (props) => ({
  "html, body": {
    fontSize: "md",
    color: props.colorMode === "dark" ? "white" : "gray.800",
    lineHeight: "tall",
  },
});

export default {
  global,
  colors,
  fonts,
  config
};
