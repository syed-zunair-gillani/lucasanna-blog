import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import dateFormat from 'dateformat';


export default function Banner({ title, date, image }) {
    return (
        <div className='lg:h-[400px] md:h-[320px] py-28 px-5 pb-10  relative w-full bg-main text-white md:p-20 flex flex-col justify-start'>
            <Image src={image} alt="123" fill className='z-0 object-cover' />
            <div className="absolute top-0 bottom-0 left-0 right-0 overlay"></div>
            <div className='z-10'>
                {/* breadcrum  */}
                <div className='mb-2 font-rubik_light'> <span>Home</span> / <span><Link href="/blog">Blog</Link></span> </div>
                <h2 className='lg:text-4xl md:text-3xl text-2xl first-line:font-sohne_700 capitalize font-sohne_400 max-w-[800px] lg:leading-[48px] mb-2'>{title}</h2>
                {date && <h6 className='inline-block px-4 py-1 rounded-md font-source_serif_700 bg-main'>{dateFormat((date), "mmmm dS, yyyy")}</h6>}
            </div>
        </div>
    )
}
