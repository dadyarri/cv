import {
    Box,
    Button,
    Heading,
    HStack,
    Image,
    LinkOverlay,
    ListItem,
    Show,
    Text,
    UnorderedList,
} from "@chakra-ui/react";
import {AiOutlineContacts, AiOutlineMail} from "react-icons/ai";
import {BsTelegram} from "react-icons/bs";
import {SiCsharp, SiDocker, SiGit, SiGnubash, SiLinux, SiNim, SiPostgresql, SiPython, SiTypescript} from "react-icons/si";
import {FaUniversity} from "react-icons/fa";
import {CgAwards, CgWorkAlt} from "react-icons/cg";
import {GiSkills} from "react-icons/gi";
import SkillRow from "./skill-row";
import SkillTable from "./skill-table";
import {BioCard} from "./bio-card";
import moment from "moment";
import "moment/locale/ru";
import React from "react";

const Resume = () => {

    moment().locale("ru");
    const dotnetExp = moment("01092021", "DDMMYYYY").fromNow(true);
    const pythonExp = moment("15102019", "DDMMYYYY").fromNow(true);
    const dockerExp = moment("20022020", "DDMMYYYY").fromNow(true);
    const pgExp = moment("10122019", "DDMMYYYY").fromNow(true);
    const nimExp = moment("12062022", "DDMMYYYY").fromNow(true);
    const bashExp = moment("30082019", "DDMMYYYY").fromNow(true);
    const linuxExp = moment("05072016", "DDMMYYYY").fromNow(true);
    const gitExp = moment("13102017", "DDMMYYYY").fromNow(true);
    const tsExp = moment("12072022", "DDMMYYYY").fromNow(true);

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
                    <Heading as={"h2"} fontSize={"30px"}>
                        Контакты
                    </Heading>
                </HStack>
                <Box display={"flex"}>
                    <HStack>
                        <Button leftIcon={<AiOutlineMail/>}>
                            <Show breakpoint={"print"}>E-mail: </Show>
                            me@dadyarri.ru
                            <LinkOverlay href={"mailto:me@dadyarri.ru"}/>
                        </Button>
                        <Button leftIcon={<BsTelegram/>}>
                            <Show breakpoint={"print"}>Telegram: </Show>
                            @dadyarri
                            <LinkOverlay href={"https://t.me/dadyarri"}/>
                        </Button>
                    </HStack>
                </Box>
            </Box>
            <Box my={5}>
                <HStack spacing={2}>
                    <GiSkills size={30}/>
                    <Heading as={"h2"} fontSize={"30px"}>
                        Навыки
                    </Heading>
                </HStack>
                <Box flex={1} justifyContent={"space-between"} alignItems={"center"}>
                    <SkillTable>
                        <SkillRow
                            technology={"Docker"}
                            experience={dockerExp}
                            icon={<SiDocker size={20}/>}
                        >
                            <UnorderedList>
                                <ListItem>Docker Compose</ListItem>
                            </UnorderedList>
                        </SkillRow>
                        <SkillRow
                            technology={"C#"}
                            experience={dotnetExp}
                            icon={<SiCsharp size={20}/>}
                        >
                            <UnorderedList>
                                <ListItem>ASP.NET</ListItem>
                                <ListItem>EF Core</ListItem>
                            </UnorderedList>
                        </SkillRow>
                        <SkillRow
                            technology={"Python"}
                            experience={pythonExp}
                            icon={<SiPython size={20}/>}
                        >
                            <UnorderedList>
                                <ListItem>FastAPI</ListItem>
                            </UnorderedList>
                        </SkillRow>
                        <SkillRow
                            technology={"PostgreSQL"}
                            experience={pgExp}
                            icon={<SiPostgresql size={20}/>}
                        >
                            <UnorderedList>
                                <ListItem>PL/pgSQL</ListItem>
                            </UnorderedList>
                        </SkillRow>
                        <SkillRow technology={"Nim"}
                                  experience={nimExp}
                                    icon={<SiNim size={20}/>}
                        />
                        <SkillRow technology={"Bash"}
                                  experience={bashExp}
                                    icon={<SiGnubash size={20}/>}
                        />
                        <SkillRow
                            technology={"Linux"}
                            experience={linuxExp}
                            icon={<SiLinux size={20}/>}
                        >
                            <UnorderedList>
                                <ListItem>Fedora</ListItem>
                                <ListItem>Arch</ListItem>
                                <ListItem>Ubuntu</ListItem>
                                <ListItem>Деплой</ListItem>
                            </UnorderedList>
                        </SkillRow>
                        <SkillRow technology={"Git"}
                                  experience={gitExp}
                                  icon={<SiGit size={20}/>}
                        />
                        <SkillRow
                            technology={"Typescript"}
                            experience={tsExp}
                            icon={<SiTypescript size={20}/>}
                        >
                            <UnorderedList>
                                <ListItem>React</ListItem>
                                <ListItem>Next.js</ListItem>
                            </UnorderedList>
                        </SkillRow>
                    </SkillTable>
                </Box>
            </Box>
            <Box my={5}>
                <HStack spacing={2}>
                    <FaUniversity size={30}/>
                    <Heading as={"h2"} fontSize={"30px"}>
                        Образование
                    </Heading>
                </HStack>
                <BioCard
                    title={"ВлГУ"}
                    desc={"Информационные системы и технологии, бакалавриат"}
                    year={<>2020 &mdash; н. в.</>}
                />
            </Box>
            <Box my={5}>
                <HStack spacing={2}>
                    <CgWorkAlt size={30}/>
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
                <BioCard
                    title={"Технический директор"}
                    year={<Text>сентябрь 2022 &mdash; н. в.</Text>}
                    desc={
                        <>
                            <b>Компания: </b> UNI
                        </>
                    }
                />
            </Box>
            <Box my={5}>
                <HStack spacing={2}>
                    <CgAwards size={30}/>
                    <Heading as={"h2"} fontSize={"30px"}>
                        Награды
                    </Heading>
                </HStack>
                <BioCard
                    title={"Победитель \u00abОт Идеи до Бизнеса\u00bb"}
                    year={<Text>декабрь 2022</Text>}
                    desc={
                        <Text>В составе команды проекта &laquo;Платформа дистанционного образования &quot;UNI&quot;&raquo;</Text>
                    }
                ></BioCard>
            </Box>
        </Box>
    );
};

export default Resume;
