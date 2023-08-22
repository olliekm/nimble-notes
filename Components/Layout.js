import React from 'react'
import Link from 'next/link'

function Layout({children}) {
  return (
    <div className='w-full h-screen bg-neutral-900 flex flex-col'>
        <div className="w-full h-20 bg-neutral-950 px-8 flex items-center">
            <div className="w-80">
                <Link href={'/'}>
                    <h1 className='text-neutral-500 font-semibold text-2xl'>nimble</h1>
                </Link>
            </div>
            <div className="flex space-x-8 text-white">
                <div className="">Notes</div>
                <div className="">Classes</div>
                <div className="">Units</div>
                <div className="">Settings</div>
            </div>
        </div>
        <div className="flex flex-1">
            <div className="w-80 h-full bg-neutral-950 p-8 flex flex-col text-white space-y-2">
                <h1>Recent notes</h1>
                <div className=" bg-neutral-700 rounded-sm p-4">
                    Bio notes for X class
                </div>
                <div className=" bg-neutral-700 rounded-sm p-4">
                    Bio notes for X class
                </div>
                <div className=" bg-neutral-700 rounded-sm p-4">
                    Bio notes for X class
                </div>
                <div className=" bg-neutral-700 rounded-sm p-4">
                    Bio notes for X class
                </div>
                <div className=" bg-neutral-700 rounded-sm p-4">
                    Bio notes for X class
                </div>
            </div>
            <div className="flex-1 flex flex-col">
                {children}

            </div>
            {/* <div className="flex-1 flex flex-col">
                <div className="w-full bg-neutral-800 h-16 flex items-center ">

                </div>
            </div> */}
        </div>
    </div>
  )
}

export default Layout