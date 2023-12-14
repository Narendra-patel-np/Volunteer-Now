import React from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import img1 from "./images/child-volunteer-landscaping.webp";
const TopSection = () => {
  const fontStyle = {
    "font-family": "Cursive",
  };
  return (
    <Box
      w={"80%"}
      m={"auto"}
      mt={"80px"}
      h={"450px"}
      borderRadius={"20"}
      border={"2 px solid red"}
      backgroundSize="cover"
      backgroundImage={`url(${img1})`}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
    >
      <Text fontSize="50px" color="white" style={fontStyle}>
        Remarkable Outcomes
      </Text>
      <Text w={"90%"} m={"0px"} fontSize="25px" color="white">
        Volunteer-Now is the largest network in the nonprofit world, with the
        most volunteers, nonprofits and opportunities to make a difference.
      </Text>
      <Button
        p={"20"}
        mt={"90px"}
        border={"none"}
        bg={"tomato"}
        borderRadius={"15"}
        fontSize={"22px"}
        color={"white"}
        size="lg"
      >
        Find Oportunities
      </Button>
    </Box>
  );
};

export default TopSection;
