import React from "react";
import Counter from "./components/Counter";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";
import Header from "./components/Header";
import { useSelector } from "react-redux";

function App() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  // console.log(store.getState().auth.isAuthenticated);
  console.log(isAuth);
  return (
    <React.Fragment>
      <Header/>
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}
      {isAuth && <Counter />}
    </React.Fragment>
  );
}

export default App;
//we will have only one redux store and multiple state slices
// super easy to create and manage multiple state slices when using redux toolkit