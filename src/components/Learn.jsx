import React from 'react'
import img1 from "../assets/img1.png"
import img2 from "../assets/img.png"
import img3 from "../assets/img4.png"
import { SlFrame } from "react-icons/sl";
import { IoIosGitCompare } from "react-icons/io";
import img4 from "../assets/img3.png"

const Learn = () => {
  return (
    <div className='pt-[195px] '>
     <div className=" flex justify-between">
        <div className="">
            <img src={img1} alt="img" />
        </div>
        <div className=" text-center">
        <h2 className='text-[#04170A] font-semibold text-6xl font-mons'>Learn and Grow in <br /> the  <span className='text-[#318E4D]'> Metaverse</span></h2>
        </div>
        <div className=" pr-3">
            <img src={img2} alt="img" />
        </div>
     </div>
     {/* top */}
     <div className="pt-6 flex justify-between">
     <div className=" mt-[320px] ">
        <img src={img3} alt="img" />
     </div>
     <div className="  bg-[#C4C4C4] rounded-[40px] p-5 h-[479px]">
    <div className="p-6 flex justify-between items-center">
        <div className="h-[40px] w-[40px] rounded-full bg-[#FFFFFF38] border-[1px]  flex items-center justify-center text-white">
    <SlFrame/>
        </div>
        <div className="w-[170px] h-[110px] rounded-full bg-[#04170A] flex items-center gap-4">
            <h2 className=' font-pops text-xl pl-5 text-white'>360° <br />
            View</h2>
            <div className="h-[82px] w-[82px] rounded-full bg-[#DCEEE2] flex justify-center items-center">
                <div className="h-[62px] w-[62px] rounded-full bg-[#318E4D] text-2xl text-[#DCEEE2] flex justify-center items-center">
                    <IoIosGitCompare/>
                </div>
            </div>

        </div>

    </div>

    <div className=" mt-[200px] bg-[#DCEEE263] rounded-full border-[1px] border-[#DCEEE2]">
            <ul className='flex items-center  justify-between p-2'>
                <li className=' font-pops px-6 py-3 bg-[#DCEEE2] rounded-full text-base text-[#04170A]'>Monetize</li>
                <li className=' font-pops px-6 py-3 bg-[#DCEEE2] rounded-full text-base text-[#04170A]'>VirtualReality</li>
                <li className=' font-pops px-6 py-3 bg-[#DCEEE2] rounded-full text-base text-[#04170A]'>Game</li>
                <li className=' font-pops px-6 py-3 bg-[#DCEEE2] rounded-full text-base text-[#04170A]'>Learn</li>
                <li className=' font-pops px-6 py-3 bg-[#DCEEE2] rounded-full text-base text-[#04170A]'>Create</li>
                <li className=' font-pops px-6 py-3 bg-[#DCEEE2] rounded-full text-base text-[#04170A]'>Blockhain</li>
                <li className=' font-pops px-6 py-3 bg-[#DCEEE2] rounded-full text-base text-[#04170A]'>Metaverse</li>
                <li className=' font-pops px-6 py-3 bg-[#DCEEE2] rounded-full text-base text-[#04170A]'>Worlds</li>
                <li className=' font-pops px-6 py-3 bg-[#DCEEE2] rounded-full text-base text-[#04170A]'>Vision</li>
                <li className=' font-pops px-6 py-3 bg-[#DCEEE2] rounded-full text-base text-[#04170A]'>Thrive</li>
            </ul>
      </div>
     
     </div>
     <div className=" mt-[200px]">
     <img src={img4} alt="" />
     </div> 
     </div>
    
    </div>
  )
}

export default Learn
