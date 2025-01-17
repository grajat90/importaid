import { ReactSVG } from "react-svg";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

export default function Hero({ device }) {
  return (
    <>
      <div style={styles.bgKeyWords}>
        {/* Keywords */}
        Importaid assistance import help assistance local service imported all
        over india import from india to anywhere in the world importing from
        india importing pharmaceuticals raw materials importaid.com imported.com
        import.com import sercives www.importaid.com business development
        business expansion impact online import service fieldwork expert from
        india talk to people negotiate invest factories markets Import Export
        Help Aid We help you Fieldwork Ideas Expansion Build business get
        contacts expand outreach create reach reduce expense cheap economic
        field services service sector meet people delivery check follow up
        factories industries businesses Import Export from india get local help
        local people from india for business get work done on time punctual
        local expertise local people work round the clock
      </div>
      <div style={styles.container}>
        <div
          style={{
            display: "flex",
            flexDirection: device == "mobile" ? "row" : "row",
          }}
        >
          <div
            style={device == "mobile" ? styles.heroTextMobile : styles.heroText}
          >
            We help you build your business by providing{" "}
            <font color="#000000">import related services </font>
            such as{" "}
            <font color="#000000">
              sample procurement and delivery, documentation, field work,
              hands-on inspection, dispatch follow up, quality checks, on-ground
              market research, factory visits, etc.
            </font>{" "}
            all over India, with local expertise that is reliable and economical
          </div>

          <div
            style={
              device == "mobile" ? styles.downArrowMobile : styles.downArrow
            }
          >
            <ScrollLink to="allservices" smooth={true}>
              <ReactSVG
                src="/arrow-down.svg"
                style={
                  device == "mobile" ? styles.arrowsvg : styles.arrowsvgmobile
                }
              />
            </ScrollLink>
          </div>
        </div>
        <div style={styles.bluebox} />
      </div>
    </>
  );
}

const styles = {
  bgKeyWords: {
    color: "rgba(0,0,0,0)",
    zIndex: -9999999,
    position: "absolute",
    bottom: 0,
    float: "left",
    clear: "both",
  },
  container: {
    paddingLeft: 50,
    paddingTop: 25,
    paddingRight: 50,
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  heroText: {
    flex: 10,
    fontWeight: 300,
    color: "#888888",
    fontSize: 26,
  },
  heroTextMobile: {
    flex: 10,
    fontWeight: 300,
    color: "#888888",
    fontSize: 22,
  },
  downArrow: {
    display: "flex",
    flex: 5,
    alignItems: "flex-end",
    justifyContent: "flex-start",
    margin: 50,
  },
  downArrowMobile: {
    display: "flex",
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    margin: 50,
  },
  bluebox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 15,
    marginTop: 120,
    width: "75vw",
    backgroundColor: "#5790FF",
  },
  arrowsvg: { width: 15, height: 15, cursor: "pointer" },
  arrowsvgmobile: { width: 7, height: 7, cursor: "pointer" },
};
