import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ClerkProvider } from '@clerk/clerk-react';
import {RouterProvider , createBrowserRouter} from 'react-router-dom'
import SignInPage from './auth/sign-in/SignInPage.jsx';
import Home from './home/Home.jsx'
import Dash from './dashboard/Dash.jsx';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error('Add your Clerk Publishable Key to the .env file');
}

const router = createBrowserRouter([
  {
    element:<App/>,
    children:[
      {
        path:'/dashboard',
        element: <Dash/>
      },
    ]
  },
  {
        path:'/',
        element: <Home/>
      },
  {
    path:'auth/sign-in',
    element:<SignInPage/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      {/* <App /> */}
      <RouterProvider router={router}/>
    </ClerkProvider>
  </StrictMode>
);
