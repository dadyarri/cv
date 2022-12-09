import {Td, Tr, Text} from "@chakra-ui/react";
import React, {ReactNode} from "react";

interface Props {
    technology: string;
    description?: string;
    experience: string;
    children?: ReactNode;
    icon?: ReactNode;
}

const SkillRow = ({technology, description, experience, children, icon}: Props) => {
    return (
        <Tr>
            <Td><Text style={{display: "flex"}}><span style={{marginRight: "5px"}}>{icon}</span>{technology}</Text></Td>
            {children ? <><Td>{children}<Text>{`Опыт: ${experience}`}</Text></Td></> : description ?
                <Td>{`${description} Опыт: ${experience}`}</Td> :
                <Td>{`Опыт: ${experience}`}</Td>}
        </Tr>
    );
};

export default SkillRow;
