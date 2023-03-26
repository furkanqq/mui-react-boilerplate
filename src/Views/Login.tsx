import {
    Button,
    Card,
    CardActions,
    CardContent,
    FormControl,
    Grid,
    TextField,
    Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { AuthBackground } from '../Components/LoginPage/AuthBackground';
import Logo from '../Components/LoginPage/Logo';

export default function Login() {
    localStorage.clear();
    return (
        <Box sx={{ minHeight: '100vh' }}>
            <AuthBackground />
            <Grid
                container
                direction="column"
                justifyContent="flex-end"
                sx={{
                    minHeight: '100vh',
                }}
            >
                <Grid item xs={12} sx={{ ml: 3, mt: 3 }}>
                    <Logo />
                </Grid>
                <Grid item xs={12}>
                    <Grid
                        item
                        xs={12}
                        container
                        justifyContent="center"
                        alignItems="center"
                        sx={{
                            minHeight: {
                                xs: 'calc(100vh - 134px)',
                                md: 'calc(100vh - 112px)',
                            },
                        }}
                    >
                        <Card sx={{ width: 540, backgroundColor: '#fffa' }}>
                            <CardContent>
                                <Typography
                                    sx={{ ml: 1, mt: 1 }}
                                    gutterBottom
                                    variant="h4"
                                    component="div"
                                >
                                    Login
                                </Typography>

                                <FormControl fullWidth sx={{ m: 1 }}>
                                    <TextField
                                        id="email"
                                        label="E Mail Address"
                                        variant="standard"
                                        type="email"
                                    />
                                </FormControl>
                                <FormControl fullWidth sx={{ m: 1 }}>
                                    <TextField
                                        id="password"
                                        label="Password"
                                        variant="standard"
                                        type="password"
                                    />
                                </FormControl>
                            </CardContent>
                            <CardActions
                                sx={{
                                    m: 1,
                                    display: 'flex',
                                    justifyContent: 'center',
                                }}
                            >
                                <Button
                                    size="medium"
                                    variant="contained"
                                    color="success"
                                    fullWidth
                                    onClick={() => (location.href = '/')}
                                >
                                    Login
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
                <Grid item xs={12} sx={{ m: 3, mt: 1 }}>
                    ---
                </Grid>
            </Grid>
        </Box>
    );
}
