import { Alert, AlertIcon, Button, Input } from "@chakra-ui/react";
import { useState } from "react";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const { loading, error, login } = useLogin();

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

      {error && (
        <Alert status="error" fontSize={13} p={2} borderRadius={4}>
          <AlertIcon fontSize={12} />
          {error.message}
        </Alert>
      )}

      <Button
        onClick={() => login(inputs)}
        isLoading={loading}
        w={"full"}
        colorScheme="blue"
        size={"sm"}
        fontSize={14}
      >
        Login
      </Button>
    </>
  );
};

export default Login;
