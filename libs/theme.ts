import {
  extendTheme,
  ThemeConfig,
  withDefaultColorScheme,
} from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const theme = extendTheme(
  {
    config: config,
  },
  withDefaultColorScheme({
    colorScheme: "blue",
  })
);

export default theme;
