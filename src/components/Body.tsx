import 'swiper/swiper.min.css';
import "swiper/css";
import {Swiper, SwiperSlide} from "swiper/react"
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'
import { useState } from "react"
import SwiperCore, { Autoplay } from 'swiper';
import { useSelector } from "react-redux";
import { RootState } from "../types/type";

SwiperCore.use([Autoplay]);

export default function Body(){
  // const slideArray : string[] = ['slideOne', 'slideTwo', 'slideThree', 'slideFour']
  const News:{}[] = useSelector((prev: RootState) => prev.main.value)
  const [slide, setSlide] = useState<any>();
  return(
    <>
      <div className='md:w-9/12 w-11/12 mx-auto relative h-fit group'>
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
              News.map((item:any, index:number) => (
                <SwiperSlide key={index}>
                  <button className='flex relative md:h-[30rem] h-[25rem] '>
                    <img src={item.urlToImage} className='group-hover:brightness-100 brightness-50 md:w-full object-cover' alt="" />
                    <div className='absolute z-20 bottom-0 group-hover:bg-blue-300 bg-white w-[40%] h-fit p-5 font-thin group-hover:text-white text-left'>
                      <div className='flex gap-4 mb-4'>
                        <h2>{item.source.name}</h2>
                        <p>{item.publishedAt.split('T').shift()}</p>
                      </div>
                      <h1 className='text-2xl '>{item.title}</h1>
                    </div>
                  </button>
                  </SwiperSlide>
                  ))
            }
          </Swiper>

          <div className="flex absolute bottom-5 z-20 gap-4 md:right-8 right-5 h-fit">
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
    <div className='md:w-9/12 w-11/12 mx-auto  grid grid-cols-3 gap-4 mt-4'>
      {
        News.map((item:any, index)=>
        <button key={index} className={`w-fit relative group overflow-hidden ${index ===1 ? 'row-span-2 h-full' : ''} `}>
          <img src={item.urlToImage} className={`object-cover w-[310px]  group-hover:brightness-75 transition-transform duration-300 transform group-hover:scale-110 brightness-50 ${index ===1 ? 'h-full group-hover:rotate-2' : 'h-[310px] group-hover:rotate-6 '} `} alt="" />
          <div className='absolute z-20 bottom-0 text-white px-4 py-2 border-t color'>
                      <h1 className='font-thin text-2xl text-left pb-2'>{index ===1 ? item.description.slice(0,60) :item.title.slice(0,30)}...</h1>
                      <p className='font-thin text-left'>{index ===1 ? item.description.slice(0,200) : item.description.slice(0,50)}...</p>
                    </div>
        </button>
        )
      }
    </div>
    </>
  )
}