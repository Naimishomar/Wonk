import { FaArrowRight } from "react-icons/fa";

function Footer() {
  return (
    <div className="pt-40 bg-[#FFF] text-white h-full w-full flex justify-center flex-col relative">
        <img src="https://framerusercontent.com/images/VWqrkNbGfBVGzJzaTrC9MLgrF8.png?scale-down-to=2048&width=2464&height=1335" alt="" className="rounded-t-4xl absolute h-full w-full object-cover"/>
        <div className="bg-black/50 w-full h-full absolute top-20 rounded-t-4xl left-0 z-5"></div>
        <h1 className=" text-4xl md:text-8xl text-center text-white z-10 tracking-tighter font-semibold pt-20">Hire better. Faster. <br />Take your time back.</h1>
        <p className="z-10 text-center md:text-[22px] pt-5 md:pt-10 font-semibold text-white">Make hiring easier than ever.</p>
        <div className="z-10 flex justify-center">
          <button className='bg-white py-4 px-6 rounded-xl my-7 flex items-center gap-3 w-fit'>
              <div className='text-white bg-black p-2 rounded-xl text-sm'>
                  <FaArrowRight className=''/>
              </div>
              <p className='text-md font-semibold text-black'>Get early access</p>
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-between w-full h-full z-10 font-semibold text-xl px-5 md:px-20 pt-10">
          <div>
            <img src="wone.png" alt="" className="w-30 py-3"/>
            <p className="text-md">Your own, personal recruiter. <br />Completely automated.</p>
            <p className="py-8">Follow us on Linkedin</p>
          </div>
          <div className="flex gap-10 md:gap-30">
            <div>
              <h1>Features</h1>
              <ul className="py-3">
                <li>Overview</li>
                <li>Sourcing</li>
                <li>Evaluation</li>
                <li>Tracking</li>
                <li>Communication</li>
              </ul>
            </div>
            <div>
              <h1>Product</h1>
              <ul className="py-3">
                <li>Pricing</li>
                <li>Early access</li>
              </ul>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Footer