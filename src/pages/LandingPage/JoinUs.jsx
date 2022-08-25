import { Box, Text, Title, Stack, Overlay, Button } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

import { Link } from "react-router-dom";

export default function JoinUs() {
  const isSmall = useMediaQuery("(max-width: 1000px)");
  return (
    <Box my={isSmall ? 72 : 144}>
      <Stack px={isSmall ? "md" : "xl"} spacing={0}>
        <Text weight={500}>JOIN US</Text>
        <Title>Become a tutor at tutors street</Title>
      </Stack>
      <Box
        mt={isSmall ? 48 : 72}
        p={isSmall ? "md" : "xl"}
        sx={{
          background: `url(${process.env.PUBLIC_URL}/images/jb.jpg)`,
          backgroundPosition: `0 ${isSmall ? "0" : "-100px"}`,
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
          to={"/tutor-signup"}
          component={Link}
          radius={"sm"}
          sx={{
            background: "#3347B0",
            zIndex: "1",
            "&:hover": {
              background: "#4357C0",
            },
          }}
          size={isSmall ? "lg" : "xl"}
          m={0}
        >
          Get started
        </Button>
      </Box>
    </Box>
  );
}
