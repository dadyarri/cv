import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Hide,
  LightMode,
  Link,
  LinkOverlay,
  Modal,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { HiOutlineDownload } from "react-icons/hi";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <LightMode>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Генерация PDF...</ModalHeader>
          </ModalContent>
        </Modal>
      </LightMode>
      <Box as={"nav"} w={"100%"} zIndex={2}>
        <Container display={"flex"} p={2} maxW={"container.md"}>
          <Flex align={"left"} mr={5}>
            <Heading as={"h1"} size={"lg"} letterSpacing={"tighter"}>
              dadyarri
            </Heading>
          </Flex>
          <Flex align={"center"} verticalAlign={"center"} ml={5}>
            <Stack
                direction={{ base: "column", md: "row" }}
                display={{ base: "none", md: "flex" }}
                width={{ base: "full", md: "auto" }}
                alignItems={"center"}
                flexGrow={1}
                mt={{ base: 4, md: 0 }}
            >
              <Link href={"https://dadyarri.ru"}>Сайт</Link>
            </Stack>
          </Flex>
          <Hide>
            {/*@ts-ignore 2322*/}
            <Box flex={1} align={"right"}>
              <Button
                aria-label={"Download CV"}
                colorScheme={"blue"}
                rightIcon={<HiOutlineDownload />}
                onClick={onOpen}
              >
                Скачать PDF
                <LinkOverlay
                  href={"/api/pdf"}
                  download={"dadyarri_resume.pdf"}
                />
              </Button>
            </Box>
          </Hide>
        </Container>
      </Box>
    </>
  );
};

export default Navbar;
