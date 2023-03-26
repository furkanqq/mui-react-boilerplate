import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import { RootState } from '../Store';
import { useAppDispatch, useAppSelector } from '../Store/hooks';
import { actions } from '../Store';

import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import MenuItem from '../Components/MainMenu/MenuItem';
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PriceChangeIcon from '@mui/icons-material/PriceChange';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import ChatIcon from '@mui/icons-material/Chat';
import SettingsIcon from '@mui/icons-material/Settings';
import TagIcon from '@mui/icons-material/Tag';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function MainMenu() {
    const opened = useAppSelector((state: RootState) => state.mainMenu.status);

    const dispatch = useAppDispatch();

    const toggleDrawer =
        () => (event: React.KeyboardEvent | React.MouseEvent) => {
            if (
                event.type === 'keydown' &&
                ((event as React.KeyboardEvent).key === 'Tab' ||
                    (event as React.KeyboardEvent).key === 'Shift')
            ) {
                return;
            }

            dispatch(actions.mainMenu.menuOpen(false));
        };

    const list = () => (
        <Box
            sx={{
                width: 250,
            }}
            role="presentation"
            onClick={toggleDrawer()}
            onKeyDown={toggleDrawer()}
        >
            <AppBar position="static" color="primary" enableColorOnDark>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <ArrowBackIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        Menu
                    </Typography>
                </Toolbar>
            </AppBar>
            <List>
                <MenuItem title="Dashboard" tag="">
                    <HomeIcon />
                </MenuItem>
                <MenuItem title="User Account" tag="user_account">
                    <PeopleAltIcon />
                </MenuItem>
                <MenuItem title="Admin Control" tag="admin_control">
                    <CoPresentIcon />
                </MenuItem>

                <Divider />
                <MenuItem title="Coins" tag="coins">
                    <CurrencyBitcoinIcon />
                </MenuItem>
                <MenuItem title="Account Levels" tag="account_levels">
                    <SignalCellularAltIcon />
                </MenuItem>
                <MenuItem title="Accounting" tag="accounting">
                    <CurrencyExchangeIcon />
                </MenuItem>

                <Divider />
                <MenuItem title="Markets" tag="markets">
                    <TrendingUpIcon />
                </MenuItem>
                <MenuItem title="Trades" tag="trades">
                    <PriceChangeIcon />
                </MenuItem>
                <MenuItem title="Orders" tag="orders">
                    <ShoppingCartCheckoutIcon />
                </MenuItem>

                <Divider />
                <MenuItem title="Messages" tag="messages">
                    <ChatIcon />
                </MenuItem>
                <MenuItem title="Site Settings" tag="site_settings">
                    <SettingsIcon />
                </MenuItem>
                <MenuItem title="Supervisor Bot" tag="supervisor_bot">
                    <TagIcon />
                </MenuItem>
            </List>
        </Box>
    );

    return (
        <>
            <Drawer anchor="left" open={opened} onClose={toggleDrawer()}>
                {list()}
            </Drawer>
        </>
    );
}
