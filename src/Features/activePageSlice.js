import { createSlice } from '@reduxjs/toolkit';

// Get the page location on page refresh (prevent it from going back to home if the location !== home).
let pageLocation = window.location.href.split("/");

export const activePageSlice = createSlice({
    
    name: "activePage",
    initialState: {
        page: pageLocation[pageLocation.length - 1] === "" ? "home" : pageLocation[pageLocation.length - 1] 
    },

    reducers: {
        changePage: (state, action) => {
            state.page = action.payload
        }
    }
})

export const { changePage } = activePageSlice.actions

export default activePageSlice.reducer