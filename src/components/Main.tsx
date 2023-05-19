import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Home from "../App";
import { HomeDetail } from "../Details/newsDetailSlide";
import Publishers from "../Publisher";
import { PublishDetail } from "../Details/publisherDetail";
import Search from "../Search";


const instanceRouter = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path='/:id' element={<HomeDetail/>}/>
    <Route path='publishers' element={<Publishers/>}/>
    <Route path='publishers/:id' element={<PublishDetail/>}/>
    <Route path="search" element={<Search/>}/>
  </Route>
))
export default function Main(){
  return(
    <RouterProvider router={instanceRouter}/>
  )
}