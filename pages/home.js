import React from 'react'

function home() {
  return (
    <>       
     <div className="w-full h-16 bg-neutral-950 flex space-x-1 pt-1 pb-0">
        <div className="h-full bg-neutral-800 w-64 flex items-center justify-center text-white rounded-t-xl">
            Hi this is a thing X
        </div>
        <div className="h-full bg-neutral-800 w-64 flex items-center justify-center text-white rounded-t-xl">
            Hi this is a thing X
        </div>
        <div className="h-full bg-neutral-800 w-64 flex items-center justify-center text-white rounded-t-xl">
            Hi this is a thing X
        </div>
    </div>
    <div className="flex-1 flex">
        <textarea className="w-1/2 resize-none h-full bg-neutral-900 outline-none text-white p-8" />
        <div className="w-1/2 h-full bg-neutral-800"></div>
    </div>

    </>
  )
}

export default home