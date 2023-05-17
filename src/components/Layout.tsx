import Header from "./Header"
import Footer from "./Footer"
import { Outlet } from "react-router-dom"

export default function Layout(){
  return(
    <section className='max-w-[80rem] mx-auto h-[100vh] flex flex-col justify-between'>
      <Header/>
      <div className="border h-[100%]">
        <Outlet/>
      </div>
      <Footer/>
    </section>
  )
}