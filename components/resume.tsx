import {Box, Button, Container, Heading, HStack, Image, LinkOverlay} from "@chakra-ui/react";
import {AiOutlineContacts, AiOutlineMail} from "react-icons/ai";
import {BsTelegram} from "react-icons/bs";
import {FaUniversity} from "react-icons/fa";

const Resume = () => {
  return (
    <Container>
      <Box display={"flex"}>
        <Box flexGrow={1}>
          <Heading as={"h1"}>Даниил Голубев</Heading>
          <p>Бэкенд-разработчик</p>
        </Box>
        <Box flexShrink={0}>
          <Image
              alt={"avatar"}
              borderColor={"whiteAlpha.800"}
              borderWidth={2}
              borderStyle={"solid"}
              width={100}
              height={100}
              display={"inline-block"}
              borderRadius={"full"}
              src={"https://dadyarri.ru/images/index/webp/avatar.webp"}
              fallbackSrc={"https://dadyarri.ru/images/index/jpg/avatar.jpg"}
              marginTop={3}
          />
      </Box>
      </Box>
      <Box my={5}>
        <HStack spacing={2}>
          <AiOutlineContacts size={30}/>
          <Heading as={"h2"} fontSize={"30px"}>Контакты</Heading>
        </HStack>
        <Box display={"flex"}>
          <HStack>
            <Button leftIcon={<AiOutlineMail/>}>
              me@dadyarri.ru
              <LinkOverlay href={"mailto:me@dadyarri.ru"}/>
            </Button>
            <Button leftIcon={<BsTelegram/>}>
              @dadyarri
              <LinkOverlay href={"https://t.me/dadyarri"}/>
            </Button>
          </HStack>
        </Box>
      </Box>
      <Box my={5}>
        <HStack spacing={2}>
          <FaUniversity size={30}/>
          <Heading as={"h2"} fontSize={"30px"}>Образование</Heading>
        </HStack>
      </Box>
    </Container>
  );
};

export default Resume;
