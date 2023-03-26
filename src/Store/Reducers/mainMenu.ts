import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MainMenu {
    status: boolean;
}

const initialState: MainMenu = {
    status: false,
};

export const mainMenu = createSlice({
    name: 'mainMenu',
    initialState,
    reducers: {
        close: (state) => {
            state.status = false;
        },

        menuOpen: (state, action: PayloadAction<boolean>) => {
            state.status = action.payload;
        },
    },
});

export default mainMenu;
