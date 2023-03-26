import React from 'react';
import './Styles/App.css';
import Navigation from './Layout/Navigation';
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom';
import Dashboard from './Views/Dashboard';
import AdminControl from './Views/AdminControl/AdminControl';
import Accounting from './Views/Accounting/Accounting';
import UserAccounts from './Views/UserAccount/UserAccounts';
import Login from './Views/Login';

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<Navigation />}>
                <Route index element={<Dashboard />} />

                <Route path="user_account" element={<UserAccounts />} />

                <Route path="admin_control" element={<AdminControl />} />

                <Route path="coins" element={<h2>Coins</h2>} />

                <Route
                    path="account_levels"
                    element={<h2>Account Levels</h2>}
                />

                <Route path="accounting" element={<Accounting />} />

                <Route path="markets" element={<h2>Markets</h2>} />

                <Route path="trades" element={<h2>Trades</h2>} />

                <Route path="orders" element={<h2>Orders</h2>} />

                <Route path="messages" element={<h2>Messages</h2>} />

                <Route path="site_settings" element={<h2>Site Settings</h2>} />

                <Route
                    path="supervisor_bot"
                    element={<h2>Supervisor Bot</h2>}
                />
            </Route>
            <Route path="/login" element={<Login />} />
        </>
    )
);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
