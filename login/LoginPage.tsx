import { Box, Button } from "@mui/material";
import { loginRequest } from "../../auth/authConfig";
import { useMsal } from "@azure/msal-react";
import assets from "../../assets/images";

const LoginPage = () => {
  const { instance } = useMsal();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "centers",
          m: 0,
        }}
      >
        <img
          src={assets.images.logo}
          alt="trackin logo"
          width="100%"
          style={{ verticalAlign: "middle" }}
        />
      </Box>
      <Button
        variant="contained"
        onClick={() => {
          instance
            .loginPopup(loginRequest)
            .then((data) => {
              console.log(data);
            })
            .catch((e: Error) => {
              console.log(e);
            });
        }}
      >
        login with microsoft
      </Button>
    </Box>
  );
};

export default LoginPage;
