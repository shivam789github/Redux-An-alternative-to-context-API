import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter-slice";
import authSlice from "./auth-slice";

//Migrating to redux toolkit from legacy createStore by using configureStore and createSlice

// //created a reducer function
// const counterReducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     return {
//       //never mutate the existing state. always return a brand new state object. it is super-important. It may work but it is rule
//       //always copy and create new object
//       counter: state.counter + 1,
//       showCounter:state.showCounter
//     };
//   }
//   if(action.type==='increase'){
//     return{
//       counter:state.counter + action.amount,
//       //now the reducer is dynamic. it extracts a action payload. action payload are very popular and often needed
//       showCounter:state.showCounter
//     }
//   }

//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       showCounter:state.showCounter
//     };
//   }
//   if(action.type==='toggle'){
//     return{
//       counter:state.counter,
//       showCounter:!state.showCounter
//     }
//   }
//   return state
// };


//configureStore is used to manage multiple reducer(mapping of reducers) whereas createStore takes only on reducer function
const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

//dispatch an action
// store.dispatch({ type: "increment" });

export default store;
