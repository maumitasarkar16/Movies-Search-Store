import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: null,
    reducers: {
        addUser: (state, action) => {
            return action.payload;    //storing the user object in redux after login or signup which can be called via dispatch
        },
        removeUser: (state, action) => {
            return null
        }

    }
})

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer