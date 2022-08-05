import { Box, Button, Container, Flex, Heading, LinkOverlay } from "@chakra-ui/react";
import { HiOutlineDownload } from "react-icons/hi";

const Navbar = () => {
  return (
    <Box as={"nav"} w={"100%"} zIndex={2}>
      <Container display={"flex"} p={2} maxW={"container.md"}>
        <Flex align={"left"} mr={5}>
          <Heading as={"h1"} size={"lg"} letterSpacing={"tighter"}>
            dadyarri
          </Heading>
        </Flex>
        {/*@ts-ignore 2322*/}
        <Box flex={1} align={"right"}>
          <Button
            aria-label={"Download CV"}
            colorScheme={"blue"}
            rightIcon={<HiOutlineDownload />}
          >
            Скачать PDF
            <LinkOverlay href={"/api/pdf"} download={"dadyarri_resume.pdf"}/>
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
