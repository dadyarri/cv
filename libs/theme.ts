import {
  extendTheme,
  ThemeConfig,
  withDefaultColorScheme,
} from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: {
    body: {
      bg: mode("#ffffff", "#202023"),
      color: mode("#000000", "#ffffff"),
    },
  },
};

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

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
