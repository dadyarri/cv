import type { NextPage } from "next";
import Navbar from "../components/navbar";
import Resume from "../components/resume";
import { Container, Hide } from "@chakra-ui/react";
import Head from "next/head";

const Home: NextPage = () => {
  return (
      <><Head><title>Даниил Голубев | Резюме</title></Head>
    <Container maxW={"120ch"}>
      <Hide breakpoint={"print"}>
        <Navbar />
      </Hide>
      <Resume />
    </Container></>
  );
};

export default Home;
