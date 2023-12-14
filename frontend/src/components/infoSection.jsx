import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import img from "./images/Screenshot 2023-12-14 165412.png";

const InfoSection = () => {
  return (
    <Box w={"80%"} display={"flex"} m={"auto"} mt="100px">
      <Box w={"50%"}>
        <Image w={"100%"} src={img}></Image>
      </Box>
      <Box w={"50%"}>
        <Text>More people. More impact.</Text>
        <Text>
          Volunteer-Now is the most effective way to recruit highly qualified
          volunteers for your nonprofit. We match you with people who are
          passionate about and committed to your cause, and who can help when
          and where you need them. And because volunteers are often donors as
          well, we make it easy for them to contribute their time and money.
        </Text>
      </Box>
    </Box>
  );
};

export default InfoSection;
