import SearchButton from "./searchButton";
import { client } from "@/sanity/client";
import { SanityDocument } from 'next-sanity';


export default async function Home() {
  const options = { next: { revalidate: 30 } };
  const QUERY =`*[_type == "post"] | order(publishedAt desc)[0...10] {
      title,
      slug,
  }`;

  const post = await client.fetch<SanityDocument []>(QUERY,{}, options);

  return (
    <>
    <div className="w-screen h-screen bg-[#000] flex relative overflow-hidden">
      <div className="w-[40%] h-full flex items-center justify-center flex-col leading-18">
        <div className="w-fit h-fit flex flex-col items-start">
          <span className='prime text-[60px] ml-[2px] font-extrabold text-primary'>the dot</span>
          <span className='prime text-[128px] font-extrabold text-primary'>Blog</span>
          <span className='prime text-[12px] ml-[4px] font-extrabold text-primary mt-[-10px]'>By Vivek Chitturi</span>
          <SearchButton initBlogs={post} />
          {/* <ClientSearch intialBlogs={post}  /> */}
        </div>
      </div>
      <div className="w-[60%] h-full flex relative items-center justify-center">
        <div className="dot h-full aspect-square bg-primary rounded-full"></div>
        <svg className='orbitone' viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
          <circle className='orbit'
            cx="60" cy="60" r="50" 
            stroke="#D5D0BD" 
            strokeWidth="0.2"
            fill="none" 
            strokeDasharray="1 2"  />
        </svg>
        
        <svg className='orbitgrad'  viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id={"fadeLeft"} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="black" stopOpacity="0" />
              <stop offset="15%" stopColor="black" stopOpacity="1" />
              <stop offset="100%" stopColor="black" stopOpacity="0" />
            </linearGradient>
          </defs>
          <circle cx="60" cy="60" r="50"  strokeWidth="2"  fill="none" className="orbitlu" />
        </svg>

          
        <svg className='orbittwo' viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
          <circle className='orbit'
            cx="60" cy="60" r="50" 
            stroke="rgba(213, 208, 189, 0.6)" 
            strokeWidth="0.2"
            fill="none" 
            strokeDasharray="1 2" />
        </svg>

        <svg className='orbitgradtwo'  viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id={"fadeLeft"} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="black" stopOpacity="0" />
              <stop offset="5%" stopColor="green" stopOpacity="1" />
              <stop offset="100%" stopColor="black" stopOpacity="0" />
            </linearGradient>
          </defs>
          <circle cx="60" cy="60" r="50"  strokeWidth="2" fill="none" className="orbitlu" />
        </svg>

        <svg className='orbitthree' viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
          <circle className='orbit'
            cx="60" cy="60" r="50" 
            stroke="rgba(213, 208, 189, 0.4)" 
            strokeWidth="0.2"
            fill="none" 
            strokeDasharray="1 2" />
        </svg>

        <svg className='orbitgradthree'  viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id={"fadeLeftThree"} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="black" stopOpacity="0" />
              <stop offset="35%" stopColor="black" stopOpacity="1" />
              <stop offset="100%" stopColor="black" stopOpacity="0" />
            </linearGradient>
          </defs>
          <circle cx="60" cy="60" r="50"  strokeWidth="2" fill="none" className="orbitlu" />
        </svg>
      </div>
    </div>


    <div className="detailcont absolute w-fit h-fit  flex flex-col items-end leading-10">
      <span className='prime text-[24px] ml-[2px] font-extrabold text-black '>2025</span>
      <span className='prime text-[64px] font-extrabold text-black'>the dot</span>
      <span className='prime text-[16px] ml-[2px] font-extrabold text-black '>May 1st</span>
    </div>

    <div className="absolute bottom-[10px] left-[10px] w-fit px-[8px] py-[2px] flex border border-[#1F1F1F] bg-secondary gap-3 rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40px" height="40px" fill='#666666' viewBox="0 0 72 72">
        <path d="M36 23c7.18 0 13 5.82 13 13s-5.82 13-13 13-13-5.82-13-13S28.82 23 36 23zM40 11c0 .732 0 3.268 0 4 0 2.209-1.791 4-4 4s-4-1.791-4-4c0-.732 0-3.268 0-4 0-2.209 1.791-4 4-4S40 8.791 40 11zM56.506 21.151c-.518.518-2.311 2.311-2.828 2.828-1.562 1.562-4.095 1.562-5.657 0s-1.562-4.095 0-5.657c.518-.518 2.311-2.311 2.828-2.828 1.562-1.562 4.095-1.562 5.657 0S58.068 19.589 56.506 21.151zM61 40c-.732 0-3.268 0-4 0-2.209 0-4-1.791-4-4s1.791-4 4-4c.732 0 3.268 0 4 0 2.209 0 4 1.791 4 4S63.209 40 61 40zM50.849 56.506c-.518-.518-2.311-2.311-2.828-2.828-1.562-1.562-1.562-4.095 0-5.657s4.095-1.562 5.657 0c.518.518 2.311 2.311 2.828 2.828 1.562 1.562 1.562 4.095 0 5.657S52.411 58.068 50.849 56.506zM32 61c0-.732 0-3.268 0-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 .732 0 3.268 0 4 0 2.209-1.791 4-4 4S32 63.209 32 61zM15.494 50.849c.518-.518 2.311-2.311 2.828-2.828 1.562-1.562 4.095-1.562 5.657 0s1.562 4.095 0 5.657c-.518.518-2.311 2.311-2.828 2.828-1.562 1.562-4.095 1.562-5.657 0S13.932 52.411 15.494 50.849zM11 32c.732 0 3.268 0 4 0 2.209 0 4 1.791 4 4s-1.791 4-4 4c-.732 0-3.268 0-4 0-2.209 0-4-1.791-4-4S8.791 32 11 32zM21.151 15.494c.518.518 2.311 2.311 2.828 2.828 1.562 1.562 1.562 4.095 0 5.657s-4.095 1.562-5.657 0c-.518-.518-2.311-2.311-2.828-2.828-1.562-1.562-1.562-4.095 0-5.657S19.589 13.932 21.151 15.494z"></path>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#666666"><path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Z"/></svg>
    </div>

    </>
  )
}

