import type { NextPage } from "next";
import Navbar from "../components/navbar";
import Resume from "../components/resume";
import { Container, Hide } from "@chakra-ui/react";

const Home: NextPage = () => {
  return (
    <Container maxW={"120ch"}>
      <Hide breakpoint={"print"}>
        <Navbar />
      </Hide>
      <Resume />
    </Container>
  );
};

export default Home;
