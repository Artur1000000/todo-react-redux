import createTheme from "@material-ui/core/styles/createTheme";

function otherTheme() {
  return createTheme({
    palette: {
      primary: {
        main: "#0099cc",
      },
      secondary: {
        main: "#f73378",
      },
    },
  });
}

export default otherTheme;
