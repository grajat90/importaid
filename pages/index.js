import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";
import Hero from "../components/hero";
import React, { Component } from "react";
import Pricing from "../components/pricing";
import PricingMobile from "../components/pricingMobile";
import AllServices from "../components/allservices";
export default class Home extends Component {
  state = {
    width: 0,
    vh: 0,
    device: null,
  };
  constructor(props) {
    super(props);
    this.updateLayout = this.updateLayout.bind(this);
  }
  componentDidMount() {
    this.updateLayout();
    window.addEventListener("resize", this.updateLayout());
  }
  updateLayout() {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight,
      device: window.innerWidth <= 768 ? "mobile" : "desktop",
    });
  }
  render() {
    return (
      <body
        style={{
          width: this.state.width,
          margin: 0,
          padding: 0,
          display: "flex",
          width: "100%",
        }}
      >
        <div
          style={{ width: this.state.width, padding: 0, fontFamily: "Raleway" }}
        >
          <Head>
            <title>importaid. - Making business easier</title>
          </Head>
          <Header
            selected={null}
            device={this.state.device}
            width={this.state.width}
          />
          <Hero device={this.state.device} />
          {this.state.device == "mobile" ? <PricingMobile /> : <Pricing />}
          <AllServices device={this.state.device} />
          <Footer device={this.state.device} />
        </div>
      </body>
    );
  }
}
