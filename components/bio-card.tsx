import { Badge, Box, Heading, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";

type Props = {
  title: string;
  year: React.ReactNode;
  desc?: React.ReactNode;
  link?: string;
};

export const BioCard = ({ title, year, desc, link }: Props) => {
  console.log(link);
  return <Box p={5} shadow={"sm"} borderWidth={"1px"} m={3}>
    <Heading size={"md"}>
      {title} <Badge colorScheme={"blue"}>{year}</Badge>
    </Heading>
    {desc ? <Text mt={4}>{desc}</Text> : null}
    {link ? (
      <>
        <br />
        <Text>
          {/*@ts-ignore*/}
          Подробнее: <NextLink href={link} passHref>
          <Link>{link}</Link></NextLink>
        </Text>
      </>
    ) : null}
  </Box>
};
