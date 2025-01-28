import React from 'react'


import { IoIosArrowDropright } from "react-icons/io";
import { BsCodeSquare } from "react-icons/bs";

const Social = () => {
  return (
    <div className='px-6 container mx-auto'>
      <h2 className='text-5xl text-center text-[#04170A] font-semibold font-mons'>Metaverse, Meet Your <br /> Social World</h2>

<div className="pt-[64px] flex">
    <div className="bg-shape h-[489px] bg-no-repeat w-1/2  ">      
       <div className=" h-[459px] w-[586px] bg-bg1 m-4 rounded-xl bg-no-repeat">
       <div className="flex justify-between  p-3">
       <div className="">
        <h2 className=' p-4 font-bold text-[#DCEEE2] text-4xl font-mons'>Virtual <br /> World  <br />Creation</h2>

        </div>
        <div className=" h-[66px] w-[66px] rounded-2xl bg-[#DCEEE2] text-[#318E4D] flex justify-center items-center text-3xl">
        <IoIosArrowDropright/>
        </div>
       </div>
       {/* top */}
      
        <div className=" m-3 h-[110px] w-[335px] rounded-[24px] bg-[#1354266E] flex items-center justify-center border-[1px]  border-[#318E4D]">

        <div className=" ">
          <button className=' font-pops h-[90px] w-[310px] rounded-[24px] border-none bg-gradient-to-r from-[#318E4D] to-[#135426] text-xl border-[1px] border-[#318E4D] text-[#DCEEE2] outline-none '>Empower users to create and customize their metaverse.</button>
        </div>
        </div>
    
       </div>

    </div>

      <div className="w-1/2 h-[489px] bg-bg3 bg-no-repeat p-4  pt-8 rounded-lg flex justify-between gap-5">

      <div className="w-1/2 bg-bg4 bg-no-repeat h-[449px] rounded-2xl">
      <div className="pt-[350px] pl-5">
      <div className="  h-[65px] w-[65px] flex justify-center items-center rounded-full bg-[rgba(220,238,226,0.39)]">
          <div className=" h-[45px] w-[45px] rounded-full bg-[#DCEEE263] flex justify-center items-center text-base">
          <BsCodeSquare/>
          </div>
         
        </div>
      </div>
      </div>
      <div className="w-1/2 mt-10">
      <h2 className='font-mons text-4xl font-bold text-[#DCEEE2]'> Virtual <br /> Events  <br />Hosting</h2>
      <p className='text-[#DCEEE2] text-xl pt-9 font-pops'>Provide tools for virtual <br />concerts, conferences, <br />and workshops.</p>
      <div className="mt-12"> 
      <button className=' font-pops outline-none h-[60px] w-[156px] rounded-3xl drop-shadow-lg text-xl font-semibold text-[#DCEEE2] bg-gradient-to-b from-[#318E4D] to-[#135426]' >Get Started</button>
      </div>

      
      </div>
      </div>

</div>
      
    </div>
  )
}

export default Social
