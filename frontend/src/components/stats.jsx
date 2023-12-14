import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import CountUp from "react-countup";

const Stats = () => {
  const statData = [
    {
      id: 1,
      label: "Monthly visitors",
      score: 3,
      start: "",
      end: "M",
    },
    {
      id: 2,
      label: "Volunteers Connected",
      score: 18.4,
      start: "",
      end: "M",
    },
    {
      id: 3,
      label: "Non-profit",
      score: 146.1,
      start: "",
      end: "K",
    },
    {
      id: 4,
      label: "Volunteers needed",
      score: 10.7,
      start: "",
      end: "M",
    },
  ];
  return (
    <SimpleGrid columns={{ base: 2, sm: 4, md: 4 }} spacing={1} mt={12} mb={4}>
      {statData.map((data) => (
        <Box key={data.id} p={{ base: 2, sm: 5 }} textAlign="center">
          <span style={{ color: "#ffb128", fontWeight: "bold", fontSize: 48 }}>
            {data.start}
          </span>
          <CountUp
            style={{ color: "#ffb128", fontWeight: "bold", fontSize: 48 }}
            end={data.score}
            enableScrollSpy
          ></CountUp>
          <span style={{ color: "#ffb128", fontWeight: "bold", fontSize: 48 }}>
            {data.end}
          </span>
          <Text fontSize="18">{data.label}</Text>
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default Stats;
