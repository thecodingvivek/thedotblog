'use client'
import React, { useState } from 'react'
import { type SanityDocument } from 'next-sanity';
import { ClientSearch } from './clientSearch';

export default function SearchButton ({ initBlogs } : { initBlogs:SanityDocument[]}){

  const [click,setClick]  = useState(false);


  return (
    <>
      <div onClick={()=>setClick(true)} className="search pl-[20px] pr-[5px] py-[5px] z-1 w-full h-12 rounded-full flex items-center justify-between border border-[#1f1f1f] cursor-pointer">
        <span className="text-[16px] text-[#ffffff67]">search here</span>
        <div className="h-full aspect-square rounded-full bg-[#ffffff2e] flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D5D0BD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        </div>
      </div>
      {
        click && 
        <>
          <ClientSearch  intialBlogs={ initBlogs } func={() => setClick(false)} />
        </>
      }
    </>
    );
}

