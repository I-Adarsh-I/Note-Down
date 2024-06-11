import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
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

function Login() {
  const navigate = useNavigate();
  const [formFields, setFormFields] = useState({
    email:'',
    password:''
  });

  const handleInputs = (e) => {
    const {name, value} = e.target;
    setFormFields((prevState) => ({
      ...prevState,
      [name]: value
    }));
  }

  const formSubmitHandler = async(e) => {
    e.preventDefault();
    const request = {
      email: formFields.email,
      password: formFields.password
    }
    try {
      const resp = await axios.post(`${process.env.REACT_APP_BASE_URL}/login`, request)
      console.log(resp);
      if(resp.status === 200){
        toast.success(resp.data.message);
        localStorage.setItem("Auth token", resp.data.token.token);
        return navigate('/home');
      }
    } catch (err) {
      return toast.error(err.response.data.error);
    }
  }
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
            Sign in
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={formSubmitHandler}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              value={formFields.email}
              onChange={handleInputs}
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              value={formFields.password}
              onChange={handleInputs}
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
              <Grid item>
                <Link href="#" variant="body2" underline="none">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <NavLink to={'/register'} className='text-blue-500 text-sm'>
                  {"Don't have an account? Sign Up"}
                </NavLink>
              </Grid>
            </Grid>
            <Divider sx={{ mt: 2, mb: 2 }}>
              <Typography variant="p" component="h2">
                OR
              </Typography>
            </Divider>
            <Button
            //   variant="outlined"
              size="large"
              sx={{
                color: "black",
                border: '1px solid lightgray',
                textTransform: 'capitalize',
                width: '100%'
              }}
            >
                <img className="mr-1" src="/icons/google.png" width={'18px'}/>
              Sign in with Google
            </Button>
          </Box>
        </Box>
      </Grid>
      <ToastContainer />
    </Grid> 
  );
}

export default Login;
