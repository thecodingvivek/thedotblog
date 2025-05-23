'use client'
import { SanityDocument } from 'next-sanity';
import { client } from "@/sanity/client";
import debounce from 'lodash/debounce';
import React, { useCallback , useState } from 'react';
import Link from 'next/link';

export const ClientSearch = ({ intialBlogs,func }: { intialBlogs: SanityDocument[],func:()=>void }) => {
  const initblog=intialBlogs;
  const [blogs,setBlogs] = useState(intialBlogs);
  const options = { next: { revalidate: 30 } };


  const getResults = async ({title}:{title:string}) =>{
    const query = `*[_type == "post" && (title match "${title}" )][0] { title,slug }`;
    const post = await client.fetch<SanityDocument>(query,{}, options);
    return post;
  }



  const debouncedSearch = useCallback(
    debounce((query: string) => {
      getResults({ title: query }).then((result) => {
        if (query.length == 0)
        {
          setBlogs(initblog);
        }
        else{
          setBlogs(result ? [result] : []);
        }
      });
    }, 300),
    [getResults]
  );

  

  return (
    <div className='w-screen h-screen absolute top-0 right-0 bg-[#0000008c] backdrop-blur-[20px] z-[999] p-5 flex flex-col items-center leading-normal'>
      <div className="w-full h-fit flex  justify-center  items-center relative">
        <div className="w-[600px] h-[50px] rounded-full bg-[#ffffff1c] backdrop-blur-3xl flex border border-[#ffffff0f] px-5">
            <input type="text" onChange={(e)=>{debouncedSearch(e.target.value)}} className='w-full h-full outline-0 border-0' placeholder='search' />
        </div>
        <div className="absolute right-0 transform translate-y-[-50%] top-[50%] p-2 bg-[#ffffff1c] backdrop-blur-3xl flex border border-[#ffffff0f] cursor-pointer rounded-full" onClick={()=>func()}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>        </div>
      </div>
        <div className="w-full h-fit mt-3">
            <span>{ blogs.length } result found</span>
        </div>
        <div className="h-fit w-full py-5 grid grid-cols-3 gap-[20px]">
        { blogs.map((blog,i)=>{
            return(
                    <div key={i} className="w-full aspect-video rounded-4xl bg-[#ffffff1c] backdrop-blur-3xl border border-[#ffffff0f] p-5 flex flex-col gap-2">
                        <div className="banner w-full h-[60%] rounded-[16px] flex items-center justify-center">
                            <span className='text-[24px] font-semibold'>{ blog.title }</span>
                        </div>
                        <Link href={`/blog/${blog.title}`} className='w-[40%] ml-auto h-[40px] bg-amber-50 rounded-full mt-auto flex items-center justify-center cursor-pointer'>
                              <span className='text-black text-[12px] font-semibold'>view blog</span>
                        </Link>
                    </div>
            );
        }) }
        </div>
    </div>
    )
}
