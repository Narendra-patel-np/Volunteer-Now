import React from "react";
import { Box, Button, Input, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Box
      w={"25%"}
      m={"auto"}
      mt={"120px"}
      p={"12"}
      bg={"#f5f5f5"}
      borderRadius={"20"}
    >
      <Stack spacing={5}>
        <Text
          textAlign={"center"}
          fontWeight={"bold"}
          mb={2}
          fontSize={"25"}
          color={"#0b3954"}
        >
          Log in
        </Text>

        <Input
          variant="filled"
          placeholder="Email"
          type="text"
          name="email"
          _placeholder={{ color: "black" }}
          // isInvalid
          // errorBorderColor="orange.400"
          // onChange={handleChange}
          // value={newProduct.category}
        />
        <Input
          variant="filled"
          placeholder="Password"
          type="password"
          name="password"
          _placeholder={{ color: "black" }}

          // isInvalid
          // errorBorderColor="orange.400"
          // value={newProduct.price}
          // onChange={handleChange}
        />

        <Button
          // #0b3954
          bg={"orange.400"}
          m={"20px 5px"}
          color={"white"}
          _hover={{ bg: "#e89f22" }}
          // onClick={AddProduct}
        >
          Log In
        </Button>
      </Stack>
      <Link style={{ textDecoration: "underline" }} to="/register">
        Register
      </Link>
    </Box>
  );
};

export default Login;
