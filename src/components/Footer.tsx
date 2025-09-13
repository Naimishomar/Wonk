import { FaArrowRight } from "react-icons/fa";

function Footer() {
  return (
    <div className="pt-40 bg-[#FFF] text-white h-full w-full flex justify-center flex-col relative">
        <img src="https://framerusercontent.com/images/VWqrkNbGfBVGzJzaTrC9MLgrF8.png?scale-down-to=2048&width=2464&height=1335" alt="" className="rounded-t-4xl absolute h-full w-full object-cover"/>
        <div className="bg-black/20 w-full h-full absolute top-20 rounded-t-4xl left-0 z-5"></div>
        <h1 className=" text-[72px] md:text-[72px] text-center text-white z-10 tracking-[-2.5px] leading-[79.2px] font-semibold pt-10">Hire better. Faster. <br />Take your time back.</h1>
        <p className="z-10 text-center md:text-[20px] tracking-[-0.3px] pt-5 md:pt-7 font-semibold text-white">Make hiring easier than ever.</p>
        <div className="z-10 flex justify-center">
          <button className='bg-white py-4 px-6 rounded-xl my-7 flex items-center gap-3 w-fit'>
              <div className='text-white bg-black p-2 rounded-xl text-sm'>
                  <FaArrowRight className=''/>
              </div>
              <p className='text-md font-semibold text-black'>Get early access</p>
          </button>
        </div>
        <div className="flex items-center justify-between w-full h-full z-10 font-semibold text-xl px-5 md:px-20 pt-20 pb-15">
          <div className="w-[50%]">
            <img src="wone.png" alt="" className="w-30 py-3"/>
            <p className="text-md">Your own, personal recruiter. <br />Completely automated.</p>
            <p className="py-8">Follow us on Linkedin</p>
          </div>
          <div className="flex justify-center text-[18px] gap-25 w-[50%] pr-5">
            <div>
              <h1>Features</h1>
              <ul className="py-3 flex flex-col gap-2 text-[#FFFFFF90]">
                <li className="hover:underline cursor-pointer">Overview</li>
                <li className="hover:underline cursor-pointer">Sourcing</li>
                <li className="hover:underline cursor-pointer">Evaluation</li>
                <li className="hover:underline cursor-pointer">Tracking</li>
                <li className="hover:underline cursor-pointer">Communication</li>
              </ul>
            </div>
            <div>
              <h1>Product</h1>
              <ul className="py-3 flex flex-col gap-2 text-[#FFFFFF90]">
                <li className="hover:underline cursor-pointer">Pricing</li>
                <li className="hover:underline cursor-pointer">Early access</li>
              </ul>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Footer