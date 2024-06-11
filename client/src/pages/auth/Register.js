import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { deepOrange } from "@mui/material/colors";
import { Divider } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();

    const request = {
      fullname: formData.fullname,
      email: formData.email,
      password: formData.password,
    };

    try {
      const resp = await axios.post(`${process.env.REACT_APP_BASE_URL}/register`, request);
      if(resp.status === 201){
        navigate('/home');
        return toast.success(resp.data.message);
      }else if(resp.status === 400){
        return toast.error(resp.data.error)
        // return console.log(resp.data.error);
      }
    } catch (err) {
      console.log(err)
      return toast.error(err.response.data.error)
    }
  };

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: "url(https://images.unsplash.com/photo-1483095348487-53dbf97d8d5b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: deepOrange[500] }}></Avatar>
            <Typography component="h1" variant="h5">
              Register
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={formSubmitHandler}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Full Name"
                name="fullname"
                onChange={handleInputs}
                value={formData.fullname}
                autoComplete="name"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                onChange={handleInputs}
                value={formData.email}
                autoComplete="email"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                onChange={handleInputs}
                value={formData.password}
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container justifyContent="space-between">
                <Grid item></Grid>
                <Grid item>
                  <NavLink to={"/login"} className="text-blue-500 text-sm">
                    {"Already have an account? Sign In"}
                  </NavLink>
                </Grid>
              </Grid>
              <Divider sx={{ mt: 2, mb: 2 }}>
                <Typography variant="p" component="h2">
                  OR
                </Typography>
              </Divider>
              <Button
                size="large"
                sx={{
                  color: "black",
                  border: "1px solid lightgray",
                  textTransform: "capitalize",
                  width: "100%",
                }}
              >
                <img className="mr-1" src="/icons/google.png" width={"18px"} />
                Register with Google
              </Button>
            </Box>
          </Box>
      </Grid>
      <ToastContainer />
    </Grid>
  );
};

export default Register;
