import React from 'react'
import { bricole } from '../fonts';
const Blog = () => {
  return (
    <div className="w-screen h-screen bg-black flex">
        <div className="w-[80%] h-full py-5 px-[20px]">
            <div className="bloghead w-full h-[180px]">
                <span className={`${bricole.className} antialiased text-primary text-[200px] leading-[0.8] text-top font-extrabold`}>The Dot.</span>
            </div>
            <div className="banner w-full h-[200px] relative">
                <div className="absolute top-[10px] left-[10px] w-fit h-fit">
                    <span className={`${bricole.className} antialiased text-white text-[24px] font-semibold leading-[24px]`}>March 1st</span>
                </div>
            </div>
        </div>
        <div className="fadeborder w-[20%] h-full pl-[1px]">
            <div className="w-full h-full bg-black flex flex-col">
                <div className="w-full flex-auto">

                </div>
                <div className="w-full aspect-square"></div>
            </div>
        </div>
    </div>
  )
}

export default Blog