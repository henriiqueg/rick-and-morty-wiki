const colors = {
  primary: {
    900: "#62CF26",
    800: "#70F745",
    700: "#CBF77E",
    500: "#62CF26", // background button light
    200: "#CBF77E", // background button dark
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
  initialColorMode: "light",
  useSystemColorMode: false, // change for pill
}

const styles = {
  global: (props) => ({
    "html, body": {
      backgroundColor: props.colorMode === "dark" ? "gray.800" : "white",
    },
  })
}

const components = {
  Button: {
    baseStyle: {
      color: 'black',
    },
    variants: {
      "search": {
        boxShadow: "0 0 10px 4px #00000011",
        bg: 'primary.700',
        mt: 1,
        ml: 3,
      },
    }
  }
}

export default {
  config,
  styles,
  components,
  colors,
  fonts
};
