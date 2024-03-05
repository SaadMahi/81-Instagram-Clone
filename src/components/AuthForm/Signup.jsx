import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useState } from "react";

const Signup = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

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
            username: e.target.value,
          }))
        }
        value={inputs.username}
        placeholder="User Name"
        type="text"
        fontSize={14}
        size={"sm"}
      />
      <Input
        onChange={(e) =>
          setInputs(() => ({
            ...inputs,
            fullName: e.target.value,
          }))
        }
        value={inputs.fullName}
        placeholder="Full Name"
        type="text"
        fontSize={14}
        size={"sm"}
      />
      <InputGroup>
        <Input
          onChange={(e) =>
            setInputs(() => ({
              ...inputs,
              password: e.target.value,
            }))
          }
          value={inputs.password}
          placeholder="Password"
          type={showPassword ? "text" : "password"}
          fontSize={14}
          size={"sm"}
        />

        <InputRightElement h={"full"}>
          <Button
            onClick={() => setShowPassword(!showPassword)}
            variant={"ghost"}
            size={"sm"}
          >
            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
          </Button>
        </InputRightElement>
      </InputGroup>

      <Button
        // onClick={handleAuth}
        w={"full"}
        colorScheme="blue"
        size={"sm"}
        fontSize={14}
      >
        Signup
      </Button>
    </>
  );
};

export default Signup;
