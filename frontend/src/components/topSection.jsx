import React from "react";
import { Box, Button, Spacer, Text } from "@chakra-ui/react";
import img1 from "./images/child-volunteer-landscaping.webp";
const TopSection = () => {
  const fontStyle = {
    "font-family": "Cursive",
  };
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      flexDirection={"column"}
      justifyContent={"space-around"}
      w={"80%"}
      m={"auto"}
      mt={"80px"}
      h={"450px"}
      borderRadius={"20"}
      border={"2 px solid red"}
      backgroundSize="cover"
      backgroundImage={`url(${img1})`}
    >
      <Spacer />
      <Spacer />

      <Text
        // mt={"10"}
        fontSize={"4xl"}
        color="white"
        // style={fontStyle}
        // alignItems={"center"}
      >
        Remarkable Outcomes
      </Text>
      <Text
        w={"90%"}
        m={"0px"}
        fontSize="2xl"
        color="white"
        // alignItems={"center"}
      >
        Volunteer-Now is the largest network in the nonprofit world, with the
        most volunteers, nonprofits and opportunities to make a difference.
      </Text>
      <Spacer />
      <Button
        p={"7"}
        mb={"5"}
        mt={"90px"}
        border={"none"}
        bg={"tomato"}
        borderRadius={"15"}
        fontSize={"22px"}
        color={"white"}
        size="lg"
        colorScheme="red"
        alignItems={"center"}
      >
        Find Oportunities
      </Button>
      <Spacer />
      <Spacer />
    </Box>
  );
};

export default TopSection;
