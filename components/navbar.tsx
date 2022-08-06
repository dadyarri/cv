import {
  Box,
  Container,
  Flex,
  Heading,
  IconButton,
  LightMode,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
} from "@chakra-ui/react";
import {GiHamburgerMenu} from "react-icons/gi";
import ChakraNextLink from "./chakra-next-link";

const Navbar = () => {

  return (
    <>
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
          {/*@ts-ignore 2322*/}
          <Box flex={1} align={"right"} ml={2} display={{ base: "inline-block", md: "none" }}>
              <LightMode>
                <Menu>
                  <MenuButton
                      as={IconButton}
                      icon={<GiHamburgerMenu />}
                      variant={"outline"}
                      aria-label={"Options"}
                  ></MenuButton>
                  <MenuList>
                    <ChakraNextLink href={"https://dadyarri.ru"}>
                      <MenuItem>Сайт</MenuItem>
                    </ChakraNextLink>
                  </MenuList>
                </Menu>
              </LightMode>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Navbar;
