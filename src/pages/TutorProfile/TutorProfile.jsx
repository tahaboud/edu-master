import {
  Avatar,
  Badge,
  Box,
  Button,
  createStyles,
  Group,
  Stack,
  Text,
  Tabs,
  Title,
  Anchor,
  Paper,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { FaHeart, FaEnvelope } from "react-icons/fa";
import BookingModal from "./BookingModal";
import { useMediaQuery } from "@mantine/hooks";
import UsersReviews from "./UsersReviews";
import { useState } from "react";
import { FaGraduationCap } from "react-icons/fa";
import { IoLanguage as FaLanguage } from "react-icons/io5";
import { MdVerified } from "react-icons/md";
import { Link } from "react-router-dom";
import About from "./About";
import Subjects from "./Subjects";
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import MessageModal from "./MessageModal";

const useStyles = createStyles((t) => ({
  wrapper: {
    marginBottom: 144,
    [t.fn.smallerThan("md")]: {
      marginBottom: 72,
    },
  },
  infoGroup: {
    color: t.colors.gray[6],
  },
  reviews: {
    background: "#3347B0",
  },
}));

export default function TutorProfile({
  name = "Lana Rock",
  job = "English teacher",
  hourly = 20,
  title = "Certified TEFL Tutor",
  subjects = ["English", "Danish"],
  description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. In suscipit commodi ipsam quam, dolore velit aperiam hic fuga odit? Facere molestias, cumque iusto eligendi consequatur pariatur magni debitis omnis quos.",
  picture = "https://images.pexels.com/photos/943084/pexels-photo-943084.jpeg?auto=compress&cs=tinysrgb&w=600",
}) {
  const { classes } = useStyles();
  const [opened, { close, open }] = useDisclosure();
  const isSmall = useMediaQuery("(max-width: 1000px)");
  const [spoiler, setSpoiler] = useState(true);
  const [messageOpened, messageModalHandlers] = useDisclosure();

  return (
    <Box mt="72px">
      <MessageModal close={messageModalHandlers.close} opened={messageOpened} />
      <Group
        mx={isSmall ? "md" : "72px"}
        noWrap
        align={"start"}
        position="apart"
      >
        <Group noWrap align={"start"}>
          <Avatar radius={"sm"} size={isSmall ? "xl" : "170px"} src={picture} />

          <Stack spacing={0}>
            <Group
              align={"center"}
              position={isSmall && "apart"}
              mb={"xs"}
              spacing={"sm"}
            >
              <Text
                to={`/tutor/${name}`}
                component={Link}
                size={isSmall ? "lg" : "xl"}
                weight={"bold"}
              >
                {name}
              </Text>

              <Group spacing={4}>
                <MdVerified size={22} color={"#00B628"} />
                <Text size={"sm"} weight={"700"} color={"#00B628"}>
                  Verified
                </Text>
              </Group>
            </Group>
            <Group mb={"xs"}>
              {subjects.map((s) => (
                <Badge
                  key={s}
                  sx={{ color: "#3347B0" }}
                  size="xs"
                  color={"indigo"}
                >
                  {s}
                </Badge>
              ))}
            </Group>
            <Box component="span" sx={{ maxWidth: 600 }}>
              <Text
                sx={
                  spoiler
                    ? {
                        height: "40px",
                        overflow: "hidden",
                      }
                    : { height: "auto" }
                }
                size={"xs"}
                weight={"bold"}
              >
                {title} -{" "}
                <Text weight={"500"} component="span" mt={"xs"} size={"xs"}>
                  {description}
                </Text>
              </Text>
              <Anchor
                weight={"bold"}
                size={"xs"}
                component={Text}
                color="indigo"
                onClick={() => {
                  spoiler ? setSpoiler(false) : setSpoiler(true);
                }}
              >
                {spoiler ? "Read more" : "Hide"}
              </Anchor>
            </Box>
            <Group mt={"xs"} className={classes.infoGroup} spacing={"4px"}>
              <FaGraduationCap />
              <Text size={"xs"}>{job}</Text>
            </Group>

            <Group className={classes.infoGroup} spacing={"4px"}>
              <FaLanguage />
              <Text size={"xs"}> Speaks english (andvanced)</Text>
            </Group>
          </Stack>
        </Group>
        <Stack sx={{ width: "250px" }} spacing={"xs"}>
          <Stack spacing={0} align="end">
            <Text color={"#666"} weight={"600"} size={"28px"}>
              ${hourly}
            </Text>
            <Text size={"xs"} color="dimmed">
              Per hour
            </Text>
          </Stack>
          <Button size="md" onClick={open} sx={{ background: "#3347B0" }}>
            Book trial lesson
          </Button>
          <Button
            leftIcon={<FaEnvelope />}
            size="md"
            color={"indigo"}
            variant="light"
            onClick={() => {
              messageModalHandlers.open();
            }}
          >
            Message
          </Button>
          <Button
            leftIcon={<FaHeart />}
            size="md"
            color={"indigo"}
            variant="light"
          >
            Add to my list
          </Button>
        </Stack>
      </Group>

      <Tabs
        styles={{
          tabsList: { border: "none", margin: isSmall ? "48px 12px" : "72px" },
          panel: {
            background: "#f3f3f3",
            padding: `48px ${isSmall ? "12px" : "72px"}`,
          },
          tab: {
            fontWeight: "bold",
            color: "#666",
            "&:hover": { background: "none", border: "none" },
            "&[data-active]": {
              borderColor: "#3347B0",
              color: "#666",
              "&:hover": {
                background: "none",

                borderBottom: "2px solid #3347B0",
              },
            },
          },
        }}
        mt={72}
        defaultValue="about"
      >
        <Tabs.List>
          <Tabs.Tab value="about">About</Tabs.Tab>
          <Tabs.Tab value="education">Education</Tabs.Tab>
          <Tabs.Tab value="work experience">Work experience</Tabs.Tab>
          <Tabs.Tab value="subjects">Subjects</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="about" pt="xs">
          <About body={description} />
        </Tabs.Panel>

        <Tabs.Panel value="education" pt="xs">
          <Education />
        </Tabs.Panel>

        <Tabs.Panel value="work experience" pt="xs">
          <WorkExperience />
        </Tabs.Panel>
        <Tabs.Panel value="subjects" pt="xs">
          <Subjects />
        </Tabs.Panel>
      </Tabs>
    </Box>
  );
}
