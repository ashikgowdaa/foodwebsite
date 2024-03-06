import React from 'react';
import { createBrowserRouter,createRoutesFromElements ,Route, RouterProvider} from "react-router-dom";
import Home from './Components/Home';
import Layout from './Layout/Outet';
import '../src/index.css'
import Cart from './Components/Cart';
import Login from './Components/Login';
import Register from './Components/Register';
function App() {

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element= {<Layout/>} >
    <Route path='' element={<Home/>} />
    <Route path='Login' element={<Login/>} />
    <Route path='Register' element={<Register/>} />
    <Route path='cart/:Id' element={<Cart/>} />
  </Route>
))

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
