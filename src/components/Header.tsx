import { useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import { SlClose } from 'react-icons/sl'
import { Link } from 'react-router-dom';

export default function Header(){
  const [search, setSearch] = useState<boolean>(false);

  function handleSearch():void {
    setSearch(true);
  }

  return(
    <>
    <header className="relative flex w-full justify-between border py-5 px-6">
        <Link to='/' className='font-bold text-4xl wordy'>News<span className='text-blue-500 word'>X0</span></Link>
        <button onClick={handleSearch} className='md:border md:w-[30%] flex justify-between my-auto cursor-text md:bg-slate-200 pr-2'>
          <p className='my-auto md:block hidden pl-6 text-gray-400'>search newsXO</p>
          <CiSearch className='text-4xl my-auto text-blue-500 font-bolder'/>
        </button>
        <div className={`${search ? 'block' : 'hidden'} fixed h-[100vh] overflow-hidden color z-50 w-full top-0 left-0`}>
          <button onClick={()=>{setSearch(false)}} className='w-full'><SlClose className='mt-32 text-blue-500 mx-auto font-bold text-2xl'/></button>
          <form className='border bg-white md:w-6/12 w-10/12 mx-auto mt-4 flex' action="searching">
            <CiSearch className='text-blue-500 text-4xl my-auto pl-2'/>
            <input placeholder='Search' type="search" className='h-full w-full outline-none p-4'/>
            <button className='bg-blue-500 px-4'>search</button>
          </form>
        </div>
      </header>
      <div className='h-fit w-full bg-blue-500 text-[12px] text-center text-white font-thin'>hope you're enjoying the journey with us  ❤ 
</div>
      </>
  )
}


