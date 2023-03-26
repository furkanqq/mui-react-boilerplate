import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import MainMenu from './MainMenu';
import { useAppDispatch } from '../Store/hooks';
import { actions } from '../Store';
import { Outlet } from 'react-router-dom';
import AccountMenu from '../Components/Navigation/AccountMenu';

export default function Navigation() {
    const dispatch = useAppDispatch();

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <MainMenu />
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={() =>
                                dispatch(actions.mainMenu.menuOpen(true))
                            }
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ display: { xs: 'none', sm: 'block' } }}
                        >
                            React Admin
                        </Typography>
                        <Box sx={{ flexGrow: 1 }} />
                        <AccountMenu />
                    </Toolbar>
                </AppBar>
            </Box>
            <Box sx={{ mx: 6, mt: 4 }}>
                <Outlet />
            </Box>
        </>
    );
}
