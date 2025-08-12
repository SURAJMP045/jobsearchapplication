import React from 'react'
import './App.css'
import HeroSection from './components/HeroSection'
import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from '@clerk/clerk-react';
import { Navigate, Outlet } from 'react-router-dom';


const App = () => {

  const {user,isLoaded,isSignedIn}=useUser()
  if(!isSignedIn && isLoaded){
  return <Navigate to={'/auth/sign-in'} />
  }

  return (
    <>
      <HeroSection/>
      <Outlet/>
    </>
  )
}

export default App
