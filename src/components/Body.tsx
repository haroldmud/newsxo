import {Swiper, SwiperSlide} from "swiper/react"
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'
import { useState } from "react"
import 'swiper/swiper.min.css';
import SwiperCore, { Autoplay } from 'swiper';
import "swiper/css";
SwiperCore.use([Autoplay]);

export default function Body(){
  const slideArray : string[] = ['slideOne', 'slideTwo', 'slideThree', 'slideFour']
  const [slide, setSlide] = useState<any>();
  return(
    <div>
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
              slideArray.map((item, index) => (
                <SwiperSlide className="flex" key={index}>
                  {item}
                  </SwiperSlide>
                  ))
            }
          </Swiper>
          <div className="flex absolute right-[160px] gap-4 mt-2- p-3 bg-gray-50 md:right-5">
            <SlArrowLeft
              className="w-[30px] h-[30px] hover:text-primary hover:cursor-pointer"
              onClick={() => {
                slide.slidePrev();
              }}
            />
            <SlArrowRight
              className="w-[30px] h-[30px]  hover:text-primary hover:cursor-pointer"
              onClick={() => {
                slide.slideNext();
              }}
            />
          </div>
    </div>
  )
}