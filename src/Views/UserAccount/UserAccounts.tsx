import { Button, Card, CardActions, CardContent } from '@mui/material';
import FilterIcon from '@mui/icons-material/FilterAlt';
import AddBoxIcon from '@mui/icons-material/AddBox';
import React, { useState } from 'react';
import DataTable from '../../Components/DataTable';
import { Box } from '@mui/system';
import { useAppSelector } from '../../Store/hooks';
import { RootState } from '../../Store';
import UserAccountRequest from '../../Requests/UserAccountRequest';
import UserAccountNew from './UserAccountNew';

export default function UserAccounts() {
    const list: any = useAppSelector(
        (state: RootState) => state.adminUsers.list
    );

    const [request, setFind] = useState({ mode: 'list', payload: {} });
    const [newWindow, setNewWindow] = useState(false);

    return (
        <Card>
            {/* {list && JSON.stringify(list[0])} */}
            <UserAccountRequest params={request} />

            <UserAccountNew
                open={newWindow}
                onClose={() => setNewWindow(false)}
            />

            <CardActions sx={{ mx: 2, mt: 1 }}>
                <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<FilterIcon />}
                    onClick={() => {
                        localStorage.setItem('token', 'deneme');
                        setFind({ mode: 'list', payload: { id: 2 } });
                    }}
                >
                    Search & Filter
                </Button>
                <Box sx={{ flexGrow: 1 }} />
                <Button
                    variant="contained"
                    color="success"
                    startIcon={<AddBoxIcon />}
                    onClick={() => setNewWindow(true)}
                >
                    New User
                </Button>
            </CardActions>
            <CardContent>
                <DataTable
                    rows={list}
                    columns={{
                        title: 'Title',
                        body: 'Content',
                    }}
                />
            </CardContent>
        </Card>
    );
}
