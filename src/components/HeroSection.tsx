import { FaArrowRight } from "react-icons/fa";
import AnimatedCards from "./AnimatedCards";
import { motion } from "framer-motion";

function HeroSection() {
  const headingText = "Recruiting system that helps you hire better talent faster.";
  const paraText = "Source and evaluate extraordinary talent, automatically. Save 4 weeks per role, on average.";

  const words = headingText.split(" ");
  const para = paraText.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        stiffness: 600,
        damping: 40,
      },
    },
  };
  return (
    <div>
        <div className='hero flex flex-col justify-center md:pt-35 xl:pt-40 md:px-20 items-center bg-[#F5F3ED] h-full md:h-full xl:h-full w-full text-center'>
            <motion.h1
            variants={container}
            initial="hidden"
            animate="visible"
            className="text-[56px] leading-10 xl:text-[70px] text-black font-semibold md:leading-20 tracking-[-3.5px] text-center"
            >
            {words.map((word, index) => {
                const isLineBreak = word === "helps";
                return (
                <span key={index}>
                    <motion.span variants={child} className="inline-block mr-3">
                    {word}
                    </motion.span>
                    {isLineBreak && <br />}
                </span>
                );
            })}
            </motion.h1>
            <motion.p variants={container} initial="hidden" animate="visible" className='tracking-[-0.3px] font-medium md:text-[20px] pt-6 px-10'>
                {para.map((word, index) => {
                    const isLineBreak = word === "automatically.";
                    return (
                    <span key={index}>
                        <motion.span variants={child} className="mr-1">
                        {word}
                        </motion.span>
                        {isLineBreak && <br />}
                    </span>
                    );
                })}
            </motion.p>
            <button className='bg-white py-4 px-7 max-w-56 justify-between rounded-xl mt-7 flex items-center gap-4 cursor-pointer'>
                <div className='text-white bg-black p-[9px] rounded-xl text-sm'>
                    <FaArrowRight className=''/>
                </div>
                <p className='text-md'>Get early access</p>
            </button>
        </div>

        <AnimatedCards/>

        <div className="secondPage grid grid-cols-1 md:grid-cols-2 bg-[#F5F3ED] items-center gap-40 h-full w-full py-20 px-30 relative">
            <div>
                <h1 className="text-[30px] leading-[36px] font-semibold tracking-[-0.8px]">Your own, personal recruiter. <br />Completely automated.</h1>
                <p className="font-semibold text-[18px] tracking-[-0.2px] leading-[25.2px] py-5">Wone manages your entire hiring process. Attract, source, qualify and interview candidates automatically with contextual AI that understands your needs beyond tags and keywords and leaves you only with the best.</p>
            </div>
            <div className="absolute h-[250px] w-[1px] bg-black/10 left-[50%]"></div>
            <div>
                <h1 className="text-[30px] leading-[36px] font-semibold tracking-[-0.8px]">Win back time. <br />Improve your results.</h1>
                <p className="font-semibold text-[18px] tracking-[-0.2px] leading-[25.2px] py-5">Save weeks on repetitive work. Just post a job description and let Wone do the hard work. Take over only when the candidates have been qualified, so you're not wasting time weeding out unqualified talent.</p>
            </div>
        </div>

        <div className="thirdPage bg-[#FFFEFC] h-full w-full px-20 py-30">
            <div className="bg-[#F5F3ED] h-full w-full rounded-[70px] px-20 py-20">
                <div className="h-full w-full">
                    <h1 className="text-[80px] leading-20 tracking-tighter font-semibold">Source, track and <br /> hire talent in one <br /> place.</h1>
                </div>
                <div className="flex items-center gap-15 h-full w-full pt-20">
                    <div className="w-[40%]">
                        <h1 className="text-[18px] leading-[25.2px] tracking-[-0.2px] font-semibold">Save weeks on repetitive work. Just post a job description and Wone will source and qualify talent so you don't have to sift through hundreds of resumes. <br /> <br />Take over only when the candidates have been qualified, so you're not wasting time weeding out unqualified talent.</h1>
                        <button className='bg-black py-4 px-6 rounded-xl my-7 flex items-center gap-3'>
                            <div className='text-black bg-white p-2 rounded-xl text-sm'>
                                <FaArrowRight/>
                            </div>
                            <p className='text-md text-white font-semibold'>Get early access</p>
                        </button>
                    </div>
                    <div className="w-[70%]">
                        <img src="https://framerusercontent.com/images/3ME3Fm0NEvMpVl78mVBRNUPqQD4.jpeg?scale-down-to=2048&width=2688&height=1536" alt="" className="w-full h-96 object-cover rounded-4xl hidden md:block"/>
                    </div>
                </div>
            </div>
        </div>

        <div className="forthPage flex flex-col items-center h-full w-full px-20 bg-[#FFFEFC]">
            <div className="flex justify-between items-end gap-20 h-full w-full">
                <div className="max-w-[135%]">
                    <p className="text-xl font-semibold py-5">Sourcing</p>
                    <h1 className="text-[48px] tracking-[-2px] leading-[52.8px] font-semibold">Find exceptional talent <br /> others miss, magically.</h1>
                    <p className="text-xl tracking-[-0.5px] leading-[26.2px] font-semibold py-5 text-gray-800">Wone actively finds candidates using natural language, contextual search, going beyond boolean filtering to find talent that matches your exact needs. <br /> <br />Save weeks sourcing and get a curated list of candidates in front of you in as little as 20 seconds.</p>
                </div>
                <div className="bg-black flex justify-between hover:px-7 transition-all duration-500 items-center px-10 py-7 rounded-4xl text-white hover:underline w-full ">
                    <div>
                        <h1 className="text-[18px] font-semibold tracking-tighter">Learn about Sourcing</h1>
                        <p className="text-[17px] text-gray-400">Save weeks sourcing talent</p>
                    </div>
                    <div className="bg-white text-black p-2 rounded-xl">
                        <FaArrowRight className="text-sm"/>
                    </div>
                </div>
            </div>
            <div className="my-20 rounded-4xl relative w-full">
                <img src="https://framerusercontent.com/images/Jh1NT8SB8uwOyF6M07roAF1Cvuw.jpg?scale-down-to=2048&width=2912&height=1632" alt="" className="rounded-4xl"/>
                <img src="https://framerusercontent.com/images/UkDreeiOyc4XIbvui5op6sQyGCM.png?scale-down-to=2048&width=5280&height=3360" alt="" className="absolute bottom-0 w-[80%] left-[50%] -translate-x-1/2 rounded-t-3xl bg-red-700"/>
            </div>
        </div>

        <div className="fifthPage flex flex-col items-center h-full w-full px-20 bg-[#FFFEFC]">
            <div className="flex justify-between items-end gap-20 h-full w-full">
                <div className="max-w-[135%]">
                    <p className="text-xl font-semibold py-5">Evaluation</p>
                    <h1 className="text-5xl tracking-tighter font-semibold">Evaluate and qualify talent with precision, instantly.</h1>
                    <p className="text-xl font-semibold py-5 text-gray-800">Wone’s deep evaluation goes beyond resume basics to spot true role fit, even when it isn’t obvious on a profile. It explains exactly why each candidate is a fit, along with any potential weaknesses. <br /><br />Optionally, Wone runs an automated AI video interview to qualify candidates and deliver structured assessments, so your team doesn’t have to.</p>
                </div>
                <div className="bg-black flex justify-between hover:px-7 hover:underline transition-all duration-500 items-center px-10 py-7 rounded-4xl text-white w-full">
                    <div>
                        <h1 className="text-[18px] font-semibold tracking-tighter">Learn about Evaluation</h1>
                        <p className="text-[17px] text-gray-400">Evaluate talent in minutes</p>
                    </div>
                    <div className="bg-white text-black p-2 rounded-xl">
                        <FaArrowRight className="text-sm"/>
                    </div>
                </div>
            </div>
            <div className="py-20 rounded-4xl relative w-full">
                <img src="https://framerusercontent.com/images/Eadpks3Rk5zFF3FVL1aVd0Nnr4.jpg?scale-down-to=2048&width=2912&height=1632" alt="" className="rounded-4xl"/>
                <img src="https://framerusercontent.com/images/ATRu7TtGU9iptGXFiFr9May6xo0.png?scale-down-to=2048&width=4800&height=2476" alt="" className="absolute top-40 w-[80%] left-[50%] -translate-x-1/2 rounded-t-3xl"/>
            </div>
        </div>

        <div className="sixthPage flex flex-col items-center h-full w-full px-20 bg-[#FFFEFC]">
            <div className="flex justify-between items-end gap-20 h-full w-full">
                <div className="max-w-[135%]">
                    <p className="text-xl font-semibold py-5">Tracking</p>
                    <h1 className="text-5xl tracking-tighter font-semibold">Easily track and manage candidates through the process.</h1>
                    <p className="text-xl font-semibold py-5 text-gray-800">Source and invite candidates to apply, then review all the candidates who did and easily move them through the stages. <br /><br />Set your own hiring workflow, number of steps and types of stages you want the candidates to go through. All with a simple and easy interface you don't have to learn.</p>
                </div>
                <div className="bg-black flex justify-between items-center hover:px-7 hover:underline transition-all duration-500 px-10 py-7 rounded-4xl text-white w-full">
                    <div>
                        <h1 className="text-[18px] font-semibold tracking-tighter">Learn about Tracking</h1>
                        <p className="text-[17px] text-gray-400">Simple applicant tracking system</p>
                    </div>
                    <div className="bg-white text-black p-2 rounded-xl">
                        <FaArrowRight className="text-sm"/>
                    </div>
                </div>
            </div>
            <div className="my-20 rounded-4xl relative w-full">
                <img src="https://framerusercontent.com/images/pGMt8zqZdaRiA1HXbraS0l1ze6k.jpg?scale-down-to=2048&width=2912&height=1632" alt="" className="rounded-4xl"/>
                <img src="https://framerusercontent.com/images/UkDreeiOyc4XIbvui5op6sQyGCM.png?scale-down-to=2048&width=5280&height=3360" alt="" className="absolute bottom-0 w-[80%] left-[50%] -translate-x-1/2 rounded-t-3xl"/>
            </div>
        </div>

        <div className="sixthPage flex flex-col items-center h-full w-full px-20 bg-[#FFFEFC]">
            <div className="flex justify-between items-end gap-20 h-full w-full">
                <div className="max-w-[135%]">
                    <p className="text-xl font-semibold py-5">Communication</p>
                    <h1 className="text-5xl tracking-tighter font-semibold">Personalized outreach communication and feedback on autopilot.</h1>
                    <p className="text-xl font-semibold py-5">Wone learns your writing style and automates the entire communication cycle. <br /><br />Automate interview scheduling, candidate questions, status updates, and follow up with unresponsive talent, all in your authentic voice, without your constant attention.</p>
                </div>
                <div className="bg-black flex justify-between items-center hover:px-7 hover:underline transition-all duration-500 px-10 py-7 rounded-4xl text-white w-full">
                    <div>
                        <h1 className="text-[18px] font-semibold tracking-tighter">Learn about Sourcing</h1>
                        <p className="text-[17px] text-gray-400">Save weeks sourcing talent</p>
                    </div>
                    <div className="bg-white text-black p-2 rounded-xl">
                        <FaArrowRight className="text-sm"/>
                    </div>
                </div>
            </div>
            <div className="my-50 rounded-4xl relative w-full">
                <img src="https://framerusercontent.com/images/uDZiz0sFXN9OSQ3ZUsOzH8Pa2Mo.jpg?scale-down-to=2048&width=2912&height=1632" alt="" className="rounded-4xl"/>
                <img src="https://framerusercontent.com/images/2QwpXlcQQMdsS6dta8q2cwQDcvU.png?scale-down-to=4096&width=4800&height=6999" alt="" className="absolute bottom-0 w-[80%] h-[90%] object-cover left-[50%] -translate-x-1/2 rounded-t-3xl"/>
            </div>
        </div>

        <div className="seventhPage flex flex-col items-center h-full w-full px-20 bg-[#FFFEFC]">
            <div className="w-full flex flex-col items-center">
            <h1 className="text-[48px] font-semibold tracking-[-2px] leading-[52.8px] text-center">Wone is the human-centered product in <br /> the world of AI.</h1>
            <p className="text-center py-10 text-[20px] tracking-[-0.3px] leading-[28px] font-semibold text-gray-700">Pioneering the next evolution of recruitment. <br />Developed with the world's leading talent acquisition experts.</p>
            <img src="netfilx.png" alt="" className="w-[75%] py-4" />
            <img src="https://framerusercontent.com/images/Io4QeeXDmftwWgmiV57woFugYjM.jpg?scale-down-to=2048&width=2912&height=1632" alt="" className="rounded-4xl my-15"/>
            </div>
            <div>
            <h1 className="text-[40px] leading-[44px] tracking-[-1.5px] font-semibold text-start">An open letter from our CEO — the <br /> future of hiring is human-first.</h1>
            <p className="text-start py-5 text-[18px] tracking-[-0.2px] leading-[25.2px] font-semibold text-black">The rise of AI has brought us to a crossroads in recruitment. Many are <br /> choosing to replace human judgment with automation. We've taken a <br /> different path at Wone. We believe deeply in the irreplaceable value of <br /> human connection in hiring. 
            <br /> <br />
            Our mission isn't to automate people out of the process—it's to amplify <br /> what makes us human. Our platform automates the time-intensive <br /> tasks that drain a recruiter’s day so they can focus on what matters <br /> most: building relationships and strengthening employer brands.
            <br /><br />
            What sets us apart? Our system learns from every interaction, adapting <br /> to your organization's specific needs while providing context on why <br /> each candidate is a strong match. While many tech solutions minimize <br /> human involvement, we're maximizing human potential.
            <br /><br />
            For job seekers, we're ending the frustrating void of unanswered <br /> applications that has become all too common. Everyone deserves to be <br /> seen, heard, and respected throughout their career journey. Through <br /> personalized feedback and guidance, we're helping people navigate a <br /> changing world of work with confidence and dignity.</p>
            <h1 className="text-[30px] font-semibold tracking-[-0.8px]">A future where everyone wins.</h1>
            <p className="text-start py-5 text-[18px] tracking-[-0.2px] leading-[25.2px] font-semibold text-black">We're building a future where recruiters connect with diverse talent <br /> more effectively, companies find the right people faster and job <br /> seekers receive the guidance they need to succeed.
            <br /><br />
            This is hiring reimagined—where technology elevates human potential <br /> and handles the routine so people can focus on the remarkable.
            <br /><br />
            Join us in building this future.
            <br /><br />
            Sincerely,
            DS</p>
            <img src="https://framerusercontent.com/images/dUF79I2nZY61B43EsRQcoRfa8M.svg?scale-down-to=512&width=605&height=183" alt="" className="w-50" />
            </div>
        </div>

        <div className="eighthth border-4 border-gray-300 rounded-4xl w-[87%] mx-auto px-5 md:px-20 py-17 my-20 bg-[#FFFEFC]">
            <h1 className="text-3xl md:text-[48px] tracking-tighter font-semibold">Wone process is light years <br /> faster than traditional tools <br /> and platforms.</h1>
            <div className="flex justify-between">
                <p className="py-10 md:text-[20px] tracking-[-0.3px] leading-[28px] text-gray-700 font-semibold">Regular sourcing & evaluation are <br /> manual and take 30+ days per role. <br /><span className="text-black">Wone sources and evaluates talent within one minute.</span></p>
                <button className='bg-[#EBE9E3] py-4 px-5 rounded-xl md:my-15 flex items-center gap-3 w-fit'>
                    <p className='text-md font-semibold text-black'>Get early access</p>
                    <div className='text-black p-2 rounded-xl text-sm'>
                        <FaArrowRight className=''/>
                    </div>
                </button>
            </div>
            <img src="graph.png" alt="" className="w-full mt-4" />
        </div>
    </div>
  )
}

export default HeroSection