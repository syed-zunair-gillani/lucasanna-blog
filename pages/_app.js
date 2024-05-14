import Header from '../components/header'
import '../styles/globals.css'
import NextNProgress from "nextjs-progressbar";
import Footer from '../components/footer';
import ProgressBar from "react-scroll-progress-bar"; 
import GoogleAnalytics from "@bradgarropy/next-google-analytics"
import { clientAppolo } from '../config/appoloClient';
import { ApolloProvider } from '@apollo/client';
import Head from 'next/head';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <title>Canapalandia</title>
    </Head>
    <NextNProgress color="#FEBF2F" height={3}/>
    <ProgressBar bgcolor="#FEBF2F"/>
    <Header />
      <GoogleAnalytics measurementId="G-DSPFLNM6H6" />
      <ApolloProvider client={clientAppolo}>
      <Component {...pageProps} />
      </ApolloProvider>
      <Footer/>
    </>
  )

}

export default MyApp
