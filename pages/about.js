import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";
import React, { Component } from "react";
import Link from "next/link";
export default class Home extends Component {
  state = {
    width: 0,
    vh: 0,
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
      <body style={{ margin: 0 }}>
        <div
          style={{
            width: this.state.width,
            padding: 0,
            fontFamily: "Raleway",
          }}
        >
          <Head>
            <title>importaid. - About Us</title>
          </Head>
          <Header
            selected={3}
            device={this.state.device}
            width={this.state.width}
          />
          <div
            style={{
              marginTop: 80,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontWeight: 700,
                fontSize: 50,
                width: "100%",
              }}
            >
              About Us
            </div>
            <div
              style={{
                margin: 20,
                height: 10,
                width: "50vw",
                backgroundColor: "#5790FF",
              }}
            />
            <div
              style={{
                fontSize: 17,
                fontWeight: 400,
                padding: "50px 100px 50px 100px",
              }}
            >
              <p>
                ImportAid started as a vision by our founder that no company,
                however small should feel at a disadvantage when it comes to
                expansion. Our team works round the clock to ensure that you can
                focus on your core business needs, while we handle the importing
                side of things from India. That includes fieldwork, samples,
                inspections, documentation, delivery of goods, and{" "}
                <Link href="/">
                  <a style={{ color: "#000" }}>much more</a>
                </Link>
                .
              </p>

              <p>
                We believe in providing the best quality of sources, curated
                especially for your business needs at prices that won’t hinder
                your expansion plans.{" "}
              </p>
              <br />
              <p>
                <h3>Our Values</h3>
                <ul>
                  <li>Trust</li>
                  <li>Collaboration</li>
                  <li>Excellence</li>
                  <li>Consistency</li>
                </ul>
              </p>
              <br />
              <p>
                <h3>Our Mission</h3>
                <ul>
                  <li>Global partnership</li>
                  <li>Sustainable Business Expansion </li>
                  <li>Accelerating Business Growth</li>
                  <li>Delivering Results</li>
                </ul>
              </p>
            </div>
          </div>
          <Footer device={this.state.device} />
        </div>
        <style jsx>{`
          ul {
            list-style: none;
          }
        `}</style>
      </body>
    );
  }
}
