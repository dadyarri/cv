import {Badge, Tooltip} from "@chakra-ui/react";
import React from "react";

interface Props {
  technology: string;
  tooltip: string;
}

const SkillBadge = ({ technology, tooltip }: Props) => {
  return <Tooltip label={tooltip}>
    <Badge variant={"solid"} colorScheme={"blue"} fontSize={15} mx={3} my={2}>{technology}</Badge>
  </Tooltip>
}

export default SkillBadge;