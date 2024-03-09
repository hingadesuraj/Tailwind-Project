import React from 'react'

const Heor = () => {
  return (
    <div className="flex justify-between items-center mx-[155px] my-3 " >
    <div className='flex w-full border-2' >
          {/* left */}
          <div className='border-2 w-1/2 text-gray-500' >
            <div className='font-bold text-6xl' >
                <h1>Building Digital</h1>
                <h1>products & brands.</h1>
            </div>
            <div className='pt-8 text-gray-400' >
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque cum autem architecto ullam, nihil minima enim quia dolore quaerat itaque libero at rem dolor distinctio inventore eos, quasi ab voluptatem accusantium sit quo, adipisci atque eveniet voluptatibus? Modi quos commodi eius, fuga blanditiis, voluptatibus rerum officia, quisquam quibusdam distinctio voluptates.</p>

            </div>
            <div className='flex text-black ' >
                <div className='flex justify-start gap-2 items-center border-2  p-2 rounded-md m-2 hover:bg-slate-200' >
                <img src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" width={20} alt="Icon" />
                <button >View On GitHub</button>
                </div>
                <div className='flex justify-start gap-2 items-center border-2  p-2 rounded-md m-2 hover:bg-slate-200' >
                <img src="https://cdn3.iconfinder.com/data/icons/feather-5/24/figma-512.png" width={20} alt="Icon" />
                <button >Get Figma file</button>
                </div>
               
                
            </div>
          </div>
          {/* right */}
          <div>
            <img src="" alt="Hero Image" />
          </div>
    </div>
    </div>
  )
}

export default Heor