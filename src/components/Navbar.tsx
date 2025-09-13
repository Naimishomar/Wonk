
function Navbar() {
  return (
    <div className='w-full px-10 py-8 absolute top-0 flex justify-between items-center bg-[#F5F3ED]'>
        <img src="..//../public/wone.png" alt="" className="w-30" />
        <div>
            <ul className="md:flex gap-3 items-center font-semibold text-[15px] hidden">
                <li className="hover:bg-[#EDEBE6] px-2 py-1 rounded-md cursor-pointer">Home</li>
                <li className="hover:bg-[#EDEBE6] px-2 py-1 rounded-md cursor-pointer">Sourcing</li>
                <li className="hover:bg-[#EDEBE6] px-2 py-1 rounded-md cursor-pointer">Evaluation</li>
                <li className="hover:bg-[#EDEBE6] px-2 py-1 rounded-md cursor-pointer">Tracking</li>
                <li className="hover:bg-[#EDEBE6] px-2 py-1 rounded-md cursor-pointer">Communication</li>
                <li className="bg-[#EDEBE6] px-3 py-1 rounded-xl cursor-pointer">Early access</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar