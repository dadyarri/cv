import {Box, Container, Heading, Image} from "@chakra-ui/react";

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
    </Container>
  );
};

export default Resume;
