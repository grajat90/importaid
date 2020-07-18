import { ReactSVG } from "react-svg";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

var vwlocal = 0;
export default function Hero({ vw }) {
  vwlocal = vw;
  return (
    <>
      <div style={styles.bgKeyWords}>
        {/* Keywords */}
        Import Export Help Aid We help you Fieldwork Ideas Expansion Build
        business get contacts expand outreach create reach reduce expense cheap
        economic field services service sector meet people delivery check follow
        up factories industries businesses Import Export from india get local
        help local people from india for business
      </div>
      <div style={styles.container}>
        <div style={{ display: "flex" }}>
          <div style={styles.heroText}>
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
          <div style={styles.downArrow}>
            <ScrollLink to="allservices" smooth={true}>
              <ReactSVG
                src="/arrow-down.svg"
                style={{ width: 15, height: 15, cursor: "pointer" }}
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
    color: "#979797",
    fontSize: 26,
  },
  downArrow: {
    display: "flex",
    flex: 5,
    alignItems: "flex-end",
    justifyContent: "flex-start",
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
};
