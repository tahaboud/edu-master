import { Paper, Text, Title } from "@mantine/core";

export default function About({ body }) {
  return (
    <Paper mt={"xl"} p={"md"}>
      <Title sx={{ fontWeight: 700, fontSize: 24 }}>About</Title>
      <Text weight={600} mt={"xl"} color={"#666"}>
        {body}
      </Text>
    </Paper>
  );
}
