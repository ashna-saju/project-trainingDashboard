import { Box, Divider, Drawer, List } from "@mui/material";
import sizeConfigs from "../../configs/sizeConfigs";
import LogoComponent from "./LogoComponent";
import MenuItemComponent from "./MenuItemComponent";
import LogoutComponent from "./LogoutComponent";
import DashboardIcon from "@mui/icons-material/Dashboard";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import QuestionAnswerRoundedIcon from "@mui/icons-material/QuestionAnswerRounded";
import FeedbackIcon from "@mui/icons-material/Feedback";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useContext } from "react";
import { NavContext } from "../context/NavContext";
import colorConfigs from "../../configs/colorConfigs";
const Sidebar = () => {
  const { collapsed } = useContext(NavContext);

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: sizeConfigs.sideBar.width,
          bgcolor: colorConfigs.sidebar.bgcolor,
          transform: {
            xs: collapsed ? "translateX(-100%)" : "translateX(0%)",
            sm: "none",
          },
          transition: "transform 0.5s ease-in-out",
          display: "flex",
          justifyContent: "space-between",
        },
      }}
    >
      <Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "left",
            p: 2,
            m: 0,
            height: sizeConfigs.topBar.height,
          }}
        >
          <LogoComponent />
        </Box>

        <Box>
          <List sx={{ gap: 0.5 }}>
            {[
              {
                text: "Dashboard",
                icon: <DashboardIcon sx={{ fontSize: "1.1em" }} />,
                link: "/",
              },
              {
                text: "Programs",
                icon: <InboxIcon sx={{ fontSize: "1.1em" }} />,
                link: "/programs",
              },
              {
                text: "Requests",
                icon: <QuestionAnswerRoundedIcon sx={{ fontSize: "1.1em" }} />,
                link: "/requests",
              },
              {
                text: "Feedback",
                icon: <FeedbackIcon sx={{ fontSize: "1.1em" }} />,
                link: "/feedback",
              },
              {
                text: "Calendar",
                icon: <CalendarMonthIcon sx={{ fontSize: "1.1em" }} />,
                link: "/calendar",
              },
            ].map(({ text, icon, link }, index) => (
              <MenuItemComponent
                key={index}
                text={text}
                icon={icon}
                link={link}
              />
            ))}
          </List>
        </Box>
        <Divider />
      </Box>

      <Box
        sx={{
          p: 2,
          display: "flex",
          justifyContent: "left",
          alignItems: "center",
        }}
      >
        <LogoutComponent />
      </Box>
    </Drawer>
  );
};

export default Sidebar;
