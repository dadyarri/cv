import {extendTheme, ThemeConfig, withDefaultColorScheme} from "@chakra-ui/react";


const styles = {
  global: {
    body: {
      bg: "#ffffff",
      color: "#000000"
    }
  }
}

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
}

const theme = extendTheme(
{
  styles: styles,
  config: config,
  },
  withDefaultColorScheme({
    colorScheme: "blue",
  })
);

export default theme;
