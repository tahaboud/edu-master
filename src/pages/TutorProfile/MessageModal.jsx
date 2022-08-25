import { Button, Modal, Stack, Text, Textarea, TextInput } from "@mantine/core";

export default function MessageModal({ close, opened }) {
  return (
    <Modal
      title={<Text weight={700}>Get in touch</Text>}
      opened={opened}
      onClose={close}
    >
      <Stack>
        <TextInput label="Title" placeholder="Teach me " />
        <TextInput label="your email" placeholder="you@example.com" />
        <Textarea
          minRows={3}
          label="Message"
          placeholder="Write your message"
        />
        <Button sx={{ background: "#3347B0" }}>Send</Button>
      </Stack>
    </Modal>
  );
}
