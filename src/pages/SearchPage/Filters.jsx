import {
  Button,
  Input,
  NumberInput,
  Select,
  Slider,
  Stack,
} from "@mantine/core";
import React, { useState } from "react";

export default function Filters({
  filterByLocation,
  reset,
  filterByExperience,
  filterByQualifications,
  filterByCurriculum,
  filterByDistance,
  filterBySubjects,
}) {
  //filters
  const [location, setLocation] = useState(null);
  const [experience, setExperience] = useState(null);
  const [qualifications, setQualifications] = useState(null);
  const [curriculum, setCurriculum] = useState(null);
  const [distance, setDistance] = useState(null);
  const [subjects, setSubjects] = useState(null);

  //reset
  function resetFillters() {
    setLocation(null);
    setExperience(null);
    setQualifications(null);
    setDistance(null);
    setSubjects(null);
    setCurriculum(null);
    reset();
  }

  //submit
  function submitFilters() {
    filterByLocation(location);
    filterByExperience(experience);
    filterByQualifications(qualifications);
    filterByCurriculum(curriculum);
    filterByDistance(distance);
    filterBySubjects(subjects);
  }

  return (
    <Stack mt={"xl"}>
      <Select
        searchable
        label="Subjects"
        placeholder="Maths, Physics, Biologie.."
        data={[
          "Maths",
          "Physics",
          "Biologie",
          "Algebra",
          "Arts",
          "English",
          "Danish",
        ]}
        onChange={setSubjects}
        value={subjects}
      />
      <Select
        mt={"xl"}
        label="Location"
        placeholder="Choose a location"
        data={["tunisia", "India", "Poland", "Serbia"]}
        searchable
        onChange={setLocation}
        value={location}
      />
      <Input.Wrapper label="Max radius">
        <Slider
          value={distance}
          onChange={setDistance}
          defaultValue={0}
          max={5000}
        />
      </Input.Wrapper>

      <Select
        value={qualifications}
        searchable
        mt={"xl"}
        label="Qualifications"
        placeholder="PhD, Master, Bachelor.."
        data={["PhD", "Master", "Bachelor"]}
        onChange={setQualifications}
      />
      <Select
        searchable
        label="Curriculum"
        placeholder="Choose a curriculum"
        data={["PhD", "Master", "Bachelor"]}
        onChange={setCurriculum}
        value={curriculum}
      />
      <NumberInput
        label="Minimum years of experiece"
        placeholder="Choose minimum years of experiece"
        hideControls
        onChange={setExperience}
        value={experience}
      />
      <Button
        onClick={() => {
          submitFilters();
        }}
        mt={"xl"}
        color={"indigo"}
        sx={{ background: "#3347B0" }}
      >
        Filter
      </Button>
      <Button onClick={resetFillters} variant="default">
        Reset
      </Button>
    </Stack>
  );
}
