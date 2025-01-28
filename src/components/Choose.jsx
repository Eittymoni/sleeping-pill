import React from 'react'
import { TfiWorld } from "react-icons/tfi";
import { FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Choose = () => {
   const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  return (
    <div className='mt-[95px] pb-10 overflow-hidden'>
     <div className=" container mx-auto flex justify-between ">
     <div className=" w-1/2">
        <h3 className='  font-pops text-xl font-semibold text-[#318E4D] uppercase'>Why choose us</h3>
        <h1 className=' font-mons pt-6 text-5xl font-medium text-[#04170A]'>Accessible Metaverse,<br /> Anytime, <span className='text-[#318E4D] '> Anywhere</span></h1>
     </div>
     <div className="w-1/2 p-[50px]">
     <h2 className='text-xl font-pops text-[#04170A] font-semibold'>Monetize Your Virtual Dreams</h2>
     <p className='font-pops text-xl text-[#38453C] pt-4 '>A platform designed for all devices, <br /> delivering seamless access and optimized performance to keep you <br /> connected to your digital universe.</p>
     </div>
     </div>


<div className="pt-10 ">
<Slider {...settings}>


<div className="pt-10 group">
<div className="w-[408px] rounded-3xl bg-[#04170A] p-7 ease-in-out transition-transform transform group-hover:-translate-y-10">
<div className="  flex justify-between items-center ">
    <h2 className='text-xl font-pops text-[#DCEEE2]'>01 /</h2>

    <div className="w-[53px] h-[53px] rounded-full bg-[#1354266E] border-[1px] border-[#DCEEE2] flex justify-center items-center">

        <div className="h-[33px] w-[33px] rounded-full bg-[#DCEEE2] flex justify-center items-center text-[#318E4D]">
        <TfiWorld/>
        </div>
    </div>
</div>

<div className="pt-[127px]">
<h2 className='font-pops font-semibold text-xl text-[#318E4D]'>Metaverse</h2>
<h1  className='font-pops font-semibold text-4xl text-[#DCEEE2]'>Immersive <br />Experiences</h1>
</div>
<div className="flex gap-3 pt-10">
    <a href="#" className='font-pops text-xl text-[#DCEEE2] underline underline-offset-1'>Explore more</a>
    <div className="w-[27px] h-[27px] rounded-full bg-[#318E4D] text-white flex justify-center items-center ">
    <FaArrowRight/>
    </div>
</div>
 </div>

</div>

<div className="pt-10 group">
<div className="w-[408px] rounded-3xl bg-gradient-to-t from-[#04170A] to-[#C4C4C4] p-7 transition-transform transform group-hover:-translate-y-10 ">
<div className="  flex justify-between items-center">
    <h2 className='text-xl font-pops text-[#DCEEE2]'>02 /</h2>

    <div className="w-[53px] h-[53px] rounded-full bg-[#1354266E] border-[1px] border-[#DCEEE2] flex justify-center items-center">

        <div className="h-[33px] w-[33px] rounded-full bg-[#DCEEE2] flex justify-center items-center text-[#318E4D]">
        <TfiWorld/>
        </div>
    </div>
</div>

<div className="pt-[127px]">
<h2 className='font-pops font-semibold text-xl text-[#DCEEE2]'>Metaverse</h2>
<h1  className='font-pops font-semibold text-4xl text-[#DCEEE2]'>Immersive <br />Experiences</h1>
</div>
<div className="flex gap-3 pt-10">
    <a href="#" className='font-pops text-xl text-[#DCEEE2] underline underline-offset-1'>Explore more</a>
    <div className="w-[27px] h-[27px] rounded-full bg-[#318E4D] text-white flex justify-center items-center ">
    <FaArrowRight/>
    </div>
</div>
 </div>

</div>

<div className="pt-10 group">
<div className="w-[408px] rounded-3xl bg-[#04170A] p-7 transition-transform transform group-hover:-translate-y-10 ">
<div className="  flex justify-between items-center">
    <h2 className='text-xl font-pops text-[#DCEEE2]'>03 /</h2>

    <div className="w-[53px] h-[53px] rounded-full bg-[#1354266E] border-[1px] border-[#DCEEE2] flex justify-center items-center">

        <div className="h-[33px] w-[33px] rounded-full bg-[#DCEEE2] flex justify-center items-center text-[#318E4D]">
        <TfiWorld/>
        </div>
    </div>
</div>

<div className="pt-[127px]">
<h2 className='font-pops font-semibold text-xl text-[#318E4D]'>Metaverse</h2>
<h1  className='font-pops font-semibold text-4xl text-[#DCEEE2]'>Immersive <br />Experiences</h1>
</div>
<div className="flex gap-3 pt-10">
    <a href="#" className='font-pops text-xl text-[#DCEEE2] underline underline-offset-1'>Explore more</a>
    <div className="w-[27px] h-[27px] rounded-full bg-[#318E4D] text-white flex justify-center items-center ">
    <FaArrowRight/>
    </div>
</div>
 </div>

</div>
<div className=" pt-10 group">
<div className="w-[408px] rounded-3xl bg-gradient-to-t from-[#04170A] to-[#C4C4C4] p-7 transition-transform transform group-hover:-translate-y-10">
<div className="  flex justify-between items-center">
    <h2 className='text-xl font-pops text-[#DCEEE2]'>04 /</h2>

    <div className="w-[53px] h-[53px] rounded-full bg-[#1354266E] border-[1px] border-[#DCEEE2] flex justify-center items-center">

        <div className="h-[33px] w-[33px] rounded-full bg-[#DCEEE2] flex justify-center items-center text-[#318E4D]">
        <TfiWorld/>
        </div>
    </div>
</div>

<div className="pt-[127px]">
<h2 className='font-pops font-semibold text-xl text-[#DCEEE2]'>Metaverse</h2>
<h1  className='font-pops font-semibold text-4xl text-[#DCEEE2]'>Immersive <br />Experiences</h1>
</div>
<div className="flex gap-3 pt-10">
    <a href="#" className='font-pops text-xl text-[#DCEEE2] underline underline-offset-1'>Explore more</a>
    <div className="w-[27px] h-[27px] rounded-full bg-[#318E4D] text-white flex justify-center items-center ">
    <FaArrowRight/>
    </div>
</div>
 </div>

</div>


</Slider>
</div>





     
    </div>
  )
}

export default Choose
