import Header from "./Header"
import Footer from "./Footer"
import { Outlet } from "react-router-dom"

export default function Layout(){
  return(
    <section className='max-w-[80rem] mx-auto h-[100vh] flex flex-col justify-between'>
      <div>
      <Header id='fetcher'/>
      <Outlet/>
      </div>
      <Footer href='fetcher'/>
    </section>
  )
}
