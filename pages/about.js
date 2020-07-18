import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";
import React, { Component } from "react";
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
            <title>importaid. - Making business easier</title>
          </Head>
          <Header selected={3} />
          <div
            style={{
              marginTop: 100,
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                vel eros vel ipsum lobortis hendrerit a ut nibh. Vestibulum
                ultrices ex id venenatis accumsan. Nullam vel purus ultrices
                lacus eleifend ultricies et in dolor. Cras finibus ex at dui
                iaculis, id mattis mi malesuada. Phasellus accumsan risus a
                dolor lobortis sodales. Duis facilisis accumsan erat vitae
                iaculis. Maecenas tempor eu leo nec sodales.
              </p>
              <p>
                {" "}
                Curabitur vulputate euismod lobortis. Sed mi est, porttitor a
                dolor quis, auctor vestibulum leo. Donec vestibulum odio vel
                sapien aliquet, at blandit mauris dignissim. Nam dictum ut nulla
                suscipit scelerisque. Proin semper mauris eros, at tempus sem
                pretium id. Aliquam in quam porta, imperdiet nulla sodales,
                facilisis nibh. Quisque lacus felis, consectetur a ligula ut,
                facilisis condimentum nulla. Vestibulum ante ipsum primis in
                faucibus orci luctus et ultrices posuere cubilia curae; Aliquam
                erat volutpat.
              </p>
              <p>
                {" "}
                Cras augue massa, euismod ac nunc quis, consectetur sodales
                quam. Nam vitae aliquam elit, sit amet blandit elit.
                Pellentesque nec magna sit amet dolor porttitor interdum eu
                vitae ante. Integer quis elit porttitor arcu pulvinar placerat a
                ut sem. Vivamus bibendum consequat nisl nec fringilla.
                Vestibulum non varius tortor, sed lacinia ex. Donec vestibulum
                orci elit, lacinia vulputate libero fermentum finibus. Duis ut
                nibh egestas, tempus purus quis, elementum lorem. Quisque lectus
                orci, rhoncus vel nulla nec, bibendum rutrum nisi. In commodo
                lectus gravida fringilla bibendum. Cras dolor mauris, consequat
                nec vehicula auctor, hendrerit nec erat.
              </p>
              <p>
                {" "}
                Vestibulum vel metus ullamcorper diam molestie pellentesque.
                Praesent volutpat nulla ac nunc tempor varius. Cras ornare
                libero nec velit luctus, et fringilla nisl gravida. Fusce eu
                imperdiet ex, ac bibendum felis. In tincidunt viverra nunc,
                vitae pulvinar velit commodo ut. Fusce bibendum, lacus quis
                dignissim suscipit, magna tortor condimentum felis, ac aliquet
                lorem eros in ipsum. In faucibus sem at vestibulum imperdiet.
                Proin viverra porta dui ac venenatis. Donec non mauris gravida,
                vestibulum odio nec, mollis nunc. Pellentesque id est sed mauris
                finibus ullamcorper. In id sapien luctus, tincidunt nibh
                ullamcorper, ultrices lorem.
              </p>
            </div>
          </div>
          <Footer />
        </div>
      </body>
    );
  }
}
