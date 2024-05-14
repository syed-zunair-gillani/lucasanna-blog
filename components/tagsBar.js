import React, { useEffect, useState } from 'react'
import { navCategory } from './data/categories'
import Tag from './tag'

export default function TagsBar() {
  const [categories, setCategories] = useState();
  console.log("🚀 ~ TagsBar ~ categories:", categories)
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch('/api/categories');
      const res  = await data.json()
      setCategories(res?.data)
    }
    fetchData()
    .catch(console.error);
  }, [])

  return (
    <div className='bg-white 0'>
      <div className='relative border-gray-100'>
        {/* <ul className='flex p-3 space-x-2 overflow-x-scroll scrollbar-hide animate-scroll'>      
        </ul> */}
        <div className="slider">
          <ul className="p-3 pr-0 space-x-2 text-sm slide md:text-base">
            {
              categories?.map((tag, index) => (
                <Tag whitespace="whitespace-nowrap" border="border-transparent" route={tag?.slug} key={index}>{tag?.name}</Tag>
              ))
            }
          </ul>
          <ul className="py-3 space-x-2 text-sm slide md:text-base">
            {
              categories?.map((tag, index) => (
                <Tag whitespace="whitespace-nowrap" border="border-transparent" route={tag?.slug} key={index}>{tag?.name}</Tag>
              ))
            }
          </ul>
          <ul className="py-3 space-x-2 text-sm slide md:text-base">
            {
              categories?.map((tag, index) => (
                <Tag whitespace="whitespace-nowrap" border="border-transparent" route={tag?.slug} key={index}>{tag?.name}</Tag>
              ))
            }
          </ul>
        </div>
        <div className='absolute top-0 bottom-0 left-0 px-10 bg-gradient-to-r from-white'></div>
        <div className='absolute top-0 bottom-0 right-0 px-10 bg-gradient-to-l from-white to-transparent'></div>
      </div>

    </div>
  )
}






