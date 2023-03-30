
import Button from "@mui/material/Button"
import './App.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom"
import Layout from "./components/Layout";
import Home from "./pages/Home"
import Login from "./pages/Login"
import Cart from "./pages/Cart"
const router=createBrowserRouter(
createRoutesFromElements(<Route path="/"  element={<Layout/>}>
  <Route index element={<Home/>}/>
  <Route path="/cart" index element={<Cart/>}/>
  <Route path="/login" index element={<Login/>}/>
</Route>                   )
);
function App() {

  return <RouterProvider router={router
  }/>
}

export default App
