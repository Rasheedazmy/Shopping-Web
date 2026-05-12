import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Register from './Components/Register/Register';
import CounterContextProvider from './Context/CounterContext';
import UserContextProvider from './Context/UserContext';
import Login from './Components/Login/Login';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute'
import Home from './Components/Home/Home'
import ProductDetails from './Components/ProductDetails/ProductDetails';
import Categories from './Components/Categories/Categories';
import Brands from './Components/Brands/Brands';
import Cart from './Components/cart/Cart';
import Products from './Components/Products/Products';
import CartContextProvider from './Context/CartContext';




let query = new QueryClient({
  defaultOptions:{

  }
});


let x =createBrowserRouter([
  {path:'/', element:<Layout/>, children:[
    {index:true , element: <ProtectedRoute><Home /></ProtectedRoute>},
    {path: 'categories', element: <ProtectedRoute><Categories /></ProtectedRoute>},
    {path: 'brands', element: <ProtectedRoute><Brands /></ProtectedRoute>},
    {path: 'cart', element: <ProtectedRoute><Cart /></ProtectedRoute>},
    {path: 'products', element: <ProtectedRoute><Products /></ProtectedRoute>},
    {path: 'productdetails/:id/:category', element: <ProtectedRoute><ProductDetails /></ProtectedRoute>},
    {path:'Register' , element:<Register />},
    {path:'Login' , element:<Login />},
  ]}
])


function App() {
 

  return <CartContextProvider><QueryClientProvider client={query}>
            <UserContextProvider>   
                  <CounterContextProvider>
                    <RouterProvider router={x}></RouterProvider>
                    <ReactQueryDevtools />
                  </CounterContextProvider>
              </UserContextProvider>
  </QueryClientProvider>
  </CartContextProvider>
    
  
}

export default App
