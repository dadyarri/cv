import {Table, TableContainer, Th, Thead, Tr} from "@chakra-ui/react";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const SkillTable = ({ children }: Props) => {
  return <TableContainer whiteSpace={"pre-wrap"}>
    <Table>
      <Thead>
        <Tr>
          <Th>Технология</Th>
          <Th>Описание</Th>
        </Tr>
      </Thead>
      { children }
    </Table>
  </TableContainer>
  ;
}
export default SkillTable;