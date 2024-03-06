import { createSlice } from "@reduxjs/toolkit";


//we are splitting createsslice from index.js to make it easy to manage
const initialCounterState = { counter: 0, showCounter: true };

//createslice uses a inner library immer behind the scenes to create new state object from these mutated state which are immutable
const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    //reducer methods
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

//these are action creators
export const counterActions = counterSlice.actions;
export default counterSlice;