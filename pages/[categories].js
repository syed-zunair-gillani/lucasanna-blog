import { useState } from "react";
import Banner from "../components/banner";
import PostDesign from "../components/postDesign";
import Sidebar from "../components/sidebar";
import TagsBar from "../components/tagsBar";
import ReactPaginate from "react-paginate";
import { POSTS_BY_CATEGORY } from "../config/query";
import Head from "next/head";
import { clientAppolo } from "../config/appoloClient";

export default function Categories({ allPost }) {
  console.log("🚀 ~ Categories ~ allPost:", allPost)


  const itemsPerPage = 8;
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = allPost.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(allPost.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset =
      (event.selected * itemsPerPage) % allPost.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <Banner
        title={allPost?.[0]?.categorie?.name}
        image={allPost?.[0]?.categorie?.image?.url}
      />
      <TagsBar />
      <section className="container lg:flex mx-auto mt-16 px-4 lg:px-10">
        {allPost?.length > 0 ? (
          <div className="lg:w-3/4 lg:border-r-[1px] border-gray-100 lg:mr-10 lg:pr-10 ">
            {currentItems?.map((item, i) => (
              <PostDesign key={i} item={item} />
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

export async function getStaticProps({params}) {
  const p = params.categories
  
  const response = await clientAppolo.query({
    query: POSTS_BY_CATEGORY,
    variables: {
      slug: p,
    },
  });
  return { props: { allPost: response?.data?.posts } };
}

export async function getStaticPaths() {
  const paths = [];
  return {
    paths,
    fallback: "blocking",
  };
}
