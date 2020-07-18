import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";
import Hero from "../components/hero";
import React, { Component } from "react";
import Pricing from "../components/pricing";
import AllServices from "../components/allservices";
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
            <title>importaid. - Making business easier</title>
          </Head>
          <Header selected={null} />
          <Hero vw={this.state.width} />
          <Pricing />
          <AllServices />
          <Footer />
        </div>
      </body>
    );
  }
}
