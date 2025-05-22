import React from 'react'
import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import { ClientSearch } from './clientSearch';


export default async function SearchPage() {
    const options = { next: { revalidate: 30 } };
    const QUERY =`*[_type == "post"] | order(publishedAt desc)[0...10] {
        title,
        slug,
    }`;

    const post = await client.fetch<SanityDocument []>(QUERY,{}, options);
    
  return (
    <ClientSearch intialBlogs={post} />
  );
}