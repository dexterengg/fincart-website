import Header from "../component/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles/globals.css"
import "../assets/styles/carousel.css"
import AOS from "aos";
import 'animate.css';
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useEffect } from "react";
import Head from 'next/head'
import Footer from "../component/Footer";
// import favicon from "../public/favicontwo.png"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";


const MyApp = ({ Component, pageProps, router }) => {

  useEffect(() => {
    AOS.init({
      /*  once: true, */
      easing: "ease-out-cubic",
      offset: 50,
      delay: 500,
    });
  }, []);

  useEffect(() => {
    window.scroll({
      top: 1,
    });
  })
  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Poppins:wght@300;400;500;700&display=swap" rel="stylesheet" />
        <link rel="icon" type="image/png" href="https://cdn-fincart.azureedge.net/website/Images/Fevicon3.ico" />
        <script async src='https://tags.kappax.io/sdk/embed.js'></script>
      </Head>
      <Header route={router.route} />
      <ToastContainer />
      <Component {...pageProps} />
      <Footer />

    </>
  );
};

export default MyApp;
