import Link from 'next/link'
import React, { useState } from 'react'
import { HiOutlineArrowCircleDown } from 'react-icons/hi';
import { GetWordStr } from '../utils';

export default function Hero({featurePost}) {
  console.log("🚀 ~ file: hero.js:8 ~ Hero ~ featurePost:", featurePost)
  const [video, setVideo] = useState(false)
  const fImage = featurePost?.poster_link

  return (
    <>
      <main className='h-[550px] md:h-[calc(100vh-115px)] 2xl:h-[700px] relative z-0'>
        {
          video ? <video className="fullscreen" src="https://designsupply-web.com/samplecontent/vender/codepen/20181014.mp4" playsInline autoPlay muted loop></video>
          : <div className='bg-cover bg-no-repeat h-full main-background bg-center' style={{
            background: `url(${fImage?.length > 5 ? fImage : featurePost?.coverImage?.url})`,
          }} /> 
        }
        <div className='absolute top-0 right-0 w-full h-full md:w-3/6 opesity-bg'>
          <div className='absolute top-1/2 -translate-y-1/2 z-10 pl-6 md:pl-16 md:max-w-[600px] mt-0 w-full p-2'>
            <Link href={`/blog/${featurePost?.slug}`} ><h1 className='text-4xl leading-[47px] font-extrabold font-canelaDeck cursor-pointer text-yellow underline lg:text-5xl lg:leading-[60px]'>
              {featurePost?.title}</h1></Link>
            <p className='mt-4 tracking-widest text-white mb-8 font-sohne_400'>{GetWordStr(featurePost?.excerpt, 30)}...</p>
            <Link href={`/blog/${featurePost?.slug}`} className='px-8 py-3 bg-white hover:bg-yellow hover:text-white font-sohne_400'>Explore Now!</Link>
          </div>
        </div>
        <div className="absolute -mr-4 text-4xl font-bold bottom-2 right-1/2 text-yellow animate-bounce"><HiOutlineArrowCircleDown/></div>
      </main>
    </>
  )
}
