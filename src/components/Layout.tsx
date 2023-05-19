import Header from "./Header"
import Footer from "./Footer"
import { Outlet } from "react-router-dom"

export default function Layout(){
  return(
    <section className='  h-[100vh] flex flex-col justify-between'>
      <div className="max-w-[80rem] mx-auto w-full sticky top-0 z-50 bg-white border-b">
         <Header id='fetcher'/>
      </div>
      <div className='h-fit w-full bg-blue-500 text-[12px] sticky top-0 z-50 text-center text-white font-[300]'>hope you're enjoying the journey with us  ❤ 
    </div>
      <div className="max-w-[80rem] mx-auto">
      <Outlet/>
      </div>
      <Footer href='fetcher'/>
    </section>
  )
}
