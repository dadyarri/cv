import {
  Box,
  Button,
  Container,
  Divider,
  Heading,
  HStack,
  Image,
  LinkOverlay,
  ListItem,
  UnorderedList
} from "@chakra-ui/react";
import {AiOutlineContacts, AiOutlineMail} from "react-icons/ai";
import {BsTelegram} from "react-icons/bs";
import {FaUniversity} from "react-icons/fa";
import {CgWorkAlt} from "react-icons/cg";
import {BioSection, BioYear} from "./bio";

const Resume = () => {
  return (
    <Box>
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
        <BioSection>
          <BioYear>2020 &mdash; 2024</BioYear>
          ВлГУ, Информационные системы и технологии, бакалавр
        </BioSection>
      </Box>
      <Box my={5}>
        <HStack spacing={2}>
          <CgWorkAlt size={30}/>
          <Heading as={"h2"} fontSize={"30px"}>Опыт</Heading>
        </HStack>
        <BioSection>
          <BioYear>2021 &mdash; н. в.</BioYear> ChocoManager
          <Container>
            <p>
              Экосистема, управляющая небольшим интернет-магазином (ежемесячная аудитория около 200 человек)
            </p>
            <b>Составные части:</b>
            <UnorderedList>
              <ListItem>Бот в сообществе ВКонтакте &mdash; обрабатывает заказы покупателей</ListItem>
              <ListItem>бот в Telegram &mdash; управляет заказаим и остатками товара на складе, </ListItem>
              <ListItem>REST API &mdash; связует ботов</ListItem>
            </UnorderedList>
            <b>Технический стек: </b> C#, .NET, Python, PostgreSQL, Docker
          </Container>
        </BioSection>
        <Divider style={{borderColor: "#000000"}}/>
        <BioSection>
          <BioYear>июнь &mdash; сентябрь 2021</BioYear> Преподаватель технических курсов для детей 6-14 лет
          <Container>
            <b>Компания: </b> Академия top (г. Владимир)
          </Container>
        </BioSection>
        <Divider style={{borderColor: "#000000"}}/>
        <BioSection>
          <BioYear>2022</BioYear> Приложение для архивирования учебных материалов (REST API)
          <Container>
            <BioYear>Технический стек: </BioYear> Java, Spark, PostgreSQL
          </Container>
        </BioSection>
        <Divider style={{borderColor: "#000000"}}/>
        <BioSection>
          <BioYear>2022</BioYear> Консольный менеджер задач
          <Container>
            <b>Функционал:</b>
            <UnorderedList>
              <ListItem>Добавление/удаление/выполнение задач</ListItem>
              <ListItem>Назначение тегов</ListItem>
            </UnorderedList>
            <BioYear>Технический стек: </BioYear> Nim
          </Container>
        </BioSection>
      </Box>
    </Box>
  );
};

export default Resume;
