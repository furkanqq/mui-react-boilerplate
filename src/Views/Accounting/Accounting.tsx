import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

export default function Accounting() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList
                        onChange={handleChange}
                        aria-label="lab API tabs example"
                    >
                        <Tab label="Wallets" value="1" />
                        <Tab label="Earn Fees" value="2" />
                        <Tab label="Addresses" value="3" />
                        <Tab label="Withdraw Requests" value="4" />
                        <Tab label="Gather Requests" value="5" />
                        <Tab label="History" value="6" />
                    </TabList>
                </Box>
                <TabPanel value="1">Wallets</TabPanel>
                <TabPanel value="2">Earn Fees</TabPanel>
                <TabPanel value="3">Addresses</TabPanel>
                <TabPanel value="4">Withdraw Requests</TabPanel>
                <TabPanel value="5">Gather Requests</TabPanel>
                <TabPanel value="6">History</TabPanel>
            </TabContext>
        </Box>
    );
}
