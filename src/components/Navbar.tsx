
function Navbar() {
  return (
    <div className='w-full p-8 flex justify-between items-center bg-[#F5F3ED]'>
        <img src="..//../public/wone.png" alt="" className="w-30" />
        <div>
            <ul className="md:flex gap-8 items-center font-semibold text-[15px] hidden">
                <li>Home</li>
                <li>Sourcing</li>
                <li>Evaluation</li>
                <li>Tracking</li>
                <li>Communication</li>
                <li className="bg-[#EDEBE6] px-2 py-1 rounded-md">Early access</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar