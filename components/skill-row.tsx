import {Td, Tr} from "@chakra-ui/react";
import React from "react";

interface Props {
  technology: string;
  description: string;
}

const SkillRow = ({ technology, description }: Props) => {
  return <Tr>
    <Td>{ technology }</Td>
    <Td>{ description }</Td>
  </Tr>
}

export default SkillRow;