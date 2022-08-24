import { Box } from "@chakra-ui/react";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export const BioSection = ({ children }: Props) => (
  <Box style={{ paddingLeft: "3.4em", textIndent: "-3.4em" }}>{children}</Box>
);

export const BioYear = ({ children }: Props) => (
  <span style={{ fontWeight: "bold", marginRight: "1em" }}>{children}</span>
);
