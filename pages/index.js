import Link from "next/link"


export default function Home() {
  return (
    <div className='bg-neutral-900 w-full h-screen flex justify-center items-center flex-col'>
      <h1 className="text-white font-light text-8xl">NIMBLE</h1>
      <h2 className="text-gray-200 font-thin text-4xl">note taking application for ollie by ollie</h2>
      <Link href={'/home'} className="m-4 text-3xl text-white bg-neutral-600 px-8 py-4 rounded-3xl">Let's go</Link>
    </div>
  )
}
