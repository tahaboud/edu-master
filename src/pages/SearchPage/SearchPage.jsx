import {
  Box,
  createStyles,
  Grid,
  Group,
  Paper,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { useState } from "react";
import SearchBox from "./SearchBox";
import TutorCard from "./TutorCard";
import { useMediaQuery } from "@mantine/hooks";
import Filters from "./Filters";
import SortBox from "./SortBox";

const useStyles = createStyles((t) => ({
  wrapper: {
    background: t.colors.gray[0],
  },
  searchBox: {
    background: "white",
    boxShadow: t.shadows.xs,
    borderRadius: t.radius.sm,
  },
}));

export default function SearchPage() {
  const [filteredList, setFilteredList] = useState(TUTORS);

  //filters

  //search name
  function searchName(n) {
    if (n === "" || n === null) return reset();
    setFilteredList((fl) =>
      fl.filter((tut) => tut.name.toLowerCase().search(n.toLowerCase()))
    );
  }

  //location filter
  function filterByLocation(l) {
    if (l === null) return;
    setFilteredList((fl) =>
      fl.filter((tut) => tut.location.toLowerCase() === l.toLowerCase())
    );
  }

  //experience filter
  function filterByExperience(e) {
    if (e === null) return;
    setFilteredList((fl) => fl.filter((tut) => tut.experience >= e));
  }

  //qualification filter
  function filterByQualifications(q) {
    if (q === null) return;
    setFilteredList((fl) => fl.filter((tut) => tut.qualifications.includes(q)));
  }

  //curriculum filter
  function filterByCurriculum(c) {
    if (c === null) return;
    setFilteredList((fl) => fl.filter((tut) => tut.curiculum.includes(c)));
  }

  //subjects filter
  function filterBySubjects(s) {
    if (s === null) return;
    setFilteredList((fl) => fl.filter((tut) => tut.subjects.includes(s)));
  }

  //distance filter
  function filterByDistance(d) {
    if (d === null) return;
    setFilteredList((fl) => fl.filter((tut) => tut.distance <= d));
  }

  //styling
  const { classes } = useStyles();
  const isSmall = useMediaQuery("(max-width: 1000px)");

  //rest to default list
  function reset() {
    setFilteredList(TUTORS);
  }

  const filtersProps = {
    filterByLocation,
    reset,
    filterByExperience,
    filterByQualifications,
    filterByCurriculum,
    filterByDistance,
    filterBySubjects,
  };
  //components

  const FILTER_BAR = !isSmall && (
    <Grid.Col span={1}>
      <Paper pb={"xl"} shadow={"xs"} radius="sm" p={"md"}>
        <Text weight={"bold"}>Filters</Text>
        <Filters {...filtersProps} />
      </Paper>
    </Grid.Col>
  );

  const TUTORS_LIST = (
    <Grid.Col span={isSmall ? 4 : 3}>
      <Stack>
        <Box className={classes.searchBox}>
          <SearchBox searchName={searchName} />
        </Box>

        <Stack>
          {filteredList.map((props, i) => (
            <TutorCard key={i} {...props} />
          ))}
        </Stack>
      </Stack>
    </Grid.Col>
  );

  return (
    <Box className={classes.wrapper} py={"xl"} px={isSmall ? "md" : "xl"}>
      <Box mt={72} mb={48}>
        <Title sx={{ color: "#00663F" }}>
          Online tutors & teachers for private lessons
        </Title>
        <Text color={"dimmed"}>
          Looking for an online tutor? ABc is the leading online language
          learning platform worldwide. You can choose from 110 teachers with an
          average rating of 4.9 out of 5 stars given by 90632 customers
        </Text>
      </Box>
      <Grid columns={4}>
        {FILTER_BAR}
        {TUTORS_LIST}
      </Grid>
    </Box>
  );
}

//fake data
const TUTORS = [
  {
    name: "Anas Deyra",
    picture:
      "https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    location: "TN",
    experience: 5,
    qualifications: ["PhD", "Masters", "Bachelor"],
    distance: 100,
    subjects: ["Maths", "Physics", "Biologie", "Algebra"],
    hourly: 16,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. In suscipit commodi ipsam quam, dolore velit aperiam hic fuga odit? Facere molestias, cumque iusto eligendi consequatur pariatur magni debitis omnis quos. ",
    lessonsCount: 5,
    rating: 4,
    reviewsCount: 12,
    curiculum: ["zzz", "zzz", "zzz"],
    title: "Certified TEFL Tutor",
    job: "English teacher",
  },
  {
    name: "Fayza Duhi",
    picture:
      "https://images.pexels.com/photos/943084/pexels-photo-943084.jpeg?auto=compress&cs=tinysrgb&w=600",
    location: "LB",
    experience: 2,
    qualifications: ["PhD"],
    distance: 1000,
    subjects: ["Arts"],
    hourly: 16,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. In suscipit commodi ipsam quam, dolore velit aperiam hic fuga odit? Facere molestias, cumque iusto eligendi consequatur pariatur magni debitis omnis quos. ",
    lessonsCount: 5,
    rating: 4,
    reviewsCount: 12,
    curiculum: ["zzz", "zzz", "zzz"],
    title: "Certified TEFL Tutor",
    job: "English teacher",
  },
  {
    name: "Lana Rock",
    picture:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
    location: "GB",
    experience: 4,
    qualifications: ["PhD", "Masters", "Bachelor"],
    distance: 650,
    subjects: ["English", "Danish"],
    hourly: 16,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. In suscipit commodi ipsam quam, dolore velit aperiam hic fuga odit? Facere molestias, cumque iusto eligendi consequatur pariatur magni debitis omnis quos. ",
    lessonsCount: 5,
    rating: 4,
    reviewsCount: 12,
    curiculum: ["zzz", "zzz", "zzz"],
    title: "Certified TEFL Tutor",
    job: "English teacher",
  },
  {
    name: "Akram Mag",
    picture: "",
    location: "IN",
    experience: 5,
    qualifications: ["PhD", "Masters", "Bachelor"],
    distance: 100,
    subjects: ["Maths", "Physics", "Biologie", "Algebra"],
    hourly: 16,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. In suscipit commodi ipsam quam, dolore velit aperiam hic fuga odit? Facere molestias, cumque iusto eligendi consequatur pariatur magni debitis omnis quos. ",
    lessonsCount: 5,
    rating: 4,
    reviewsCount: 12,
    curiculum: ["zzz", "zzz", "zzz"],
    title: "Certified TEFL Tutor",
    job: "English teacher",
  },
  {
    name: "Muta Ryuhi",
    picture: "",
    location: "IN",
    experience: 5,
    qualifications: ["PhD", "Masters", "Bachelor"],
    distance: 100,
    subjects: ["Maths", "Physics", "Biologie", "Algebra"],
    hourly: 16,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. In suscipit commodi ipsam quam, dolore velit aperiam hic fuga odit? Facere molestias, cumque iusto eligendi consequatur pariatur magni debitis omnis quos. ",
    lessonsCount: 5,
    rating: 4,
    reviewsCount: 12,
    curiculum: ["zzz", "zzz", "zzz"],
    title: "Certified TEFL Tutor",
    job: "English teacher",
  },
];
