import React from "react";
import { Box, Image, HStack, Button, Text } from "@chakra-ui/react";
import { Link, NavLink } from "react-router-dom";
import logo from "./images/Volnow.png";
const Navbar = () => {
  const linkStyle = {
    // "font-family": "Brush Script MT, Cursive",
    textDecoration: "none",
    color: "#004D40",
    "font-weight": " 600",
  };
  const activeLink = {
    // textDecoration: "none",
    color: "#004D40",
    "font-weight": " 600",
  };
  const fontStyle = {
    "font-family": "Cursive",
  };
  return (
    <Box
      position="sticky"
      top={"0"}
      left={"0"}
      bgColor={"white"}
      h={"40px"}
      display="flex"
      justifyContent="space-around"
      p={15}
      boxShadow=" rgba(0, 0, 0, 0.24) 0px 3px 8px"
    >
      <Box display={"flex"} alignItems={"center"}>
        <Image h={"50px"} src={logo}></Image>
        <Text fontSize={20} style={fontStyle}>
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
        bg={"#009688"}
        color="white"
        border={"none"}
        pl={5}
        pr={5}
        p={12}
        borderRadius={8}
      >
        Log In
      </Button>
    </Box>
  );
};

export default Navbar;
