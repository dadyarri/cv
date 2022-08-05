import type { NextPage } from "next";
import Navbar from "../components/navbar";
import Resume from "../components/resume";
import {Container} from "@chakra-ui/react";

const Home: NextPage = () => {
  return (
    <Container>
      <Navbar />
      <Resume />
    </Container>
  );
};

export default Home;
