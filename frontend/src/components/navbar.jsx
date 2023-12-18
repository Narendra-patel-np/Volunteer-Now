import React from "react";
import { Box, Image, HStack, Button, Text, Link } from "@chakra-ui/react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "./images/Volnow.png";
import { auth } from "./pages/login";
const Navbar = () => {
  // console.log(auth);
  const Navigate = useNavigate();
  const linkStyle = {
    "font-family": "Poppins",
    fontSize: 18,
    // "font-family": "Brush Script MT, Cursive",
    textDecoration: "none",
    color: "#004D40",
    "font-weight": "500",
  };
  const activeLink = {
    "font-family": "Poppins",
    fontSize: 18,

    // textDecoration: "none",
    color: "tomato",
    "font-weight": " 500",
  };
  const fontStyle = {
    "font-family": "Poppins",
    "font-weight": " 500",
    fontSize: 18,
  };
  return (
    <Box
      // pos="relative"
      // position={"-webkit-sticky"}
      position="sticky"
      top={"0"}
      backgroundColor="white"
      h={"70px"}
      display="flex"
      justifyContent="space-around"
      p={15}
      zIndex={999}
      boxShadow=" rgba(0, 0, 0, 0.24) 0px 3px 8px"
    >
      <Box display={"flex"} alignItems={"center"}>
        <Image h={"50px"} src={logo}></Image>
        <Text style={fontStyle} color={"teal.700"} fontSize={20}>
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
        <NavLink
          style={({ isActive }) => (isActive ? activeLink : linkStyle)}
          to="/applied"
        >
          Applied For
        </NavLink>
      </HStack>
      {/* <Button
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
      </Button> */}
      <Button colorScheme="teal" onClick={() => Navigate("/login")}>
        {auth ? "Log Out" : "Log In"}
      </Button>
    </Box>
  );
};

export default Navbar;
