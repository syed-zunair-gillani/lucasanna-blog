import { useRouter } from "next/router";
import { useState } from "react";
import PostDesign from "../components/postDesign";
import Sidebar from "../components/sidebar";
import TagsBar from "../components/tagsBar";
import ReactPaginate from "react-paginate";
import ResultNotFound from "../components/resultNotFound";
import { POSTS } from "../config/query";
import Head from "next/head";
import { clientAppolo } from "../config/appoloClient";

export default function Categories({ allPost }) {

  const router = useRouter();
  const searchWith = router?.query.q;

  const filterData = allPost?.filter((item) =>
    item?.category?.title?.toLowerCase()?.includes(searchWith?.toLowerCase()) ||
    item?.title?.toLowerCase()?.includes(searchWith?.toLowerCase()) ||
    item?.excerpt?.toLowerCase()?.includes(searchWith?.toLowerCase()) ||
    item?.tags?.some(tag => tag?.title?.toLowerCase() === searchWith?.toLowerCase())
  );

  const itemsPerPage = 8;
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = filterData.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(filterData.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % filterData.length;
    setItemOffset(newOffset);
  };

  return (
    <>
    <Head>
        <title>{searchWith?.charAt(0)?.toUpperCase() + searchWith?.slice(1)} | hitecheagle</title>
        <meta
          name="description"
          content="HiTechEagle is your ultimate source for the latest tech news and reviews. We cover everything from smartphones, laptops, gaming, and software to emerging technologies like AI, IoT, and blockchain. Our expert team of writers provides in-depth analysis and reviews to help you make informed decisions when it comes to buying tech products. Stay ahead of the curve with HiTechEagle."
        />
      </Head>
      {/*<Banner title={router.query.categories} />*/}
      <TagsBar />
      <section className="container lg:flex mx-auto mt-8 px-4 lg:px-10">
        {filterData.length >= 1 ? (
          <div className="lg:w-3/4 lg:border-r-[1px] border-gray-100 lg:mr-10 lg:pr-10 ">
            {currentItems.map((item, i) => (
              <PostDesign key="i" item={item} />
            ))}
            {/* pagination */}
            <ReactPaginate
              breakLabel="..."
              nextLabel="next"
              onPageChange={handlePageClick}
              pageRangeDisplayed={4}
              pageCount={pageCount}
              previousLabel="previous"
              renderOnZeroPageCount={null}
              pageClassName=""
              activeClassName="active"
              containerClassName="flex space-x-4 pagination_wrapper"
              previousClassName="previous"
              nextClassName="next"
            />
          </div>
        ) : (
          <ResultNotFound />
        )}

        <Sidebar />
      </section>
    </>
  );
}

export async function getStaticProps() {
  const response = await clientAppolo.query({
    query: POSTS,
  });  
  return { props: { allPost:response.data.posts } };
}
