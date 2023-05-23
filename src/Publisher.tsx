import 'swiper/swiper.min.css';
import "swiper/css";
import {Swiper, SwiperSlide} from "swiper/react"
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'
import { useEffect, useState } from "react"
import SwiperCore, { Autoplay } from 'swiper';
import { useSelector, useDispatch } from "react-redux";
import { PublishState } from './types/type';
import { Link } from 'react-router-dom';
import { publishing } from './features/publisherSlice';
import { NameState } from './types/type';
import Loading from './components/Loading';
import Error from './Error';
import { NewsState } from './types/type';

SwiperCore.use([Autoplay]);

export default function Publishers(){
  const News: NewsState[]= useSelector((prev: PublishState) => prev.publish.value)
  const [slide, setSlide] = useState<null | SwiperCore>();
  const fetcher = useSelector((prev: NameState) => prev.name.value)
  const [loading, setLoading] = useState<boolean>(true)
  
  const dispatchNews = useDispatch()
  useEffect(()=>{
    const handleNews = async()=>{
      try{
        const Publisher: string = `https://news-proxy.netlify.app/api/everything?sources=${fetcher}&pageSize=10&apiKey=a23b1fb564c54149a625bf59f9629877`
        const response = await fetch(Publisher);
        const publishData = await response.json();
        dispatchNews(publishing(publishData.articles))
        setLoading(false)
      }catch(err){
        setLoading(false)
      }
    }
    handleNews();
  },[fetcher, dispatchNews])

  if (loading) {
    return(
      <Loading/>
    )
  } else if(News){
    return(
      <>
      <div className='md:w-9/12 mx-auto container md:block hidden relative h-fit group w-full'>
        <h2 className='my-4 relative'><span className='text-blue-500 font-[300] pr-2'>{fetcher?.toLocaleUpperCase()}</span><span className='rotate-45 border border-blue-500 h-3 w-3 absolute'></span></h2>
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
              News.slice(0,5).map((item:NewsState, index:number) => (
                <SwiperSlide key={index}>
                  <Link to={`/${index}`} className='flex relative md:h-[30rem] h-[25rem] '>
                    <img src={item.urlToImage} className='md:group-hover:brightness-100 brightness-50 md:w-full object-cover' alt="" />
                    <div className='absolute z-20 bottom-0 md:group-hover:bg-blue-300 color md:bg-white  md:w-[40%] w-[70%] h-fit md:p-5 p-1 md:font-[300] md:group-hover:text-white md:text-black text-white font-bold text-left'>
                      <div className='md:text-auto text-[12px] text-blue-600 font-[300] flex  gap-4 md:mb-4'>
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

          <div className="flex absolute md:bottom-5 bottom-3 z-20 gap-4 md:right-8 right-5 h-fit">
            <SlArrowLeft
              className="hover:text-blue-500 animate-pulse group-hover:animate-none text-white  hover:cursor-pointer rounded-full md:h-10 h-6 text-xl md:w-10 w-6  p-2 bg-blue-500 hover:bg-blue-300"
              onClick={() => {
                slide?.slidePrev();
              }}
            />
            <SlArrowRight
              className=" hover:text-blue-500 animate-pulse group-hover:animate-none text-white  hover:cursor-pointer rounded-full md:h-10 h-6 text-xl md:w-10 w-6  p-2 bg-blue-500 hover:bg-blue-300"
              onClick={() => {
                slide?.slideNext();
              }}
            />
          </div>
    </div>
    <div className='md:w-9/12 w-11/12 mx-auto container block md:hidden relative h-fit group animate-pulse'>
        <h2 className='my-4 relative'><span className='text-blue-500 font-[300] pr-2'>{fetcher?.toLocaleUpperCase()}</span><span className='rotate-45 border border-blue-500 h-3 w-3 absolute'></span></h2>
        <img src={News[5]?.urlToImage} alt="" />
    </div>
    <div className='md:w-9/12 w-11/12 mx-auto container grid md:grid-cols-3 grid-cols-2 gap-4 mt-4'>
      {
        News.map((item:NewsState, index)=>
        <Link to={`/publishers/${index}`} key={index} className={`w-fit overflow-hidden relative group ${index ===1 ? 'row-span-2 h-full' : index === News.length-1 ? 'col-span-2  w-full' : ''} `}>
          <img src={item.urlToImage} className={`object-cover w-[310px]  group-hover:brightness-75 transition-transform duration-300 transform md:group-hover:scale-110 brightness-50 ${index ===1 ? 'h-full group-hover:rotate-2' : index === News.length-1 ? 'w-full h-[310px]' :'h-[310px] md:group-hover:rotate-6 '} `} alt="" />
          <div className='w-full absolute z-20 bottom-0 text-white px-4 py-2 border-t color'>
                      <h1 className='font-[300] md:text-2xl text-left pb-2'>{(index ===1 || index === News.length-1)? item.description.slice(0,60) :item.title.slice(0,30)}...</h1>
                      <p className='font-[300] md:text-auto text-[13px] text-left'>{index ===1 ? item.description.slice(0,200) :index === News.length-1 ? item.description.slice(0,100) :item.description.slice(0,50)}...</p>
                    </div> 
        </Link>
        )
      }
    </div>
    </>    )
  } else{
    return(
      <Error/>
    )
  }
  
}