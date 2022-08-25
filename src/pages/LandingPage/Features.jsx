import {
  Stack,
  Text,
  Title,
  Group,
  ThemeIcon,
  SimpleGrid,
  Box,
  Button,
  Overlay,
} from "@mantine/core";
import { FaAward, FaDollarSign, FaHeadset, FaLayerGroup } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@mantine/hooks";

export default function Features() {
  const isSmall = useMediaQuery("(max-width: 1000px)");
  return (
    <Stack
      sx={{ background: "#66FBD1" }}
      spacing={"xl"}
      py={isSmall ? 72 : 144}
    >
      <Stack px={isSmall ? "md" : "xl"} spacing={0}>
        <Text weight={500}>WHY CHOOSE US</Text>
        <Title>Why learn with tutors street.</Title>
      </Stack>
      <SimpleGrid
        px={isSmall ? "md" : "xl"}
        mt={48}
        spacing={isSmall ? 32 : 64}
        cols={isSmall ? 1 : 2}
      >
        {FEATURES.map((f, i) => (
          <Feature {...f} key={i} />
        ))}
      </SimpleGrid>
      <Box
        mt={isSmall ? 72 : 144}
        p={"xl"}
        sx={{
          background: `url(${process.env.PUBLIC_URL}/images/fb.jpg)`,
          backgroundPosition: `0 ${isSmall ? "0" : "-200px"}`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          display: "flex",
          height: isSmall ? "200px" : "500px",

          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Overlay opacity={0} zIndex={0} blur={3} />
        <Button
          to={"/signup"}
          component={Link}
          radius={"sm"}
          color="indigo"
          sx={{
            background: "#000",
            zIndex: "1",
            "&:hover": {
              background: "#000",
            },
            color: "white",
          }}
          size={isSmall ? "lg" : "xl"}
          m={0}
        >
          Hire a tutor
        </Button>
      </Box>
    </Stack>
  );
}

function Feature({ Icon, title, text }) {
  const isSmall = useMediaQuery("(max-width: 1000px)");
  return (
    <Group align={"start"} noWrap>
      <ThemeIcon
        sx={{ color: "#66FBD1" }}
        color={"#000"}
        radius={"50%"}
        size={isSmall ? 48 : 64}
      >
        <Icon size={isSmall ? 24 : 32} />
      </ThemeIcon>
      <Stack spacing={0}>
        <Text size={isSmall ? 22 : 26} weight={500}>
          {title}
        </Text>
        <Text>{text}</Text>
      </Stack>
    </Group>
  );
}

const FEATURES = [
  {
    title: "Certified tutors",
    text: "Sed ut perspiciateis unde omnis iste natus error sit",
    Icon: FaAward,
  },
  {
    title: "Affordable price",
    text: "Sed ut perspiciateis unde omnis iste natus error sit",
    Icon: FaDollarSign,
  },
  {
    title: "Personalized Learning",
    text: "Sed ut perspiciateis unde omnis iste natus error sit",
    Icon: FaLayerGroup,
  },
  {
    title: "Personalized Support",
    text: "Sed ut perspiciateis unde omnis iste natus error sit",
    Icon: FaHeadset,
  },
];
