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
