'use client'
import { SanityDocument } from 'next-sanity';
import { client } from "@/sanity/client";
import debounce from 'lodash/debounce';
import React, { useCallback , useState } from 'react'

export const ClientSearch = ({ intialBlogs }: { intialBlogs: SanityDocument[] }) => {
  const initblog=intialBlogs;
  const [blogs,setBlogs] = useState(intialBlogs);
  const options = { next: { revalidate: 30 } };


  const getResults = async ({title}:{title:string}) =>{
    const query = `*[_type == "post" && (title match "${title}" )][0] { title,slug }`;
    const post = await client.fetch<SanityDocument>(query,{}, options);
    return post;
  }



    // Debounce with useCallback
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
    <div className='w-screen h-screen absolute top-0 right-0 bg-[#0000008c] backdrop-blur-[20px] z-[999] p-5 flex flex-col items-center'>
        <div className="w-[400px] h-[50px] rounded-full bg-[#ffffff1c] backdrop-blur-3xl border border-[#ffffff0f] px-5">
            <input type="text" onChange={(e)=>{debouncedSearch(e.target.value)}} className='w-full h-full outline-0 border-0' placeholder='search' />
        </div>
        <div className="w-full h-fit mt-3">
            <span>{ blogs.length } result found</span>
        </div>
        <div className="h-fit w-full py-10 grid grid-cols-3 gap-[20px]">
        { blogs.map((blog,i)=>{
            return(
                    <div key={i} className="w-full aspect-[16/9] rounded-4xl bg-[#ffffff1c] backdrop-blur-3xl border border-[#ffffff0f] p-5 flex flex-col gap-2">
                        <div className="banner w-full h-[60%] rounded-[16px] flex items-center justify-center">
                            <span className='text-[24px] font-semibold'>{ blog.title }</span>
                        </div>
                        <div className="w-full h-fit px-[10px]">
                            <span>Mar 1st</span>
                            <p className='text-[12px] text-[#ffffff5f]'>{ blog.slug.current }</p>
                        </div>
                        <div className="w-[40%] ml-auto h-[40px] bg-amber-50 rounded-full mt-auto flex items-center justify-center cursor-pointer">
                            <span className='text-black text-[12px] font-semibold'>view blog</span>
                        </div>
                    </div>
            );
        }) }
        </div>
    </div>
    )
}
