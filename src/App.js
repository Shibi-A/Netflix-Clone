import React, { useState, useEffect } from 'react'
import './App.css';
import HomeScreen from './HomeScreen';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import LoginScreen from './LoginScreen'
import {auth} from "./firebase"
import ProfileScreen from './ProfileScreen';
import { login, logout, selectUser} from "./features/counter/userSlice"
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth =>{
    if(userAuth) {
      
      dispatch(login({
        uid: userAuth.uid,
        email: userAuth.email,
      }));

    }
    else{
      dispatch(logout());
    }
  });
  return  unsubscribe;
}, [dispatch]);
  return (
    <div className="app">

      <BrowserRouter>
      {!user ? (<LoginScreen />)
      : (
        <Routes>
          <Route path='/profile' element={<ProfileScreen />} />
          
          <Route path="/" element={<HomeScreen />} />
          
        </Routes>
      )}
        
      </BrowserRouter>

    </div>
  );
}

export default App;
