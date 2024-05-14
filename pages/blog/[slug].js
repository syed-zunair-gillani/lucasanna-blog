import React, { useEffect, useState } from "react";
import Banner from "../../components/banner";
import Sidebar from "../../components/sidebar";
import TagsBar from "../../components/tagsBar";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
  FaLinkedinIn,
} from "react-icons/fa";
import Head from "next/head";
import { SINGLE_POST } from "../../config/query";
import Link from "next/link";
import { clientAppolo } from "../../config/appoloClient";
import { RichText } from '@graphcms/rich-text-react-renderer';




export default function BlogSlug({ blogPost, comments, allPost }) {
console.log("🚀 ~ BlogSlug ~ blogPost:", blogPost)
  const seo = blogPost.seoOverride
  useEffect(() => {
    var x = document.getElementById("single_post").querySelectorAll("h2");
    for (var i = 0; i < x.length; i++) {
      x[i].addEventListener("click", function () {
        this.id = "myID";
      });
    }
  });
  // faqs
  const [faq, setFaq] = useState(null);
  const OpenFaq = (id) => {
    if (faq === id) {
      return setFaq(null);
    }
    setFaq(id);
  };

  const SocialShare = ({ link }) => {
    return (
      <div className="flex items-center justify-around z-50 sm:justify-start fixed right-1/2 transform translate-x-1/2 sm:relative bottom-0 space-x-3 bg-white w-full">
        <h1 className="text-gray-600 hidden sm:block capitalize">
          Social Share
        </h1>
        <ul className="wrapper">
          <li className="icon facebook">
            <span className="tooltip">Facebook</span>
            <span>
              <Link
                href={`https://www.facebook.com/sharer/sharer.php?u=https://www.hitecheagle.com/blog/${link}`}
                target="_blank"
              >
                <FaFacebookF />
              </Link>
            </span>
          </li>
          <li className="icon twitter">
            <span className="tooltip">Twitter</span>
            <span>
              <Link
                href={`https://twitter.com/intent/tweet?url=www.hitecheagle.com/blog/${link}&text=`}
                target="_blank"
              >
                <FaTwitter />
              </Link>
            </span>
          </li>
          <li className="icon instagram">
            <span className="tooltip">Instagram</span>
            <span>
              <Link href="#">
                <FaInstagram />
              </Link>
            </span>
          </li>
          <li className="icon github">
            <span className="tooltip">Whatsapp</span>
            <span>
              <Link
                href={`whatsapp://send?text=https://www.hitecheagle.com/blog/${link}`}
                target="_blank"
              >
                <FaWhatsapp />
              </Link>
            </span>
          </li>
          <li className="icon youtube">
            <span className="tooltip">Linkedin</span>
            <span>
              <Link
                href={`https://www.linkedin.com/shareArticle?mini=true&url=www.hitecheagle.com/blog/${link}`}
              >
                <FaLinkedinIn />
              </Link>
            </span>
          </li>
        </ul>
      </div>
    );
  };


  return (
    <>
      <Head>
        <title>
          {seo?.title || blogPost?.title?.charAt(0)?.toUpperCase() + blogPost?.title?.slice(1)}|
          hitecheagle
        </title>
        <meta name="description" content={seo?.description || blogPost?.excerpt} />
      </Head>

      <Banner
        title={blogPost?.title}
        date={blogPost?.createdAt}
        image={
          blogPost?.coverImage?.url
        }
      />
      <TagsBar />
      <section className="container lg:flex mx-auto mt-8 lg:mt-16 px-4 lg:px-10">
        <div className="lg:w-3/4 lg:border-r-[1px] border-gray-100 lg:mr-10 lg:pr-10 mb-10">
          <p className="text-xl text-gray-500 first-letter:text-main first-letter:text-4xl font-rubik_light first-letter:font-source_serif_700">
            {blogPost?.excerpt}
          </p>
          <SocialShare link={blogPost?.slug} />
          <div className="single_post">
            <img
              src={
                blogPost?.coverImage?.url
              }
              alt="img"
            />

            <div id="single_post" className="single_post content">
              <RichText content={blogPost?.content?.raw} />
            </div>

          </div>
        </div>
        <Sidebar tags={blogPost?.tags} toc={true} adv={blogPost?.avertisements}/>
      </section>


      {/* related post  */}
      {/* {relatedPost.length > 0 && (
        <section className="container mx-auto mt-10 px-4 lg:px-10">
          <div className="lg:w-3/4 lg:pr-10">
            <h2 className="mb-10 text-2xl font-rubik_medium text-main">
              <span className="text_bg"> Related </span>Posts
            </h2>
            {relatedPost?.slice(0, 3)?.map((item, i) => (
              <PostDesign key={i} item={item} />
            ))}
          </div>
        </section>
       )} */}
    </>
  );
}

export async function getStaticProps({ params }) {
  const p = params.slug

  const response = await clientAppolo.query({
    query: SINGLE_POST,
    variables: {
      slug: p,
    },
  });
  return { props: { blogPost: response?.data?.posts?.[0] } };
}

export async function getStaticPaths() {
  const paths = [];
  return {
    paths,
    fallback: "blocking",
  };
}
