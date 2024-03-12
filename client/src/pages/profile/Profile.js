import React, { useState } from "react";
import NavbarTop from "../../components/navbar/Navbar";
import {
  Avatar,
  Box,
  Button,
  Container,
  Stack,
  Typography,
  Badge,
  styled,
  Grid,
} from "@mui/material";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const Profile = () => {
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      backgroundColor: "#44b700",
      color: "#44b700",
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      "&::after": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        animation: "ripple 1.2s infinite ease-in-out",
        border: "1px solid currentColor",
        content: '""',
      },
    },
    "@keyframes ripple": {
      "0%": {
        transform: "scale(.8)",
        opacity: 1,
      },
      "100%": {
        transform: "scale(2.4)",
        opacity: 0,
      },
    },
  }));
  
  return (
    <div className="mt-20">
      <NavbarTop />
      <Container>
        <Box margin={"100px 0 0 0"} sx={{ height: "85vh" }}>
          <Grid container>
            <Grid item xs={12} md={7}>
              <div className="flex flex-col text-center items-center gap-1 sm:flex-col sm:items-center sm:text-center md:flex-col md:items-start md:text-start lg:flex-col lg:items-start lg:text-start">
                <Box>
                  <StyledBadge
                    overlap="circular"
                    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                    variant="dot"
                  >
                    <Avatar
                      alt="Remy Sharp"
                      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      sx={{ width: 124, height: 124 }}
                    />
                  </StyledBadge>
                </Box>
                <Stack>
                  <Typography variant="h5" fontWeight={"600"}>
                    Full Name
                  </Typography>
                  <Typography variant="subtitle2" color={"#bdbdbd"}>
                    @Username
                  </Typography>
                </Stack>
                <Stack direction={"row"} gap={2}>
                  <Typography variant="body1">2 Following</Typography>
                  <Typography variant="body1">2 Followers</Typography>
                </Stack>
                <Typography
                  variant="body1"
                  maxWidth={"500px"}
                  color={"#424242"}
                >
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Praesentium vitae eos in quae magnam quod dignissimos
                  exercitationem corrupti iure totam.
                </Typography>
                <Stack direction={"row"} gap={2} alignItems={"center"}>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{
                      margin: "8px 0 0 0",
                      padding: "8px 16px",
                      bgcolor: "#000",
                      borderRadius: "24px",
                      bgcolor: "#424242",
                      "&:hover": {
                        bgcolor: "#212121",
                      },
                    }}
                  >
                    Follow
                  </Button>
                  <button className="mt-2 ms-3 p-2 rounded-full hover:bg-gray-100">
                    <MoreHorizIcon />
                  </button>
                </Stack>
              </div>
            </Grid>
            <Grid item xs={12} md={5}>
              <Box className="bg-indigo-50 mt-3 rounded-lg h-full md:mt-0 lg:mt-0 ">
                <div className="bg-cover bg-center flex items-center h-full">
                  <img
                    src="https://images.unsplash.com/photo-1500964757637-c85e8a162699?q=80&w=1806&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="featured"
                  />
                </div>
              </Box>
            </Grid>
          </Grid>
          
          
        </Box>
      </Container>
    </div>
  );
};

export default Profile;
