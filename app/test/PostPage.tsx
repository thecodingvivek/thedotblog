/* eslint-disable */
import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import { bricole } from '../fonts';

interface BlogProps {
    title:string
};

const { projectId, dataset } = client.config();
const options = { next: { revalidate: 30 } };

const serialize = (blocks: SanityDocument[]) => {
    return blocks.map((block) => {
        if (block._type === 'block') {
            const tag = block.style === 'normal' ? 'p' : block.style;
            const text: string = block.children.map((child: { text: string }) => child.text).join('');
            return `<${tag} class="${bricole.className} text-white text-[20px] font-[500]">${text}</${tag}>`;
        }
        if (block._type === 'image') {
            const alt = block.alt || '';
            const ref = block.asset._ref;
            return `<img src="https://cdn.sanity.io/images/${projectId}/${dataset}/${ref
                .replace('image-', '')
                .replace('-png', '.png')}" alt="${alt}" />`;
        }
        return '';
    }).join('\n');
};

export default async function PostPage({ title }: BlogProps) {
  const POST_QUERY = `*[_type == "post" && title == "${ title }"][0]`;
  const post = await client.fetch<SanityDocument>(POST_QUERY, {}, options);

  return (
    <>
      <div className="bloghead w-full h-[180px]">
        <span className={`${bricole.className} antialiased text-primary text-[200px] leading-[0.8] tracking-tight text-top font-extrabold`}>{ post.title }</span>
      </div>
      <div className="banner w-full h-[200px] relative">
        <div className="absolute top-[10px] left-[10px] w-fit h-fit">
          <span className={`${bricole.className} antialiased text-white text-[24px] font-semibold leading-[24px]`}>March 1st</span>
        </div>
        <div className="absolute bottom-[10px] right-[10px] w-fit h-fit gap-2 flex">
          <span className={`${bricole.className} antialiased text-white text-[24px] font-semibold leading-[24px]`}>#tech</span>
        </div>
        <div className="absolute flex gap-2 right-0 top-[-40px]">
          <div className="px-3 h-[35px] flex cursor-pointer items-center rounded-full bg-[#0A0A0A] border border-[#1F1F1F] gap-2">
            <svg width="20px" height="20px" className="mb-[2px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 6h8v2H8V6zm-4 4V8h4v2H4zm-2 2v-2h2v2H2zm0 2v-2H0v2h2zm2 2H2v-2h2v2zm4 2H4v-2h4v2zm8 0v2H8v-2h8zm4-2v2h-4v-2h4zm2-2v2h-2v-2h2zm0-2h2v2h-2v-2zm-2-2h2v2h-2v-2zm0 0V8h-4v2h4zm-10 1h4v4h-4v-4z" fill="#fff"/>
            </svg>
            <span className="text-[16px]">3</span>
          </div>
          <div className="px-3 h-[35px] flex cursor-pointer rounded-full bg-[#0A0A0A] border border-[#1F1F1F] gap-2 items-center">
            <svg width="20px" height="20px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <path d="M927.4 273.5v-95.4h-87.9V82.8h-201v95.3h-87.9v95.4h-78.5v-95.4h-88V82.8H183.2v95.3H95.3v95.4H16.7v190.6h78.6v95.4h75.3v95.3H246v95.3h87.9v95.4h100.5v95.3h153.9v-95.3h100.4v-95.4h88v-95.3H852.1v-95.3h75.3v-95.4h78.5V273.5z" fill="#E02D2D" />
            </svg>
            <span className="text-[16px]">3</span>
          </div>
        </div>
      </div>
      <div className="blogcont w-full h-fit py-[20px]">
        <span className={`${bricole.className} text-primary text-[36px] font-semibold`}># { post.slug.current }</span>
        <div dangerouslySetInnerHTML={{ __html: serialize(post.body) }}></div>
      </div>
    </>
  );
}