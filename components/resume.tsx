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
  Show,
  UnorderedList,
} from "@chakra-ui/react";
import { AiOutlineContacts, AiOutlineMail } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";
import { FaUniversity } from "react-icons/fa";
import { CgWorkAlt } from "react-icons/cg";
import { GiSkills } from "react-icons/gi";
import { BioSection, BioYear } from "./bio";
import SkillRow from "./skill-row";
import SkillTable from "./skill-table";

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
          <AiOutlineContacts size={30} />
          <Heading as={"h2"} fontSize={"30px"}>
            Контакты
          </Heading>
        </HStack>
        <Box display={"flex"}>
          <HStack>
            <Button leftIcon={<AiOutlineMail />}>
              <Show breakpoint={"print"}>E-mail: </Show>
              me@dadyarri.ru
              <LinkOverlay href={"mailto:me@dadyarri.ru"} />
            </Button>
            <Button leftIcon={<BsTelegram />}>
              <Show breakpoint={"print"}>Telegram: </Show>
              @dadyarri
              <LinkOverlay href={"https://t.me/dadyarri"} />
            </Button>
          </HStack>
        </Box>
      </Box>
      <Box my={5}>
        <HStack spacing={2}>
          <GiSkills size={30} />
          <Heading as={"h2"} fontSize={"30px"}>
              Навыки
          </Heading>
        </HStack>
        <Box flex={1} justifyContent={"space-between"} alignItems={"center"}>
          <SkillTable>
            <SkillRow technology={"C#"} description={"В т. ч. EF Core, ASP.NET. Опыт: полгода"}/>
            <SkillRow technology={"Python"} description={"В т. ч. FastAPI"}/>
            <SkillRow technology={"Docker"} description={"В т. ч. Docker compose. Опыт: два года"}/>
            <SkillRow technology={"PostgreSQL"} description={"В т. ч. PL/pgSQL. Опыт: три года"}/>
            <SkillRow technology={"Nim"} description={"Опыт: полгода"}/>
            <SkillRow technology={"Bash"} description={"Опыт: два года"}/>
            <SkillRow technology={"Linux"} description={"Fedora Linux, Arch Linux, Ubuntu и прочие. Сейчас основной — Fedora. Опыт: шесть лет. Есть опыт деплоя на Linux-серверы"}/>
            <SkillRow technology={"Git"} description={"Опыт: пять лет"}/>
          </SkillTable>
        </Box>
      </Box>
      <Box my={5}>
        <HStack spacing={2}>
          <FaUniversity size={30} />
          <Heading as={"h2"} fontSize={"30px"}>
            Образование
          </Heading>
        </HStack>
        <BioSection>
          <BioYear>2020 &mdash; 2024</BioYear>
          ВлГУ, Информационные системы и технологии, бакалавр
        </BioSection>
      </Box>
      <Box my={5}>
        <HStack spacing={2}>
          <CgWorkAlt size={30} />
          <Heading as={"h2"} fontSize={"30px"}>
            Опыт
          </Heading>
        </HStack>
        <BioSection>
          <BioYear>2021 &mdash; н. в.</BioYear> ChocoManager
          <Container>
            <p>
              Экосистема, управляющая небольшим интернет-магазином (ежемесячная
              аудитория около 200 человек)
            </p>
            <b>Составные части:</b>
            <UnorderedList>
              <ListItem>
                Бот в сообществе ВКонтакте &mdash; обрабатывает заказы
                покупателей
              </ListItem>
              <ListItem>
                бот в Telegram &mdash; управляет заказаим и остатками товара на
                складе,{" "}
              </ListItem>
              <ListItem>REST API &mdash; связует ботов</ListItem>
            </UnorderedList>
            <BioYear>Технический стек: </BioYear> C#, .NET, Python, PostgreSQL,
            Docker
          </Container>
        </BioSection>
        <Divider style={{ borderColor: "#000000" }} />
        <BioSection>
          <BioYear>июнь &mdash; сентябрь 2021</BioYear> Преподаватель
          технических курсов для детей 6-14 лет
          <Container>
            <b>Компания: </b> Академия top (г. Владимир)
          </Container>
        </BioSection>
        <Divider style={{ borderColor: "#000000" }} />
        <BioSection>
          <BioYear>2022</BioYear> Приложение для архивирования учебных
          материалов (REST API)
          <Container>
            <BioYear>Технический стек: </BioYear> Java, Spark, PostgreSQL
          </Container>
        </BioSection>
        <Divider style={{ borderColor: "#000000" }} />
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
