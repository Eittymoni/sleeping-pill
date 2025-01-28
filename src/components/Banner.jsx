import pill from "../assets/pill.png"
import { AiOutlineAndroid } from "react-icons/ai";
import thum from "../assets/thumb.png"
import chat from "../assets/chat.png"
import payment from "../assets/payment.png"
import QA from "../assets/quality.png"
import  Deli from "../assets/delivery.png"

const Banner = () => {
  return (
    <div className="ml-2 mt-[120px] ">
        <div className=" flex items-center ">
            <div className="w-[80%] bg-ban bg-no-repeat bg-cover h-[300px]">

                <div className=" rounded-lg border-dashed border-[1px] bg-white border-black w-[32%] flex gap-2 justify-between items-center px-3 py-2 absolute top-[350px] left-[650px]">
                    <div className="">
                        <h2 className="text-2xl font-bold uppercase">Get <span className="italic">10% off</span>  on</h2>
                        <h2 className="text-2xl font-bold uppercase" >every order!</h2>
                    </div>
                    <div className=" ">
                        <h3 className="text-xl font-bold uppercase">Apply Code</h3>
                        <button className="bg-[#002039] text-3xl font-bold uppercase text-white border-dashed border-[1px] px-2"> SLEEP2025</button>
                    </div>

                </div>
            </div>
            <div className="w-[20%] bg-[#057793] py-2 flex flex-col justify-center items-center h-[300px]">
            <img src={pill} alt=" pill" />
            <button className=" border-dashed border-[1px] border-white text-xl font-bold uppercase px-3 py-2 text-white mt-5"> Get 30 free pills</button>
            <p className="text-base text-white font-bold pt-5">With 1st Mobile App Order</p>
            <button className=" bg-[#002039]  hover:bg-green-600 border-[1px] border-white text-xl font-bold uppercase px-3 py-2 text-white flex gap-2 mt-5"> <AiOutlineAndroid /> read more</button>
                <p className="text-white text-base italic pt-2">For Android Devices Only</p>
            </div>
        </div>
      <div className=" flex justify-between mt-1 gap-2 ">
        <div className="bg-[#057793] flex items-center justify-center py-3 px-6 gap-3 w-[20%]">
            <div className="">
                <img src={thum} alt="" />
            </div>
            <div className=" ">
                <h2 className="font-bold text-xl text-white">100% Satisfaction</h2>
                <p className="text-lg text-white">Feedback</p>
            </div>
        </div>
        <div className="bg-[#057793] flex items-center justify-center ppy-3 px-6 gap-3 w-[20%]">
            <div className="">
                <img src={ chat} alt="" />
            </div>
            <div className=" ">
                <h2 className="font-bold text-xl text-white"> 24/7 Support</h2>
                <p className="text-lg text-white">Customer Care</p>
            </div>
        </div>
        <div className="bg-[#057793] flex items-center justify-center py-3 px-6 gap-3 w-[20%] ">
            <div className="">
                <img src={payment} alt="" />
            </div>
            <div className=" ">
                <h2 className="font-bold text-xl text-white">Payment</h2>
                <p className="text-lg text-white">Secure System</p>
            </div>
        </div>
        <div className="bg-[#057793] flex items-center justify-center py-3 px-6 gap-3 w-[20%]">
            <div className="">
                <img src={QA} alt="" />
            </div>
            <div className=" ">
                <h2 className="font-bold text-xl text-white"> Quality Assurance</h2>
                <p className="text-lg text-white">100% Secure</p>
            </div>
        </div>
        <div className="bg-[#057793] flex items-center justify-center py-3 px-6 gap-3 w-[20%]">
            <div className="">
                <img src={ Deli } alt="" />
            </div>
            <div className=" ">
                <h2 className="font-bold text-xl text-white">Fast Delivery</h2>
                
            </div>
        </div>

      </div>
    </div>
  )
}

export default Banner
