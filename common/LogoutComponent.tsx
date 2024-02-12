import { Box, Typography } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../../auth/authConfig";

const LogoutComponent = () => {
  const { instance, accounts } = useMsal();
  const handleLogout = async () => {
    try {
      const response = await instance.acquireTokenSilent({
        ...loginRequest,
        account: accounts[0],
      });

      if (response && response.account) {
        instance.logoutRedirect({
          account: response.account,
          postLogoutRedirectUri: "http://localhost:5173/",
        });
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };
  return (
    <Box
      onClick={handleLogout}
      sx={{
        cursor: "pointer",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <LogoutIcon sx={{ mr: 1 }} />
      <Typography variant="caption" color="textSecondary">
        Logout
      </Typography>
    </Box>
  );
};

export default LogoutComponent;
