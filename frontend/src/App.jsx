// App.jsx
import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  const { isLoaded, isSignedIn } = useUser();
  if (!isLoaded) return null;
  if (!isSignedIn) return <Navigate to="/auth/sign-in" />;

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
