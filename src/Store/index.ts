import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import adminUsers from './Reducers/adminUsers';
import apiSlice from './apiSlice';
import mainMenu from './Reducers/mainMenu';

const store = configureStore({
    reducer: {
        apiSlice: apiSlice.reducer,
        mainMenu: mainMenu.reducer,
        adminUsers: adminUsers.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const actions = {
    mainMenu: mainMenu.actions,
};

export default store;
