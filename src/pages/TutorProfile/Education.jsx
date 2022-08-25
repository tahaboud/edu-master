import { Title, Paper, Text, Group, Stack, Box } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { MdVerified } from "react-icons/md";

export default function Education({ education = EDUCATION }) {
  return (
    <Paper mt={"xl"} p={"md"}>
      <Title sx={{ fontWeight: 700, fontSize: 24 }}>Education</Title>
      <Stack spacing={48} mt={64}>
        {education.map((e, i) => (
          <EducationCard {...e} key={i} />
        ))}
      </Stack>
    </Paper>
  );
}

function EducationCard({ year, isVerified, location, field }) {
  const isSmall = useMediaQuery("(max-width: 1000px)");
  return (
    <Group spacing={isSmall ? 18 : 64} align={"start"}>
      <Text weight={600} color={"#666"}>
        {year}
      </Text>
      <Box>
        <Text weight={600}>{location}</Text>
        <Text mt={4}>{field}</Text>
        {isVerified ? (
          <Group mt={"md"} spacing={4}>
            <MdVerified size={22} color={"#00B628"} />
            <Text size={"sm"} weight={"700"} color={"#00B628"}>
              Diploma verified
            </Text>
          </Group>
        ) : (
          <Group mt={"md"} spacing={4}>
            <MdVerified size={22} color={"#666"} />
            <Text size={"sm"} weight={"700"} color={"#666"}>
              Diploma not verified
            </Text>
          </Group>
        )}
      </Box>
    </Group>
  );
}

const EDUCATION = [
  {
    year: "2018 - 2019",
    location: "Cape Peninsula University of Technology",
    field: "Business Management",
    isVerified: true,
  },
  {
    year: "2018 - 2019",
    location: "Cape Peninsula University of Technology",
    field: "Business Management",
    isVerified: false,
  },
];
