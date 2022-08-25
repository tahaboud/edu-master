import { Accordion, Box, SimpleGrid, Text, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

export default function QnA() {
  const isSmall = useMediaQuery("(max-width: 1000px)");
  return (
    <SimpleGrid mb={isSmall ? 48 : 144} cols={isSmall ? 1 : 2}>
      <Box
        pr={isSmall ? "md" : 0}
        pl={isSmall ? "md" : "xl"}
        mb={isSmall ? 72 : 144}
        mt={isSmall ? 48 : 72}
      >
        <Text weight={500}>FREQUENTLY ASKED QUESTIONS</Text>
        <Title>Useful information</Title>

        <Accordion mt="xl">
          {QNA.map(({ panel, control }, i) => (
            <Accordion.Item key={i} value={control}>
              <Accordion.Control>{control}</Accordion.Control>
              <Accordion.Panel>{panel}</Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </Box>
      <Box
        sx={
          isSmall
            ? { display: "none" }
            : {
                background: `url(${process.env.PUBLIC_URL}/images/q.jpg)`,
                backgroundPosition: "0 -250px",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }
        }
      ></Box>
    </SimpleGrid>
  );
}

const QNA = [
  {
    panel:
      "sed ut perspiciatis unde omnis iste natus error sit voluptatemaccusantium doloremque laudantium,totam aperiam,eaque ipsaquae ab illoinventatis et quasi architecto beatae vitae dicta sunt expilicabo nemo enim ipsam.",
    control: "How to find tutoring at tutors street?",
  },
  {
    panel:
      "sed ut perspiciatis unde omnis iste natus error sit voluptatemaccusantium doloremque laudantium,totam aperiam,eaque ipsaquae ab illoinventatis et quasi architecto beatae vitae dicta sunt expilicabo nemo enim ipsam.",
    control: "Tracking student progress",
  },
  {
    panel:
      "sed ut perspiciatis unde omnis iste natus error sit voluptatemaccusantium doloremque laudantium,totam aperiam,eaque ipsaquae ab illoinventatis et quasi architecto beatae vitae dicta sunt expilicabo nemo enim ipsam.",
    control: "How much do lessons cost?",
  },
  {
    panel:
      "sed ut perspiciatis unde omnis iste natus error sit voluptatemaccusantium doloremque laudantium,totam aperiam,eaque ipsaquae ab illoinventatis et quasi architecto beatae vitae dicta sunt expilicabo nemo enim ipsam.",
    control: "What payment methods are accepted ?",
  },
];
