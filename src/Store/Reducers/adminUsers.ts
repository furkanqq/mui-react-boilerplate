import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AdminUsers {
    list: object;
    item: object;
}

const initialState: AdminUsers = {
    list: [],
    item: {},
};

export const adminUsers = createSlice({
    name: 'adminUsers',
    initialState,
    reducers: {
        fillList: (state, action: PayloadAction<object>) => {
            state.list = action.payload;
        },
        fillItem: (state, action: PayloadAction<object>) => {
            state.item = action.payload;
        },
    },
});

export default adminUsers;
