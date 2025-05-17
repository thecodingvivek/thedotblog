import React from 'react'
import { bricole } from '../fonts';
import IndexPage from '../test/page';
const Blog = () => {
return (
    <>
    <div className="w-full min-h-screen h-[200vh] bg-black flex">
        <div className="w-[82%] h-full py-5 px-[20px]">
            <div className="bloghead w-full h-[180px]">
                {/* <span className={`${bricole.className} antialiased text-primary text-[200px] leading-[0.8] tracking-tight text-top font-extrabold`}>The Dot.</span> */}
                <IndexPage />
            </div>
            <div className="banner w-full h-[200px] relative">
                <div className="absolute top-[10px] left-[10px] w-fit h-fit">
                    <span className={`${bricole.className} antialiased text-white text-[24px] font-semibold leading-[24px]`}>March 1st</span>
                </div>
            </div>
            <div className="blogcont w-full h-fit py-[20px]">
                <span className={`${bricole.className} text-white text-[48px] font-[500]`}>Why the Hustel?</span>
                <p className={` ${bricole.className} text-secondary text-[18px] font-[500]`}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                Why do we use it ? </p>
            </div>
        </div>


        <div className="border-l border-[#ffffff23] relative w-[18%] min-h-full pl-[1px]">
            <div className="w-full h-screen  flex flex-col sticky top-0 px-[10px]">
                <div className="w-full flex-auto relative flex flex-col items-center pt-[20px]">
                    <div className="fadeborder z-[998] absolute top-0 left-[50%] transform translate-x-[-50%] h-full w-[1px]"></div>
                    <div className="w-[60px] z-[999] h-[60px] rounded-full bg-[hsla(213,71%,20%,1)] flex items-center justify-center">
                        <span className={`${bricole.className} text-[32px] text-[#52a8ff] font-semibold`}>1</span>
                    </div>
                </div>
                <svg viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full">
                    <path d="M0,50 A50,50 0 0 1 100,50" fill="#1F1F1F" />
                </svg>
            </div>
        </div>
    </div>
    <footer className='w-full h-[400px] bg-black relative'>
        <div className="w-fit h-fit absolute bottom-0 left-[20px]">
            <span className={`${bricole.className} text-primary font-extrabold text-[180px] leading-[180px]`}>Vivek Chitturi</span>
        </div>
    </footer>
    </>
)
}

export default Blog