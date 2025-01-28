import React from 'react'
import img5 from "../assets/img5.png"
import img6 from "../assets/img6.png"
import { FaArrowRightLong } from "react-icons/fa6";

const Work = () => {
  return (
    <div className='container mx-auto mt-[120px]'>
     <h2 className='text-5xl font-mons font-semibold text-[#04170A] p-10'>How it’s <span className='text-[#318E4D]'>works?</span> </h2>

     <div className=" mt-[62px] flex">

<div className="w-3/5 p-10 "> 
<div className=" bg-bg5 bg-no-repeat p-3 flex ">

    <div className="w-1/2 pt-[45px] pl-[45px]">
    <div className="w-[86px] h-[34px] rounded-full bg-[#DCEEE2] flex justify-center items-center">
    <h3 className='font-pops text-base text-[#04170A]'>Step 01</h3>
</div>
<h1 className='font-pops text-[40px] text-[#DCEEE2] pt-6 leading-[60px]'>Sign Up & <br /> Create Your <br />Avatar</h1>
    </div>
    <div className="w-1/2">
    <img src={img5} alt=""  />
    </div>

</div>
 <h2 className='pt-9 font-pops font-bold text-xl text-[#318E4D]'>Step 02</h2>
<p className='font-pops text-2xl text-[#38453C] pt-2 leading-9'>Explore immersive worlds <br />and vibrant hubs.</p>
</div>

<div className=" w-2/5 mt-[70px]">
<div className="bg-[#04170A] p-4 rounded-[30px] flex gap-3">
<div className="w-2/5">
<img src={img6} alt="" />
</div>
<div className="w-3/5 p-3">
<h2 className='text-xl font-pops text-[#DCEEE2] pb-10'>Create a personalized <br /> account and design your <br />avatar for the metaverse.</h2>

<button className=' font-pops outline-none h-[60px] w-[156px] rounded-3xl drop-shadow-lg text-xl font-semibold text-[#DCEEE2] bg-gradient-to-b from-[#318E4D] to-[#135426]' >Get Started</button>
</div>
</div>
<div className=" h-[50px] w-[135px] rounded-full border-[1px] border-[#318E4D] ml-auto mt-10  flex items-center justify-center ">
    <div className=" m-1 ">
        <button className='text-xl text-center font-pops h-[40px] w-[85px] rounded-full bg-[#318E4D] text-[#DCEEE2]'>Next</button>
     
    </div>
    <div className=" text-xl text-[#318E4D]">
    < FaArrowRightLong/>
    </div>
</div>
</div>

     </div>
    </div>
  )
}

export default Work
