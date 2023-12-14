import React from "react";
import { Box, Image, HStack, Button, Text, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import logo from "./images/Volnow.png";
const Navbar = () => {
  const linkStyle = {
    "font-family": "Cursive",
    // "font-family": "Brush Script MT, Cursive",
    textDecoration: "none",
    color: "#004D40",
    "font-weight": "500",
  };
  const activeLink = {
    "font-family": "Cursive",
    // textDecoration: "none",
    color: "tomato",
    "font-weight": " 500",
  };
  const fontStyle = {
    "font-family": "Cursive",
    "font-weight": " 500",
  };
  return (
    <Box
      // pos="relative"
      position="sticky"
      top={"0"}
      left={"0"}
      backgroundColor="white"
      h={"70px"}
      display="flex"
      justifyContent="space-around"
      p={15}
      boxShadow=" rgba(0, 0, 0, 0.24) 0px 3px 8px"
    >
      <Box display={"flex"} alignItems={"center"}>
        <Image h={"50px"} src={logo}></Image>
        <Text fontSize={20} style={fontStyle} color={"teal.700"}>
          Volunteer-Now
        </Text>
      </Box>
      <HStack direction="row" spacing={40} align="center">
        <NavLink
          style={({ isActive }) => (isActive ? activeLink : linkStyle)}
          to="/"
        >
          Home
        </NavLink>

        <NavLink
          style={({ isActive }) => (isActive ? activeLink : linkStyle)}
          to="/Oportunities"
        >
          Find Oportunities
        </NavLink>
      </HStack>
      <Button
        bg={"teal.500"}
        color="white"
        border={"none"}
        pl={5}
        pr={5}
        p={2}
        colorScheme="teal.800"
        borderRadius={8}
        style={fontStyle}
      >
        Log In
      </Button>
    </Box>
  );
};

export default Navbar;
