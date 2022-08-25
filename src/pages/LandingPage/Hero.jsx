import { Text, Stack, Title, Overlay, createStyles, Box } from "@mantine/core";
import { useElementSize, useMediaQuery } from "@mantine/hooks";
import SearchBox from "./SearchBox";

const useStyles = createStyles((t) => ({
  container: {
    padding: `${144}px ${t.spacing.xl}px ${72}px ${t.spacing.xl}px`,
    [t.fn.smallerThan("sm")]: {
      padding: `${72}px ${t.spacing.sm}px`,
    },
    background: `url(${process.env.PUBLIC_URL}/images/tb.jpg)`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    [t.fn.smallerThan("md")]: {
      backgroundPositionX: "-800px",
    },
  },
}));

export default function Hero() {
  const { ref, width } = useElementSize();
  const { classes } = useStyles();
  const isSmall = useMediaQuery("(max-width: 1000px)");
  return (
    <Stack className={classes.container}>
      <Overlay
        zIndex={0}
        opacity="0.5"
        gradient="linear-gradient(0deg, rgba(0,0,0,1) 0%,  rgba(255,255,255,0) 35%);"
      />
      <Title
        ref={ref}
        sx={{
          fontSize: isSmall ? 48 : 72,
          maxWidth: 750,
          fontWeight: "900",
          zIndex: 1,
        }}
        order={1}
      >
        Hire the best tutors for you
      </Title>
      <Text
        sx={{ width: width, zIndex: 1 }}
        weight={500}
        size={isSmall ? "md" : "xl"}
      >
        Part of you personal and professional growth by providing a fun and
        effective way to learn.{" "}
      </Text>

      <SearchBox />
      <Box
        px={isSmall ? 0 : 72}
        sx={{
          color: "white",
          zIndex: 1,
          display: "flex",
          flexFlow: isSmall ? "column" : "row",
          justifyContent: isSmall ? "center" : "space-between",
          alignItems: "center",
          gap: isSmall ? 36 : 0,
        }}
        mt={isSmall ? 72 : 144}
      >
        <Stack sx={{ textAlign: "center" }} spacing={0}>
          <Text weight={800} size={isSmall ? 28 : 32}>
            12 Years
          </Text>
          <Text weight={600} size={isSmall ? "md" : "xl"}>
            of proven results
          </Text>
        </Stack>
        <Stack sx={{ textAlign: "center" }} spacing={0}>
          <Text weight={800} size={isSmall ? 28 : 32}>
            50+ Top
          </Text>
          <Text weight={600} size={isSmall ? "md" : "xl"}>
            Handpicked Tutors
          </Text>
        </Stack>
        <Stack sx={{ textAlign: "center" }} spacing={0}>
          <Text weight={800} size={isSmall ? 28 : 32}>
            3500+ Students
          </Text>
          <Text weight={600} size={isSmall ? "md" : "xl"}>
            Tutored since 2022
          </Text>
        </Stack>
      </Box>
    </Stack>
  );
}
