import {Td, Tr, Text} from "@chakra-ui/react";
import React, {ReactNode} from "react";

interface Props {
    technology: string;
    description?: string;
    experience: string;
    children?: ReactNode;
}

const SkillRow = ({technology, description, experience, children}: Props) => {
    return (
        <Tr>
            <Td>{technology}</Td>
            {children ? <><Td>{children}<Text>{`Опыт: ${experience}`}</Text></Td></> : description ?
                <Td>{`${description} Опыт: ${experience}`}</Td> :
                <Td>{`Опыт: ${experience}`}</Td>}
        </Tr>
    );
};

export default SkillRow;
