import { createSlice } from "@reduxjs/toolkit";


//we are splitting authSlice from index.js to make it easy to manage

const initialAuthState = {
    isAuthenticated: false,
  };
  
  const authSlice = createSlice({
    name: "authentication",
    initialState: initialAuthState,
    reducers: {
      //reducer methods
      login(state) {
        state.isAuthenticated = true;
      },
      logout(state) {
        state.isAuthenticated = false;
      },
    },
  });

  //these are action creators
  export const authActions=authSlice.actions;
  export default authSlice;