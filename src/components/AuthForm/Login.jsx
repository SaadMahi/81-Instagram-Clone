import { Button, Input } from "@chakra-ui/react";
import { useState } from "react";

const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  return (
    <>
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
        size={"sm"}
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
        size={"sm"}
      />

      <Button w={"full"} colorScheme="blue" size={"sm"} fontSize={14}>
        Login
      </Button>
    </>
  );
};

export default Login;
