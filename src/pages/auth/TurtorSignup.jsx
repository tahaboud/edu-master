import {
  TextInput,
  PasswordInput,
  Paper,
  Title,
  Container,
  Group,
  Button,
  Stepper,
  Select,
  Textarea,
  MultiSelect,
  Input,
  useMantineTheme,
  Text,
  Slider,
} from "@mantine/core";
import { Dropzone } from "@mantine/dropzone";
import { useState } from "react";
import {
  FaUpload as IconUpload,
  FaFileImage as IconPhoto,
  FaBan as FaStopCircle,
} from "react-icons/fa";

export default function TutorSignup() {
  const [active, setActive] = useState(0);
  const nextStep = () =>
    setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  const [value, setValue] = useState(5);
  return (
    <>
      <Container size={"sm"} my={72}>
        <Title align="center" weigth="700">
          Become a tutor
        </Title>
        <Stepper
          mt={48}
          styles={{
            stepIcon: {
              borderColor: "#3347B0",
              "&[data-completed]": {
                background: "#3347B0",
                borderColor: "#3347B0",
              },
              "&[data-progress]": {
                borderColor: "#3347B0",
              },
            },
            separatorActive: { background: "#3347B0" },
          }}
          active={active}
          onStepClick={setActive}
          breakpoint="xs"
        >
          <Stepper.Step label="First step" description="Create an account">
            <Paper withBorder shadow="md" p={30} mt={30} radius="md">
              <Text mb={48} mt={"xl"} align="center" weight={"600"} size="26px">
                Create an account
              </Text>
              <Group mt="md" grow>
                <TextInput
                  type={"text"}
                  label="First name"
                  placeholder="Jhon"
                  required
                />
                <TextInput
                  type={"text"}
                  label="Last name"
                  placeholder="Doe"
                  required
                />
              </Group>
              <Select
                mt="md"
                color="indigo"
                styles={{
                  item: { "&[data-selected]": { background: "#3347B0" } },
                }}
                placeholder="Select your gender"
                label="Gender"
                required
                data={["Male", "Female"]}
              ></Select>
              <TextInput
                mt="md"
                type={"email"}
                label="Email"
                placeholder="you@example.com"
                required
              />
              <PasswordInput
                label="Password"
                placeholder="Your password"
                required
                mt="md"
              />
              <PasswordInput
                label="Password Confirmations"
                placeholder="Your password confirmation"
                required
                mt="md"
              />
              <Group position="center" mt="xl">
                <Button variant="default" onClick={prevStep}>
                  Back
                </Button>
                <Button
                  sx={{ background: "#3347B0" }}
                  color={"indigo"}
                  onClick={nextStep}
                >
                  Next step
                </Button>
              </Group>
            </Paper>
          </Stepper.Step>
          <Stepper.Step label="Second step" description="Fill in information">
            <Paper withBorder shadow="md" p={30} mt={30} radius="md">
              <Text mb={48} mt={"xl"} align="center" weight={"600"} size="26px">
                Fill in information
              </Text>
              <Textarea
                mt="md"
                label="Profile description"
                placeholder="Write something about you"
                required
                minRows={4}
              />
              <MultiSelect
                required
                label={"Subjects"}
                data={["Math", "Physics", "Biologie"]}
                searchable
                mt={"md"}
                placeholder="Subjects"
              />
              <MultiSelect
                required
                label={"Curriculum"}
                data={["Math", "Physics", "Biologie"]}
                searchable
                mt={"md"}
                placeholder="Curriculum"
              />
              <MultiSelect
                mt="md"
                type={"text"}
                label="Education qualification"
                placeholder="PhD, Bachelor..."
                required
                data={["Phd", "Bachelor", "Major"]}
                searchable
              />
              <Input.Wrapper mt={"md"} required label="Years of Experience">
                <Slider
                  max={40}
                  min={0}
                  required
                  mt={"md"}
                  placeholder="Experience"
                  value={value}
                  onChange={setValue}
                  marks={[
                    { value: 20, label: "20" },
                    { value: 40, label: "40" },
                    { value: 30, label: "30" },
                    { value: 10, label: "10" },
                    { value: 0, label: "0" },
                  ]}
                  styles={{
                    bar: { background: "#3347B0" },
                    thumb: { borderColor: "#3347B0" },
                    markFilled: { borderColor: "#3347B0" },
                  }}
                />
              </Input.Wrapper>
              <Select
                required
                label={"Location"}
                data={["Math", "Physics", "Biologie"]}
                searchable
                mt={"md"}
                placeholder="Location"
                rightSection={<></>}
                styles={{ rightSection: { pointerEvents: "none" } }}
              />
              <Group position="center" mt="xl">
                <Button variant="default" onClick={prevStep}>
                  Back
                </Button>
                <Button
                  sx={{ background: "#3347B0" }}
                  color={"indigo"}
                  onClick={nextStep}
                >
                  Next step
                </Button>
              </Group>
            </Paper>
          </Stepper.Step>
          <Stepper.Step label="Third step" description="Add files">
            <Paper withBorder shadow="md" p={30} mt={30} radius="md">
              <Text mb={48} mt={"xl"} align="center" weight={"600"} size="26px">
                Add files
              </Text>
              <Input.Wrapper required label="Profile picture" mt={"md"}>
                <InputImage />
              </Input.Wrapper>
              <Input.Wrapper required label="Certificate document" mt={"md"}>
                <InputImage />
              </Input.Wrapper>
              <Group position="center" mt="xl">
                <Button variant="default" onClick={prevStep}>
                  Back
                </Button>
                <Button
                  sx={{ background: "#3347B0" }}
                  color={"indigo"}
                  onClick={nextStep}
                >
                  Next step
                </Button>
              </Group>
            </Paper>
          </Stepper.Step>
        </Stepper>
      </Container>
    </>
  );
}

function InputImage(props) {
  const theme = useMantineTheme();
  return (
    <Dropzone
      onDrop={(files) => console.log("accepted files", files)}
      onReject={(files) => console.log("rejected files", files)}
      maxSize={2 * 1024 ** 2}
      accept={{ "image/*": [] }}
      {...props}
    >
      <Group
        position="center"
        spacing="xl"
        style={{ minHeight: 100, pointerEvents: "none" }}
      >
        <Dropzone.Accept>
          <IconUpload
            size={50}
            stroke={1.5}
            color={
              theme.colors[theme.primaryColor][
                theme.colorScheme === "dark" ? 4 : 6
              ]
            }
          />
        </Dropzone.Accept>
        <Dropzone.Reject>
          <FaStopCircle
            size={50}
            stroke={1.5}
            color={theme.colors.red[theme.colorScheme === "dark" ? 4 : 6]}
          />
        </Dropzone.Reject>
        <Dropzone.Idle>
          <IconPhoto color="#86909D" size={50} stroke={1.5} />
        </Dropzone.Idle>

        <div>
          <Text size="xl" inline>
            Drag images here or click to select files
          </Text>
          <Text size="sm" color="dimmed" inline mt={7}>
            Attach as many files as you like, each file should not exceed 2mb
          </Text>
        </div>
      </Group>
    </Dropzone>
  );
}
