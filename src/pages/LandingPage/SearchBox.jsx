import {
  Autocomplete,
  Group,
  Divider,
  Select,
  Button,
  Text,
  createStyles,
  Box,
} from "@mantine/core";
import { forwardRef } from "react";
import {
  FaBook,
  FaMapMarkerAlt,
  FaLocationArrow as FaRadiation,
  FaVideo as FaCamera,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@mantine/hooks";

const useStyles = createStyles((t) => ({
  wrapper: {
    display: "flex",
    background: "white",
    alignSelf: "start",
    borderRadius: "5px",
    zIndex: 1,
    flexFlow: "row",
    [t.fn.smallerThan("md")]: {
      flexFlow: "column",
      gap: t.spacing.md,
    },
    alignItems: "stretch",
  },
  iputWrapper: {
    display: "flex",
    alignItems: "center",
  },
}));

export default function SearchBox() {
  const isSmall = useMediaQuery("(max-width: 1000px)");
  const { classes } = useStyles();
  return (
    <Box p={"xs"} className={classes.wrapper} mt={48}>
      <Box className={classes.iputWrapper}>
        <Autocomplete
          p={0}
          variant="unstyled"
          radius={0}
          icon={<FaBook size={isSmall ? 16 : 24} />}
          placeholder="Subject"
          dropdownPosition="bottom"
          data={["Maths", "Physics", "Biologie", "Chimestry", "Art"]}
          size={isSmall ? "xs" : "md"}
        />
        <Divider orientation="vertical" />
        <Select
          styles={{
            item: {
              "&[data-selected]": {
                "&, &:hover": {
                  background: "white",
                  color: "#222",
                },
              },
            },
          }}
          p={0}
          variant="unstyled"
          radius={0}
          icon={<FaMapMarkerAlt size={isSmall ? 16 : 24} />}
          placeholder="Cours location"
          dropdownPosition="bottom"
          itemComponent={ItemComponent}
          data={[
            { value: 1, label: "Online", Icon: FaCamera },
            { value: 2, label: "Near me", Icon: FaRadiation },
          ]}
          size={isSmall ? "xs" : "md"}
        />
      </Box>
      <Button
        to={"/search"}
        component={Link}
        radius={"sm"}
        color="indigo"
        sx={{ background: "#3347B0" }}
        size={isSmall ? "sm" : "xl"}
      >
        Find tutor
      </Button>
    </Box>
  );
}

const ItemComponent = forwardRef(({ Icon, label, ...other }, ref) => {
  const isSmall = useMediaQuery("(max-width: 1000px)");
  return (
    <Group {...other} noWrap ref={ref}>
      <Icon color={"#222"} size={isSmall ? 16 : 24} />
      <Text>{label}</Text>
    </Group>
  );
});
