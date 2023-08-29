import api from '@/api/api';
import { UserContext, useUserContext } from '@/contexts/user-context';
import viewTheme from '@/theme/primary';
import { Button, ThemeProvider, Typography } from '@mui/material';
import { Box, Grid, TextField } from "@mui/material";
import { useRouter } from 'next/router';
import React from 'react';

export default function Login() {

    const { setUserAuthInfo } = useUserContext();
    const router = useRouter();

    const [username, setUsername] = React.useState<string>("");
    const [password, setPassword] = React.useState<string>("");

    let submitCredentials = () => {
        //console.log(username, password);

        api.login(username, password).then(data => {
            console.log(data.accessToken);
            setUserAuthInfo(data.accessToken)
            console.log(data);
            //localStorage.setItem('token', data.accessToken)
            router.push('/dashboard');
        });
    }

    return (
        <ThemeProvider theme={viewTheme}>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                sx={{ minHeight: '100vh' }}>
                <Grid item>
                    <Box sx={{ display: 'flex', gap: '50px', flexDirection: 'column', alignItems: 'center', height: '450px', minWidth: '200px', width: '30vw', maxWidth: '500px', backgroundColor: 'white', border: `2px solid`, borderColor: 'grey', borderRadius: '10px' }}>
                        <Typography variant="h3" sx={{ mt: '50px' }}>Vista</Typography>
                        <TextField id="username-field" label="Email" variant="filled" sx={{ width: '80%' }} onChange={(e) => setUsername(e.target.value)} />
                        <TextField id="password-field" label="Password" variant="filled" sx={{ width: '80%' }} onChange={(e) => setPassword(e.target.value)} type='password' />
                        <Button variant="contained" sx={{ width: '60%'}} onClick={submitCredentials}>Submit</Button>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}