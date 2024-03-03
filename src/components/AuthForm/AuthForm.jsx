import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState();
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleAuth = () => {
    if (!inputs.email || !inputs.password) {
      alert("please fill all the fields");
      return;
    }

    console.log(inputs);
    navigate("/");
  };

  return (
    <>
      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <VStack spacing={4}>
          <Image src="/logo.png" h={24} cursor={"pointer"} alt="instagram" />
          <Input
            onChange={(e) =>
              setInputs(() => ({
                ...inputs,
                email: e.target.value,
              }))
            }
            value={inputs.email}
            placeholder="Email"
            type="email"
            fontSize={14}
          />
          <Input
            onChange={(e) =>
              setInputs(() => ({
                ...inputs,
                password: e.target.value,
              }))
            }
            value={inputs.password}
            placeholder="Password"
            type="password"
            fontSize={14}
          />

          {!isLogin ? (
            <Input
              onChange={(e) =>
                setInputs(() => ({
                  ...inputs,
                  confirmPassword: e.target.value,
                }))
              }
              value={inputs.confirmPassword}
              placeholder="Confirm Password"
              type="password"
              fontSize={14}
            />
          ) : null}

          <Button
            onClick={handleAuth}
            w={"full"}
            colorScheme="blue"
            size={"sm"}
            fontSize={14}
          >
            {!isLogin ? "Login" : "Signup"}
          </Button>

          {/* OR TEXT  */}
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            my={4}
            gap={1}
            w={"full"}
          >
            <Box flex={2} h={"1px"} bg={"gray.400"} />
            <Text mx={1} color={"white"}>
              OR
            </Text>
            <Box flex={2} h={"1px"} bg={"gray.400"} />
          </Flex>

          {/* LOGIN WITH GOOGLE */}
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            cursor={"pointer"}
          >
            <Image src="/google.png" w={5} alt="Google logo" />
            <Text mx="2" color={"blue.500"}>
              Login with Google
            </Text>
          </Flex>
        </VStack>
      </Box>

      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <Flex alignItems={"center"} justifyContent={"center"}>
          <Box mx={2} fontSize={14}>
            {isLogin ? "Don't have and account?" : "Already have an account"}
          </Box>
          <Box
            onClick={() => setIsLogin(!isLogin)}
            color={"blue.500"}
            cursor={"pointer"}
          >
            {isLogin ? "Sign up" : "Log in"}
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default AuthForm;
