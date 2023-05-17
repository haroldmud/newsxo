import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Home from "../App";


const instanceRouter = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout/>}>
    <Route index element={<Home/>}/>
  </Route>
))
export default function Main(){
  return(
    <RouterProvider router={instanceRouter}/>
  )
}