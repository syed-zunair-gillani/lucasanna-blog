import React, { useState } from "react";
import Banner from "../../components/banner";
import Head from "next/head";

export default function PrivacyPolicy() {

  const [privacy, setPrivacy] = useState(null);
  const OpenFaq = (id) => {
    if (privacy === id) {
      return setPrivacy(null);
    }
    setPrivacy(id);
  };

  return (
    <>
    <Head>
        <title>
         Privacy Policy | Guest Posting Opportunities Available at bybysunday
        </title>
        <meta
          name="description"
          content="Read our privacy policy for guest post submissions on bybysunday. Learn about how we collect, use, and protect your personal information when you use our platform. Contact us if you have any questions or concerns"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:url" content="https://www.hitecheagle.com/privacy-policy" />
        <link rel="canonical" href="https://www.hitecheagle.com/privacy-policy" />
        <meta
          name="description"
          content="Read our privacy policy for guest post submissions on bybysunday. Learn about how we collect, use, and protect your personal information when you use our platform. Contact us if you have any questions or concerns"
        />
        <meta
          property="og:description"
          content="Read our privacy policy for guest post submissions on bybysunday. Learn about how we collect, use, and protect your personal information when you use our platform. Contact us if you have any questions or concerns"
        />
        
        <meta
          property="og:title"
          content=" Privacy Policy | Guest Posting Opportunities Available at bybysunday"
        />
        <meta
          name="twitter:title"
          content=" Privacy Policy | Guest Posting Opportunities Available at bybysunday"
        />
        <meta name="robots" content="max-image-preview:large" />
        <meta property="og:site_name" content="bybysunday" />
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
        <meta name="apple-mobile-web-app-title" content="bybysunday" />
        <meta name="application-name" content="bybysunday" />
        
      </Head>
      <Banner
        title="Privacy Policy for Write for Us Guest Post"
        image="/images/privacy-policy.jpeg"
      />
      <section className="container mx-auto mt-10 lg:px-10 px-4 lg:px-20 lg:text-justify">
        <h2 className="font-canelaDeck text-2xl md:text-3xl">Introduction</h2>
        <p className="text-lg my-2 mb-5 font-rubik_light">
          As a guest posting platform, we take our users' privacy seriously.
          This privacy policy outlines how we collect, use, and protect your
          personal information when you use our website. We understand the
          importance of maintaining your privacy and strive to make our policies
          transparent and accessible.
        </p>

        <h2 className="font-canelaDeck text-2xl md:text-3xl">
          Information We Collect
        </h2>
        <p className="text-lg my-2 mb-5 font-rubik_light">
          We collect personal information from you when you submit a guest post
          or use our website. This information may include your name, email
          address, website URL, and other details relevant to your post.
        </p>

        <h2 className="font-canelaDeck text-2xl md:text-3xl">
          How We Use Your Information
        </h2>
        <p className="text-lg my-2 mb-5 font-rubik_light">
          We use your personal information to communicate with you about your
          guest post and to improve our website. We may also use your
          information to send you newsletters, marketing materials, or other
          communications related to our services.
        </p>

        <h2 className="font-canelaDeck text-2xl md:text-3xl">
          Information Sharing
        </h2>
        <p className="text-lg my-2 mb-5 font-rubik_light">
          We may share your personal information with our team members to help
          us process your guest post submission. We may also share your
          information with our service providers, such as payment processors or
          email providers, to help us provide our services to you.
        </p>

        <h2 className="font-canelaDeck text-2xl md:text-3xl">Security</h2>
        <p className="text-lg my-2 mb-5 font-rubik_light">
          We take security seriously and have implemented reasonable measures to
          protect your personal information. However, no security system is
          completely foolproof, and we cannot guarantee the security of your
          information.
        </p>

        <h2 className="font-canelaDeck text-2xl md:text-3xl">Cookies</h2>
        <p className="text-lg my-2 mb-5 font-rubik_light">
          We use cookies to enhance your experience on our website. Cookies are
          small data files that are placed on your device when you visit our
          website. You can disable cookies in your browser settings, but this
          may affect your ability to use our website.
        </p>

        <h2 className="font-canelaDeck text-2xl md:text-3xl">
          Third-Party Links
        </h2>
        <p className="text-lg my-2 mb-5 font-rubik_light">
          Our website may contain links to third-party websites or services. We
          are not responsible for the privacy practices or content of these
          third-party websites.
        </p>

        <h2 className="font-canelaDeck text-2xl md:text-3xl">
          Children's Privacy
        </h2>
        <p className="text-lg my-2 mb-5 font-rubik_light">
          Our website is not intended for use by children under the age of 18.
          We do not knowingly collect personal information from children under
          18.
        </p>

        <h2 className="font-canelaDeck text-2xl md:text-3xl">Your Rights</h2>
        <p className="text-lg my-2 mb-5 font-rubik_light">
          You have the right to access, correct, or delete your personal
          information. You can do this by contacting us using the information
          below.
        </p>

        <h2 className="font-canelaDeck text-2xl md:text-3xl">
          Changes to Our Privacy Policy
        </h2>
        <p className="text-lg my-2 mb-5 font-rubik_light">
          We may update this privacy policy from time to time. Any changes will
          be posted on this page, and the effective date will be updated.
        </p>

        <h2 className="font-canelaDeck text-2xl md:text-3xl">Conclusion</h2>
        <p className="text-lg my-2 mb-5 font-rubik_light">
          We value your privacy and strive to protect your personal information.
          If you have any questions or concerns about our privacy policy, please
          contact us using the information below.
        </p>
        <h2 className="font-canelaDeck text-2xl md:text-3xl">Faq's</h2>

        <div className="mt-5">
          {privacyPolicy.map((item, idx) => {
            return (
              <>
                <div
                  className="border border-gray-200 rounded-2xl mb-4"
                  key={idx}
                >
                  <h6
                    className={`cursor-pointer font-sohne_500 p-5 rounded-2xl hover:bg-gray-100 text-xl ${
                      privacy === idx ? "text-blue-500 bg-gray-100" : "text-black"
                    }`}
                    onClick={() => OpenFaq(idx)}
                  >
                    {item?.question}
                  </h6>
                  {privacy === idx && (
                    <p className="font-rubik_regular p-5 pt-5 text-gray-600 text-lg">
                      {item?.answers}
                    </p>
                  )}
                </div>
              </>
            );
          })}
        </div>

      </section>
    </>
  );
}


const privacyPolicy = [
  {
    question: "Is my personal information secure on your website?    ",
    answers: "We take security seriously and have implemented reasonable measures to protect your personal information. However, no security system is completely foolproof, and we cannot guarantee the security of your information.    "
  },
  {
    question: "What personal information do you collect from me?",
    answers:"We collect personal information from you when you submit a guest post or use our website. This information may include your name, email address, website URL, and other details relevant to your post."
  },
  {
    question: "How do you use my personal information?",
    answers:"We use your personal information to communicate with you about your guest post and to improve our website. We may also use your information to send you newsletters, marketing materials, or other communications related to our services."
  },
  {
    question: "Can I access or delete my personal information?",
    answers:"Yes, you have the right to access, correct, or delete your personal information. You can do this by contacting us using the information provided in our privacy policy."
  },
  {
    question: "Do you share my personal information with third parties?",
    answers:"We may share your personal information with our team members to help us process your guest post submission. We may also share your information with our service providers, such as payment processors or email providers, to help us provide our services to you.    "
  }

]