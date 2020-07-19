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
          style={{
            width: this.state.width,
            padding: 0,
            fontFamily: "Raleway",
          }}
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
          <Header selected={3} />
          <div
            style={{
              marginTop: 80,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontWeight: 700,
                fontSize: 50,
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
                <h3>Mission</h3>
                <ul>
                  <li>Global partnership</li>
                  <li>Sustainable Business Expansion </li>
                  <li>Accelerating Business Growth</li>
                  <li>Delivering Results</li>
                </ul>
              </p>
            </div>
          </div>
          <Footer />
        </div>
      </body>
    );
  }
}
