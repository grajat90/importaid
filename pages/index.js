import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";
import Hero from "../components/hero";
import React, { Component } from "react";
import Pricing from "../components/pricing";
import AllServices from "../components/allservices";
import { ToastContainer, toast } from "react-toastify";
export default class Home extends Component {
  state = {
    width: 0,
    vh: 0,
  };
  componentDidMount() {
    this.setState({
      width: window.innerWidth,
      vh: window.innerHeight - 20,
    });
  }
  render() {
    const toastshow = () =>
      toast.success("📬 Message Sent Successfully", {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    return (
      <body style={{ margin: 0 }}>
        <div
          style={{ width: this.state.width, padding: 0, fontFamily: "Raleway" }}
        >
          <Head>
            <link rel="shortcut icon" href="/favicon.ico" />
            <link
              href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800&display=swap"
              rel="stylesheet"
            />
            <meta
              http-equiv="Content-Type"
              content="text/html; charset=utf-8"
            />
            <meta
              name="description"
              content="Import Services in India. Have our team on field getting your work done locally and on time."
            ></meta>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            ></meta>
            <meta
              name="twitter:card"
              value="Import Services in India. Have our team on field getting your work done locally and on time."
            ></meta>

            <meta property="og:title" content="importaid" />
            <meta property="og:type" content="article" />
            <meta property="og:url" content="http://www.importaid.com/" />
            <meta
              property="og:image"
              content="http://importaid.com/mainlogo.jpg"
            />
            <meta property="og:site_name" content="importaid.com" />
            <meta
              property="og:description"
              content="Import Services in India. Have our team on field getting your work done locally and on time."
            />
            <title>importaid. - Making business easier</title>
          </Head>
          <Header selected={null} />
          <Hero vw={this.state.width} />
          <Pricing />
          <AllServices />
          <Footer toastshow={toastshow} />
        </div>
      </body>
    );
  }
}
