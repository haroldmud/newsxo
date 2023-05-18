import { useState, useEffect } from "react";
import {GoPrimitiveDot} from 'react-icons/go'
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'
import { useSelector, useDispatch } from "react-redux";
import { useRef } from "react";
import SwiperCore, { Autoplay } from 'swiper';
import { seeking } from "../features/sourceSlide";
import { getSources } from "../api/data";

SwiperCore.use([Autoplay]);
export default function Footer() {
  const source = useSelector((prev:any)=> prev.source.value);
  const sourceDispatch = useDispatch()
  const elementRef = useRef(null);
  const [arrowDisable, setArrowDisable] = useState(true);
  const handleHorizantalScroll = (element:any, speed:any, distance:any, step:any) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      element.scrollLeft += step;
      scrollAmount += Math.abs(step);
      if (scrollAmount >= distance) {
        clearInterval(slideTimer);
      }
      if (element.scrollLeft === 0) {
        setArrowDisable(true);
      } else {
        setArrowDisable(false);
      }
    }, speed);
  };

  useEffect(()=>{
    const handleSources=async ()=>{
      try{
          const sourceData = await getSources();
          sourceDispatch(seeking(sourceData))
      }catch(err){
        console.error(err)
      }
    }
    handleSources();
  },[sourceDispatch])
  return (
    <div className="bg-blue-500 mt-12">
      <div className="h-fit mt-4 mx-auto md:w-10/12 w-11/12">
        <div className="text-white font-bold">Our pulishers:</div>
        <div className="bg-white h-fit mt-4 mx-auto flex">
        <button
          onClick={() => {
            handleHorizantalScroll(elementRef.current, 25, 100, -10);
          }}
          disabled={arrowDisable}
          className=" px-2 text-blue-500"
        >
          <SlArrowLeft/>
        </button>
       
      <div className="img-container" ref={elementRef}>
        {source.map((placement:any, i:number) => (
          <button className="h-fit whitespace-nowrap flex font-thin">{placement.name} <span className="my-auto px-2 text-blue-500"><GoPrimitiveDot/></span> <span></span></button>
        ))}
      </div>
      <button
          onClick={() => {
            handleHorizantalScroll(elementRef.current, 25, 100, 10);
          }}
          className=" px-2 text-blue-500"
        >
          <SlArrowRight/>
        </button>
        </div>

      </div>
      <div className="flex md:justify-center justify-start  mt-4">
      
      <div className="text-white flex  w-fit md:flex-row flex-col gap-4 my-20 md:pl-auto pl-4">
        <h3 className="mb-4 font-bold ">Our fields:</h3>
        <div className="md:text-base">
          <ul className="font-thin grid md:grid-flow-col grid-rows-3 gap-3">
            <li className="underline hover:no-underline"><a href="https://www.google.com">Education</a></li>
            <li className="underline hover:no-underline"><a href="https://www.google.com">Employment</a></li>
            <li className="underline hover:no-underline"><a href="https://www.google.com">Networking</a></li>
            <li className="underline hover:no-underline"><a href="https://www.google.com">Industry</a> </li>

            <li className="underline hover:no-underline"><a href="https://www.google.com">Sports</a></li>
            <li className="underline hover:no-underline"><a href="https://www.google.com">Economy</a></li>
            <li className="underline hover:no-underline"><a href="https://www.google.com">Politics</a></li>
            <li className="underline hover:no-underline"><a href="https://www.google.com">Weather</a> </li>
         
            <li className="underline hover:no-underline"><a href="https://www.google.com">Governements</a></li>
            <li className="underline hover:no-underline"><a href="https://www.google.com">Advertisements</a></li>
            <li className="underline hover:no-underline"><a href="https://www.google.com">Loisirs</a></li>
          </ul>
        </div>
      </div>
      </div>
    </div>
  )
}
