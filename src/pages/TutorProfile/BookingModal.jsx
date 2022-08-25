import { Button, Modal, Stack } from "@mantine/core";
import { DatePicker, TimeRangeInput } from "@mantine/dates";
import dayjs from "dayjs";
import { useState } from "react";

export default function BookingModal({ close, opened }) {
  const now = dayjs(new Date()).add(30, "minutes").toDate();
  const then = dayjs(now).add(60, "minutes").toDate();
  const [value, setValue] = useState([now, then]);
  return (
    <Modal title="Book a lesson" onClose={close} opened={opened}>
      <form>
        <Stack>
          <DatePicker
            required
            label="Choose lesson's day"
            placeholder="Pick a date"
          />
          <TimeRangeInput
            label="Choose lesson's time"
            placeholder="Choose lesson's time"
            value={value}
            onChange={setValue}
            required
          />
          <Button sx={{ background: "#3347B0" }}>Confirm</Button>
        </Stack>
      </form>
    </Modal>
  );
}
