import React from 'react';
import { createBrowserRouter,createRoutesFromElements ,Route, RouterProvider} from "react-router-dom";
import Home from './Components/Home';
import Layout from './Layout/Outet';
import '../src/index.css'
function App() {

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element= {<Layout/>} >
    <Route path='' element={<Home/>} />
  </Route>
))

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
