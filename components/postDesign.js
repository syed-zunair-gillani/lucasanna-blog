import React from 'react'
import dateFormat from 'dateformat';
import Link from 'next/link';
import Image from 'next/image';
import Tag from './tag';
import {GetWordStr} from '../utils'

export default function PostDesign({item}) {
  return (
    <article className='sm:flex items-center justify-between py-8 pt-0 my-8 border-b-[1px] last:border-b-0  group border-gray-100 '>
      <div className='sm:pr-5 md:pr-10 xl:pr-20'>
        <div>
          <span className='p-1 px-[10px] text-base rounded-full bg-yellow text-white font-source_serif_700'>{item?.categorie?.name}</span>
          <span className='ml-2 text-gray-400 capitalize font-source_serif_700'>Written by - {item?.author?.name}</span> -
          <span className='text-gray-400 font-source_serif_700'> {dateFormat((item?.createdAt), "mmmm dS, yyyy")}</span>
        </div>
        <Link href={`/blog/${item?.slug}`}>
          <h1 className='mt-3 text-xl md:text-2xl first-letter:capitalize font-bold cursor-pointer text-main font-sohne_700 hover:underline'> {item?.title}</h1>
        </Link>
        <Link href={`/blog/${item?.slug}`}><p className='mt-2 text-lg text-gray-600 cursor-pointer font-source_serif_700'>
          {GetWordStr(item?.excerpt, 30)}...</p></Link>
        <div className='mt-4 hidden md:mt-8 sm:flex flex-wrap gap-2 capitalize'>
          {item?.tags[0] && <Tag bg="bg-pink-50" border="border-pink-100">{item?.tags[0]}</Tag> }
          {item?.tags[1] && <Tag bg="bg-green-50" border="border-green-100">{item?.tags[1]}</Tag> }
          {item?.tags[2] && <Tag bg="bg-blue-50" border="border-blue-100">{item?.tags[2]}</Tag> }
          {item?.tags[3] && <Tag bg="bg-orange-50" border="border-orange-100">{item?.tags[3]}</Tag> }
        </div>
      </div>
      <div>
        <figure className='relative sm:w-44 w-full rounded-lg overflow-hidden sm:rounded-none h-52 md:h-44 mt-6 sm:mt-0'>
          <Link href={`/blog/${item?.slug}`}><Image src={item?.coverImage?.url} alt="poster" fill className='transition-all object-cover duration-200 ease-in-out group-hover:scale-110'/></Link>
        </figure>
      </div>
    </article>
  )
}
