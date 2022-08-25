import {
  Avatar,
  Group,
  Paper,
  Stack,
  Text,
  createStyles,
  Badge,
  Button,
  Box,
  Anchor,
  Image,
} from "@mantine/core";

import { FaBusinessTime, FaGraduationCap } from "react-icons/fa";
import { IoLanguage as FaLanguage } from "react-icons/io5";
import { MdVerified } from "react-icons/md";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import BookingModal from "../TutorProfile/BookingModal";
import { Link } from "react-router-dom";
import { useState } from "react";

const useStyles = createStyles((t) => ({
  infoGroup: {
    color: t.colors.gray[6],
  },
  atSmall: {
    [t.fn.largerThan("md")]: {
      display: "none",
    },
  },
  atBig: {
    [t.fn.smallerThan("md")]: {
      display: "none",
    },
  },
}));

export default function TutorCard({
  name,
  picture,
  location,
  subjects = [],
  experience,
  lessonsCount,
  description,
  rating,
  reviewsCount,
  hourly,
  job,
  title,
}) {
  const { classes } = useStyles();
  const [opened, { close, open }] = useDisclosure();
  const [spoiler, setSpoiler] = useState(true);
  const isSmall = useMediaQuery("(max-width: 1000px)");
  return isSmall ? (
    <Paper shadow={"xs"} radius="sm" p={"md"}>
      <BookingModal close={close} opened={opened} />
      <Stack>
        <Group align={"start"} noWrap>
          <Avatar radius={"sm"} size={isSmall ? "xl" : "144px"} src={picture} />
          <Stack spacing={0}>
            <Group align={"center"} mb={"xs"} spacing={"xl"}>
              <Text
                to={`/tutor/${name}`}
                component={Link}
                size={"xl"}
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
          </Stack>
        </Group>

        <Stack spacing={0}>
          <Box component="span">
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
          <Stack mt={"xl"} className={classes.atSmall} spacing={"xs"}>
            <Button onClick={open} sx={{ background: "#3347B0" }}>
              Book trial lesson
            </Button>
            <Button color={"indigo"} variant="light">
              Message
            </Button>
          </Stack>
        </Stack>
      </Stack>
      <Stack className={classes.atBig} spacing={"xs"}>
        <Stack spacing={0} align="end">
          <Text color={"#666"} weight={"600"} size={"xl"}>
            ${hourly}
          </Text>
          <Text size={"xs"} color="dimmed">
            Per hour
          </Text>
        </Stack>
        <Button onClick={open} sx={{ background: "#3347B0" }}>
          Book trial lesson
        </Button>
        <Button color={"indigo"} variant="light">
          Message
        </Button>
      </Stack>
    </Paper>
  ) : (
    <Paper shadow={"xs"} radius="sm" p={"md"}>
      <BookingModal close={close} opened={opened} />
      <Group noWrap align={"start"} position="apart">
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
            <Stack mt={"xl"} className={classes.atSmall} spacing={"xs"}>
              <Button onClick={open} sx={{ background: "#3347B0" }}>
                Book trial lesson
              </Button>
              <Button color={"indigo"} variant="light">
                Message
              </Button>
            </Stack>
          </Stack>
        </Group>
        <Stack className={classes.atBig} spacing={"xs"}>
          <Stack spacing={0} align="end">
            <Text color={"#666"} weight={"600"} size={"xl"}>
              ${hourly}
            </Text>
            <Text size={"xs"} color="dimmed">
              Per hour
            </Text>
          </Stack>
          <Button size="md" onClick={open} sx={{ background: "#3347B0" }}>
            Book trial lesson
          </Button>
          <Button size="md" color={"indigo"} variant="light">
            Message
          </Button>
        </Stack>
      </Group>
    </Paper>
  );
}
