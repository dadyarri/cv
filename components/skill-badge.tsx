import {Badge} from "@chakra-ui/react";
import React from "react";

interface Props {
    children: React.ReactNode;
}

const SkillBadge = ({ children }: Props) => {
  return <Badge variant={"solid"} colorScheme={"blue"} fontSize={15} mx={3} my={2}>{children}</Badge>
}

export default SkillBadge;