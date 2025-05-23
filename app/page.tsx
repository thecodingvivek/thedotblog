import SearchButton from "./searchButton";
import { client } from "@/sanity/client";
import { SanityDocument } from 'next-sanity';
import SpaceBackground from "./space";


export default async function Home() {
  const options = { next: { revalidate: 30 } };
  const QUERY =`*[_type == "post"] | order(publishedAt desc)[0...10] {
      title,
      slug,
  }`;

  const post = await client.fetch<SanityDocument []>(QUERY,{}, options);

  return (
    <>
    <div className="w-screen h-screen bg-[#000] z-[990] flex relative overflow-hidden">
      <SpaceBackground />
      <div className="w-[40%] h-full flex items-center justify-center flex-col leading-18">

        <div className="w-fit h-fit flex flex-col items-start">
          <span className='prime text-[60px] ml-[2px] font-extrabold text-primary'>the dot</span>
          <span className='prime text-[128px] font-extrabold text-primary'>Blog</span>
          <span className='prime text-[12px] ml-[4px] font-extrabold text-primary mt-[-10px]'>By Vivek Chitturi</span>
          <SearchButton initBlogs={post} />
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

    <div className="detailcont absolute w-fit h-fit  flex flex-col items-end leading-10 z-1">
      <span className='prime text-[24px] ml-[2px] font-extrabold text-black '>2025</span>
      <span className='prime text-[64px] font-extrabold text-black'>the dot</span>
      <span className='prime text-[16px] ml-[2px] font-extrabold text-black '>May 1st</span>
    </div>

    </>
  )
}

