import {Box, Button, Heading, HStack, Image, LinkOverlay, ListItem, Show, Text, UnorderedList,} from "@chakra-ui/react";
import {AiOutlineContacts, AiOutlineMail} from "react-icons/ai";
import {BsTelegram} from "react-icons/bs";
import {FaUniversity} from "react-icons/fa";
import {CgWorkAlt} from "react-icons/cg";
import {GiSkills} from "react-icons/gi";
import SkillRow from "./skill-row";
import SkillTable from "./skill-table";
import {BioCard} from "./bio-card";

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
            <SkillRow
              technology={"C#"}
              description={"В т. ч. EF Core, ASP.NET. Опыт: полгода"}
            />
            <SkillRow
              technology={"Python"}
              description={"В т. ч. FastAPI. Опыт: четыре года"}
            />
            <SkillRow
              technology={"Docker"}
              description={"В т. ч. Docker compose. Опыт: два года"}
            />
            <SkillRow
              technology={"PostgreSQL"}
              description={"В т. ч. PL/pgSQL. Опыт: три года"}
            />
            <SkillRow technology={"Nim"} description={"Опыт: полгода"} />
            <SkillRow technology={"Bash"} description={"Опыт: два года"} />
            <SkillRow
              technology={"Linux"}
              description={
                "Fedora Linux, Arch Linux, Ubuntu и прочие. Сейчас основной — Fedora. Опыт: шесть лет. Есть опыт деплоя на Linux-серверы"
              }
            />
            <SkillRow technology={"Git"} description={"Опыт: пять лет"} />
            <SkillRow technology={"Typescript"} description={"В т. ч. React, Next.js. Опыт: 1 месяц"}/>
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
        <BioCard title={"ВлГУ"} desc={"Информационные системы и технологии, бакалавриат"} year={<>2020 &mdash; н. в.</>}/>
      </Box>
      <Box my={5}>
        <HStack spacing={2}>
          <CgWorkAlt size={30} />
          <Heading as={"h2"} fontSize={"30px"}>
            Опыт
          </Heading>
        </HStack>
        <BioCard
          title={"Пет-проекты"}
          year={<Text>2021 &mdash; н. в</Text>}
          link={"https://dadyarri.ru/projects"}
        ></BioCard>
        <BioCard
          title={"ChocoManager"}
          year={<Text>2021 &mdash; н. в</Text>}
          desc={
            <>
              <Text>
                Экосистема, управляющая небольшим интернет-магазином
                (ежемесячная аудитория около 200 человек).
              </Text>
              <b>Составные части:</b>
              <UnorderedList>
                <ListItem>
                  Бот в сообществе ВКонтакте &mdash; обрабатывает заказы
                  покупателей
                </ListItem>
                <ListItem>
                  бот в Telegram &mdash; управляет заказаим и остатками товара
                  на складе,{" "}
                </ListItem>
                <ListItem>
                  REST API &mdash; обеспечивает доступ к базе данных и связует
                  ботов
                </ListItem>
              </UnorderedList>
              <b>Технический стек: </b> C#, .NET, Python, PostgreSQL, Docker
            </>
          }
          link={"https://dadyarri.ru/project/choco"}
        />
        <BioCard
          title={"Преподаватель технических курсов для детей 6-14 лет"}
          year={<Text>июнь &mdash; сентябрь 2021</Text>}
          desc={
            <>
              <b>Компания: </b> Академия top (г. Владимир)
            </>
          }
        />
      </Box>
    </Box>
  );
};

export default Resume;
