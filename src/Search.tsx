import 'swiper/swiper.min.css';
import "swiper/css";
import {Swiper, SwiperSlide} from "swiper/react"
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'
import { useEffect, useState } from "react"
import SwiperCore, { Autoplay } from 'swiper';
import { useSelector, useDispatch } from "react-redux";
import { SearchState } from './types/type';
import { Link } from 'react-router-dom';
import { searching } from './features/searchSlice';
import { SearchNameState } from './types/type';

SwiperCore.use([Autoplay]);

export default function Search(){
  const News:{}[] = useSelector((prev: SearchState) => prev.search.value)
  const [slide, setSlide] = useState<any>();
  const searcher: string = useSelector((prev: SearchNameState) => prev.searchName.value)
  
  const dispatchNews = useDispatch()
  useEffect(()=>{
    const handleNews = async()=>{
      try{
        const Publisher: string = `https://news-proxy.netlify.app/api/everything?q=${searcher}&pageSize=10&apiKey=baeaedd25636413da23a335f6001fd67`
        const response = await fetch(Publisher);
        const publishData = await response.json();
        dispatchNews(searching(publishData.articles))
      }catch(err){
        console.error(err);
        
      }
    }
    handleNews();
  },[searcher, dispatchNews])

  return(
    <>
      <div className='md:w-9/12 w-11/12 mx-auto relative h-fit group'>
        <h2 className='my-4 relative'><span className='text-blue-500 font-thin pr-2'>{searcher} Results</span><span className='rotate-45 border border-blue-500 h-3 w-3 absolute'></span></h2>
       <Swiper
          breakpoints={{
            639: {
              slidesPerView: 1,
            },
            1023: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
          }}
          onSwiper={(slide) => setSlide(slide)}
          loop
          autoplay={{
            delay: 3000,                // Set delay between slide transitions to 3 seconds
            disableOnInteraction: false // Continue autoplay even when user interacts with the swiper
          }}
    
          >
              {
              News?.slice(0,5)?.map((item:any, index:number) => (
                <SwiperSlide key={index}>
                  <Link to={`/publishers/${index}`} className='flex relative md:h-[30rem] h-fit'>
                    <img src={item.urlToImage} className='md:group-hover:brightness-100 brightness-50 md:w-full object-cover' alt="" />
                    <div className='absolute z-20 bottom-0 md:group-hover:bg-blue-300 color md:bg-white  md:w-[40%] w-[70%] h-fit md:p-5 p-1 md:font-thin md:group-hover:text-white md:text-black text-white font-bold text-left'>
                      <div className='md:text-auto text-[12px] text-blue-600 font-thin flex  gap-4 md:mb-4'>
                        <h2 >{item.source.name}</h2>
                        <p>{item.publishedAt.split('T').shift()}</p>
                      </div>
                      <h1 className='md:text-2xl '>{item.title}</h1>
                    </div>
                  </Link>
                  </SwiperSlide>
                  ))
            }
          </Swiper>

          <div className="flex absolute bottom-5 z-20 gap-4 md:right-8 right-2 h-fit">
            <SlArrowLeft
              className="hover:text-blue-500 text-white  hover:cursor-pointer rounded-full h-10 text-xl w-10 p-2 bg-blue-500 hover:bg-blue-300"
              onClick={() => {
                slide.slidePrev();
              }}
            />
            <SlArrowRight
              className=" hover:text-blue-500 text-white  hover:cursor-pointer rounded-full h-10 text-xl w-10 p-2 bg-blue-500 hover:bg-blue-300"
              onClick={() => {
                slide.slideNext();
              }}
            />
          </div>
    </div>
    <div className='md:w-9/12 w-11/12 mx-auto  grid md:grid-cols-3 grid-cols-2 gap-4 mt-4'>
      {
        News.map((item:any, index)=>
        <Link to={`/publishers/${index}`} key={index} className={`w-fit relative group overflow-hidden ${index ===1 ? 'row-span-2 h-full' : index === News.length-1 ? 'col-span-2  w-full' : ''} `}>
          <img src={item.urlToImage} className={`object-cover w-[310px]  group-hover:brightness-75 transition-transform duration-300 transform group-hover:scale-110 brightness-50 ${index ===1 ? 'h-full group-hover:rotate-2' : index === News.length-1 ? 'w-full h-[310px]' :'h-[310px] group-hover:rotate-6 '} `} alt="" />
          <div className='w-full absolute z-20 bottom-0 text-white px-4 py-2 border-t color'>
                      <h1 className='font-thin md:text-2xl text-left pb-2'>{(index ===1 || index === News.length-1)? item.description.slice(0,60) :item.title.slice(0,30)}...</h1>
                      <p className='font-thin md:text-auto text-[12px] text-left'>{index ===1 ? item.description.slice(0,200) :index === News.length-1 ? item.description.slice(0,100) :item.description.slice(0,50)}...</p>
                    </div> 
        </Link>
        )
      }
    </div>
    </>
  )
}