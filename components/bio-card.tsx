import { Badge, Box, Heading, Link, Text } from "@chakra-ui/react";
import React from "react";

type Props = {
  title: string;
  year: React.ReactNode;
  desc?: React.ReactNode;
  link?: string;
};

export const BioCard = ({ title, year, desc, link }: Props) => (
  <Box p={5} shadow={"sm"} borderWidth={"1px"} m={3}>
    <Heading size={"md"}>
      {title} <Badge colorScheme={"blue"}>{year}</Badge>
    </Heading>
    {desc ? <Text mt={4}>{desc}</Text> : null}
    {link ? (
      <>
        <br />
        <Text>
          {/*@ts-ignore*/}
          Подробнее: <Link href={{ link }}>{link}</Link>
        </Text>
      </>
    ) : null}
  </Box>
);
