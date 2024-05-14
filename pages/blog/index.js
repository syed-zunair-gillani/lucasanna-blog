import React, { useState } from 'react'
import Banner from '../../components/banner'
import PostDesign from '../../components/postDesign'
import Sidebar from '../../components/sidebar'
import TagsBar from '../../components/tagsBar'
import { POSTS } from '../../config/query'
import ReactPaginate from 'react-paginate'
import Head from 'next/head'
import { clientAppolo } from '../../config/appoloClient'

export default function Blog({allPost}) {

  const itemsPerPage = 8;
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = allPost?.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(allPost?.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % allPost?.length;
    setItemOffset(newOffset);
  };


  return (
    <>
    <Head>
        <title>Blogs | hitecheagle</title>
        <meta
          name="description"
          content="Get the latest updates on technology news, reviews, and trends from HiTechEagle. We cover everything from gadgets, smartphones, gaming, AI, and more. Our team of experts provides in-depth analysis and unbiased reviews to help you make informed decisions on the latest technology products. Stay up-to-date with HiTechEagle and stay ahead of the curve in the fast-paced world of technology."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:url" content={`https://www.hitecheagle.com/blog`} />
        <link rel="canonical" href={`https://www.hitecheagle.com/blog`} />
        <meta
          name="description"
          content="Get the latest updates on technology news, reviews, and trends from HiTechEagle. We cover everything from gadgets, smartphones, gaming, AI, and more. Our team of experts provides in-depth analysis and unbiased reviews to help you make informed decisions on the latest technology products. Stay up-to-date with HiTechEagle and stay ahead of the curve in the fast-paced world of technology."
        />
        <meta
          property="og:description"
          content="Get the latest updates on technology news, reviews, and trends from HiTechEagle. We cover everything from gadgets, smartphones, gaming, AI, and more. Our team of experts provides in-depth analysis and unbiased reviews to help you make informed decisions on the latest technology products. Stay up-to-date with HiTechEagle and stay ahead of the curve in the fast-paced world of technology."
        />
        <meta
          name="twitter:description"
          content="Get the latest updates on technology news, reviews, and trends from HiTechEagle. We cover everything from gadgets, smartphones, gaming, AI, and more. Our team of experts provides in-depth analysis and unbiased reviews to help you make informed decisions on the latest technology products. Stay up-to-date with HiTechEagle and stay ahead of the curve in the fast-paced world of technology."
        />
        <meta property="og:title" content="HiTechEagle - Your Ultimate Source for Latest Tech News, Reviews and Trends"  />
        <meta name="twitter:title" content="HiTechEagle - Your Ultimate Source for Latest Tech News, Reviews and Trends"  />
        <meta name="robots" content="max-image-preview:large" />
        <meta property="og:site_name" content="hitecheagle" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://res.cloudinary.com/dmbcfwywa/image/upload/v1685725575/hitecheagle_xysugn.jpg" />
        <meta property="og:image:secure_url" content="https://res.cloudinary.com/dmbcfwywa/image/upload/v1685725575/hitecheagle_xysugn.jpg" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:image" content="https://res.cloudinary.com/dmbcfwywa/image/upload/v1685725575/hitecheagle_xysugn.jpg" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="https://res.cloudinary.com/dmbcfwywa/image/upload/v1685725575/hitecheagle_xysugn.jpg" />
        <link rel="apple-touch-icon" sizes="152x152" href="https://res.cloudinary.com/dmbcfwywa/image/upload/v1685725575/hitecheagle_xysugn.jpg" />
        <link rel="apple-touch-icon" sizes="180x180" href="https://res.cloudinary.com/dmbcfwywa/image/upload/v1685725575/hitecheagle_xysugn.jpg" />
        <link rel="apple-touch-icon" sizes="167x167" href="https://res.cloudinary.com/dmbcfwywa/image/upload/v1685725575/hitecheagle_xysugn.jpg" />
        <link href="https://res.cloudinary.com/dmbcfwywa/image/upload/v1685725575/hitecheagle_xysugn.jpg" rel="icon" sizes="192x192" />
        <link href="https://res.cloudinary.com/dmbcfwywa/image/upload/v1685725575/hitecheagle_xysugn.jpg" rel="icon" sizes="128x128" />
        <meta name="apple-mobile-web-app-title" content="hitecheagle" />
        <meta name="application-name" content="hitecheagle" />
        <meta
          property="article:published_time"
          content="2019-12-06T21:45:23+00:00"
        />
        <meta
          property="article:modified_time"
          content="2022-04-16T15:29:38+00:00"
        />
        
      </Head>

    <Banner title="Blogs" image="/images/guest-blogging-2-blog-bybysunday.jpeg"/>
      <TagsBar/>
      <section className='container lg:flex mx-auto mt-16 px-4 lg:px-10'>
        <div className='lg:w-3/4 w-full lg:border-r-[1px] border-gray-100 mr-10 lg:pr-10 '>
          {currentItems.map((item, i) => (
            <PostDesign  key={i} item={item}/>
          ))}

          <ReactPaginate
          breakLabel="..."
          nextLabel="next"
          onPageChange={handlePageClick}
          pageRangeDisplayed={4}
          pageCount={pageCount}
          previousLabel="previous"
          renderOnZeroPageCount={null}
          previousClassName="previous"
          containerClassName="flex space-x-4 pagination_wrapper"
          pageClassName=""
          activeClassName="active"
          nextClassName="next"
        />
        </div>
        <Sidebar/>
      </section>
    </>
  )
}


export async function getStaticProps() {
  const response = await clientAppolo.query({
    query: POSTS,
  });  
  return { props: { allPost: response?.data?.posts } }
}