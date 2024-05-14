import React, { useState } from "react";
import Banner from "../../components/banner";
import Head from "next/head";

export default function WriteForUs() {
  const [faq, setFaq] = useState(null);
  const OpenFaq = (id) => {
    if (faq === id) {
      return setFaq(null);
    }
    setFaq(id);
  };
  return (
    <>
      <Head>
        <title>
          Write for Us | Guest Posting Opportunities Available at hitecheagle
        </title>
        <meta
          name="description"
          content="Looking to share your expertise with a wider audience? Submit a guest post on hitecheagle platform and reach thousands of readers interested in your niche. hitecheagle site welcomes high-quality content on a variety of topics, and we offer a great platform to showcase your writing skills and build your online presence. Join hitecheagle community of writers today and start making an impact with your words."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <meta
          property="og:url"
          content="https://www.hitecheagle.com/write-for-us"
        />
        <link rel="canonical" href="https://www.hitecheagle.com/write-for-us" />
        <meta
          name="description"
          content="Looking to share your expertise with a wider audience? Submit a guest post on hitecheagle platform and reach thousands of readers interested in your niche. hitecheagle site welcomes high-quality content on a variety of topics, and we offer a great platform to showcase your writing skills and build your online presence. Join hitecheagle community of writers today and start making an impact with your words."
        />
        <meta
          property="og:description"
          content="Check out this awesome guest post on hitecheagle!"
        />
        <meta
          name="twitter:description"
          content="Discover something new with this fascinating guest post on hitecheagle"
        />
        <meta
          property="og:title"
          content="Write for Our Blog - Guest Posting Opportunities Available"
        />
        <meta
          name="twitter:title"
          content="Write for Our Blog - Guest Posting Opportunities Available"
        />
        <meta name="robots" content="max-image-preview:large" />
        <meta property="og:site_name" content="hitecheagle" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dmbcfwywa/image/upload/v1685725575/hitecheagle_xysugn.jpg"
        />
        <meta
          property="og:image:secure_url"
          content="https://res.cloudinary.com/dmbcfwywa/image/upload/v1685725575/hitecheagle_xysugn.jpg"
        />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dmbcfwywa/image/upload/v1685725575/hitecheagle_xysugn.jpg"
        />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          href="https://res.cloudinary.com/dmbcfwywa/image/upload/v1685725575/hitecheagle_xysugn.jpg"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="https://res.cloudinary.com/dmbcfwywa/image/upload/v1685725575/hitecheagle_xysugn.jpg"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="https://res.cloudinary.com/dmbcfwywa/image/upload/v1685725575/hitecheagle_xysugn.jpg"
        />
        <link
          rel="apple-touch-icon"
          sizes="167x167"
          href="https://res.cloudinary.com/dmbcfwywa/image/upload/v1685725575/hitecheagle_xysugn.jpg"
        />
        <link
          href="https://res.cloudinary.com/dmbcfwywa/image/upload/v1685725575/hitecheagle_xysugn.jpg"
          rel="icon"
          sizes="192x192"
        />
        <link
          href="https://res.cloudinary.com/dmbcfwywa/image/upload/v1685725575/hitecheagle_xysugn.jpg"
          rel="icon"
          sizes="128x128"
        />
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
      <Banner title="Write For Us" image="/images/write-for-us.jpeg" />
      <section className="container mx-auto mt-10 lg:my-20 px-4 lg:px-10 lg:text-justify write_for_us">
        <h2 className="font-canelaDeck text-2xl md:text-3xl">About Us:</h2>
        <p className="text-lg my-2 mb-5 font-rubik_light">
          HiTechEagle is your ultimate destination for all things technology. We
          are a leading technology website that aims to provide our readers with
          the latest news, trends, reviews, and insights from the ever-evolving
          world of technology. Our team of passionate tech enthusiasts strives
          to bring you high-quality content that is both informative and
          engaging.
        </p>

        <h2 className="font-canelaDeck text-2xl md:text-3xl">What We Cover:</h2>
        <p className="text-lg my-2 mb-5 font-rubik_light">
          At HiTechEagle, we cover a wide range of technology-related topics to
          keep you informed and entertained. Our expert writers and editors
          delve into the realms of consumer electronics, gadgets, smartphones,
          computers, artificial intelligence, virtual reality, cybersecurity,
          software, internet of things (IoT), and much more. Whether you are a
          tech-savvy individual or a casual reader, we have something for
          everyone.
        </p>

        <h2 className="font-canelaDeck text-2xl md:text-3xl">Our Mission:</h2>
        <p className="text-lg my-2 mb-5 font-rubik_light">
          Our mission is to empower our readers with the knowledge and
          understanding of the latest technological advancements. We believe
          that technology is a driving force in today's world and has the power
          to shape our future. Through our in-depth articles, comprehensive
          reviews, and thought-provoking features, we aim to bridge the gap
          between technology and its users. Our goal is to make technology
          accessible and enjoyable for all.
        </p>

        <h2 className="font-canelaDeck text-2xl md:text-3xl">
          Why Choose HiTechEagle:
        </h2>
        <ul className="text-lg my-2 mb-5 font-rubik_light">
          <li>
            <strong className="font-bold">Reliable and Up-to-Date Information:</strong> We stay at the
            forefront of the technology landscape, ensuring that you receive
            accurate and timely information about the latest trends, products,
            and innovations.{" "}
          </li>
          <li>
            <strong className="font-bold">Expert Analysis and Reviews:</strong> Our team of tech
            experts meticulously researches and analyzes products and
            technologies, providing you with honest reviews and insightful
            opinions to help you make informed decisions.{" "}
          </li>
          <li>
            <strong className="font-bold">Diverse Content Formats:</strong> We offer a variety of
            content formats, including articles, guides, how-tos, videos, and
            podcasts, catering to different preferences and learning styles.{" "}
          </li>
          <li>
            <strong className="font-bold">Community Engagement:</strong> We value our readers'
            opinions and encourage interaction through comments, discussions,
            and social media platforms. We believe in building a vibrant
            community of technology enthusiasts who can learn, share, and
            connect.
          </li>
          <li>
            <strong className="font-bold">User-Friendly Experience:</strong>We strive to provide a
            seamless and enjoyable browsing experience. Our website is designed
            to be user-friendly, allowing you to easily navigate through our
            extensive collection of articles and find the information you need.{" "}
          </li>
        </ul>

        <h2 className="font-canelaDeck text-2xl md:text-3xl">
          Submission Guidelines
        </h2>
        <p className="text-lg my-2 mb-5 font-rubik_light">
          If you are interested in submitting a guest post, please send your
          article on{" "}
          <a
            href="mailto:hitecheagle@outlook.com"
            className="text-blue-600 font-rubik_regular underline"
          >
            hitecheagle@outlook.com
          </a>
          . You can include any relevant images, videos, or infographics to
          accompany your piece. Please also include a short author bio with a
          link to your website or social media profile. We allow one external
          link in the body of the article, and it should be relevant and add
          value to the reader.
        </p>

        <h2 className="font-canelaDeck text-2xl md:text-3xl">
          Editorial Process
        </h2>
        <p className="text-lg my-2 mb-5 font-rubik_light">
          Once we receive your submission, our editorial team will review it and
          provide feedback within 2-3 business days. If we feel that your
          article needs revisions, we will provide specific suggestions and work
          with you to refine the piece. Once your article is accepted, we will
          schedule it for publication and notify you of the publishing date. We
          reserve the right to edit your article for clarity, grammar, and
          style, but we will not make any significant changes without your
          approval.
        </p>

        <h2 className="font-canelaDeck text-2xl md:text-3xl">
          Benefits of Guest Posting with Us
        </h2>
        <p className="text-lg my-2 mb-5 font-rubik_light">
          Guest posting on our website can offer several benefits to you as a
          writer. You will have the opportunity to showcase your writing skills
          and expertise to our audience, which can help build your brand and
          authority. You can also include a link back to your website or social
          media profile, which can drive traffic and increase your online
          visibility.
        </p>

        <h2 className="font-canelaDeck text-2xl md:text-3xl">Conclusion</h2>
        <p className="text-lg my-2 mb-5 font-rubik_light">
          We hope that this write for us page content for general guest post has
          provided you with valuable information about our guidelines and
          requirements. We look forward to receiving your submissions and
          working with you to publish high-quality content that adds value to
          our readers.
        </p>

        <h2 className="font-canelaDeck text-2xl md:text-3xl">FAQs</h2>

        <div className="mt-5">
          {Faqs.map((item, idx) => {
            return (
              <>
                <div
                  className="border border-gray-200 rounded-2xl mb-4"
                  key={idx}
                >
                  <h6
                    className={`cursor-pointer font-sohne_500 p-5 rounded-2xl hover:bg-gray-100 text-xl ${
                      faq === idx ? "text-blue-500 bg-gray-100" : "text-black"
                    }`}
                    onClick={() => OpenFaq(idx)}
                  >
                    {item?.question}
                  </h6>
                  {faq === idx && (
                    <p className="font-rubik_regular p-5 pt-5 text-gray-600 text-lg">
                      {item?.answers}
                    </p>
                  )}
                </div>
              </>
            );
          })}
        </div>

        <div className="flex justify-center items-center mt-10">
          <a
            href="mailto:hitecheagle@outlook.com"
            className="text-white shadow-lg bg-yellow p-4 px-7 font-rubik_regular text-xl rounded-2xl hover:scale-105"
          >
            Send Article
          </a>
        </div>
      </section>
    </>
  );
}

const Faqs = [
  {
    question: "What topics are you interested in publishing?",
    answers:
      "We are open to publishing guest posts on various topics, including electronics, gadgets, smartphones, computers, artificial intelligence, virtual reality, cybersecurity, software, internet of things (IoT). and many more",
  },
  {
    question: "How long should my article be?",
    answers:
      "We recommend that your article is between 1000 to 1500 words, although we are open to longer pieces if they are engaging and informative.",
  },
  {
    question: "Can I include links in my article?",
    answers:
      "You can include one external link in the body of your article, and it should be relevant and add value to the reader.",
  },
  {
    question: "How long does it take to hear back about my submission?",
    answers:
      "Our editorial team will review your submission within 2-3 business days and provide feedback.",
  },
  {
    question: "What are the benefits of guest posting on your website?",
    answers:
      "Guest posting on our website can help you build your brand and authority, drive traffic to your website or social media profile, and showcase your writing skills and expertise to our audience.",
  },
];
