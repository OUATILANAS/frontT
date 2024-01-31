'use client';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import { useRouter } from 'next/navigation'






export default function SignUp() {
    const router = useRouter()

    var fill: boolean = true;
    const [fname, setfname] = useState("");
    const [lname, setlname] = useState("");
    const [pwd, setPwd] = useState("");
    const [pwdConfirm, setPwdConfirm] = useState("");
    const [email, setEmail] = useState("");
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        checkFill();
        if (fill == true) {
            if (pwd != pwdConfirm) {
                alert("Passwords are not matched")
            }
            else {

                router.push('/main/dashboard');
            }

        }
        else {
            alert("Please fill the form")
        }
    };


    function checkFill() {
        fill = true;
        const inputs: HTMLCollection<HTMLInputElement> = document.getElementsByTagName("input");
        for (var input of inputs) {

            if (input.value == "") {
                fill = false;
            }
        }


    }


    function handleInput(event: React.FormEvent<HTMLInputElement>) {

        var attr: String = event.target.getAttribute("name");
        var value: String = event.target.value;



        if (attr == "email") {
            setEmail(value)
        }
        else if (attr == "password") {
            setPwd(value)
        }
        else if (attr == "passwordConfirm") {
            setPwdConfirm(value)
        }
        else if (attr == "firstName") {
            setfname(value)
        }
        else if (attr == "lastName") {
            setlname(value)
        }
        else {

        }

    }




    return (


        < Container component="main" maxWidth="xs" >
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >

                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <Box component="form" noValidate sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                onInput={handleInput}

                                name="firstName"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                value={fname}
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField

                                onInput={handleInput}
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                value={lname}

                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField

                                onInput={handleInput}
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                value={email}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField

                                onInput={handleInput}
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="new-password"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField

                                onInput={handleInput}
                                required
                                fullWidth
                                name="passwordConfirm"
                                label="Password Confirmation"
                                type="password"
                                id="passwordConfirm"
                                autoComplete="new-password"
                            />
                        </Grid>

                    </Grid>
                    <Button

                        onClick={handleSubmit}
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign Up
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link href="/" variant="body2">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>

        </Container>

    );
}