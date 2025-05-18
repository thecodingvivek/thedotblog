import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import { bricole } from '../fonts';


const { projectId, dataset } = client.config();
const options = { next: { revalidate: 30 } };

const serialize = (blocks: SanityDocument[]) => {
    return blocks.map((block) => {
        if (block._type === 'block') {
            const tag = block.style === 'normal' ? 'p' : block.style;
            const text: string = block.children.map((child: { text: string }) => child.text).join('');
            return `<${tag} class="${bricole.className} text-secondary text-[24px] font-[500]" >${text}</${tag}>`;
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

export default async function PostPage( params: { title: string }) {
   
  const POST_QUERY = `*[_type == "post" && title == "${params.title}"][0]`;


  const post = await client.fetch<SanityDocument>(POST_QUERY,{}, options);

  return (
    <>
        <div className="bloghead w-full h-[180px]">
            <span className={`${bricole.className} antialiased text-primary text-[200px] leading-[0.8] tracking-tight text-top font-extrabold`}>{ post.title }</span>
        </div>
        <div className="banner w-full h-[200px] relative">
            <div className="absolute top-[10px] left-[10px] w-fit h-fit">
                <span className={`${bricole.className} antialiased text-white text-[24px] font-semibold leading-[24px]`}>March 1st</span>
            </div>
        </div>
        <div className="blogcont w-full h-fit py-[20px]">
            <span className={`${bricole.className} text-white text-[48px] font-[500]`}>{ post.slug.current }</span>
            <div dangerouslySetInnerHTML={{__html:serialize(post.body)}}></div>
        </div>
    </>
  );
}