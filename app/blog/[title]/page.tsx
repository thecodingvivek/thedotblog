import React from 'react'
import { bricole } from '../../fonts';
import PostPage from '../../test/page';

const Blog = async ({ params }: { params: { title: string } }) => {

const { title } = await params; 

return (
    <>
    <div className="w-full min-h-screen h-[200vh] bg-black flex">
        <div className="w-[82%] h-full py-5 px-[20px]">
            <PostPage title={ decodeURIComponent(title) } />
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