import React from 'react'
import { bricole } from '../fonts';
const Blog = () => {
  return (
    <>
    <div className="w-screen min-h-screen bg-black flex">
        <div className="w-[80%] h-full py-5 px-[20px]">
            <div className="bloghead w-full h-[180px]">
                <span className={`${bricole.className} antialiased text-primary text-[200px] leading-[0.8] text-top font-extrabold`}>The Dot.</span>
            </div>
            <div className="banner w-full h-[200px] relative">
                <div className="absolute top-[10px] left-[10px] w-fit h-fit">
                    <span className={`${bricole.className} antialiased text-white text-[24px] font-semibold leading-[24px]`}>March 1st</span>
                </div>
            </div>
            <div className="blogcont w-full h-fit">
                <p className={`py-[20px] ${bricole.className} text-white`}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                Why do we use it?</p>
            </div>
        </div>
        <div className="fadeborder w-[20%] min-h-full pl-[1px]">
            <div className="w-full h-full bg-black flex flex-col">
                <div className="w-full flex-auto">

                </div>
                <div className="w-full aspect-square"></div>
            </div>
        </div>
    </div>
    <footer className='w-screen h-[400px] bg-white relative'>
        <div className="absolute"></div>
    </footer>
    </>
  )
}

export default Blog