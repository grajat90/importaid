import { ReactSVG } from "react-svg";
import Link from "next/link";
import { useState } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
export default function PricingMobile({ height }) {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <div style={styles.container} id="pricing">
        <div style={styles.heading}>
          <span style={{ flex: 1 }}>SINGLE</span>
          <span style={{ flex: 1 }}> FLAT</span>
          <span
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "row",
            }}
          >
            <span>PRICING </span>
            <ReactSVG style={{ marginTop: -20 }} src="/asterisk.svg" />
          </span>
        </div>
        <div style={styles.pricingMainBox}>
          <div>
            <div style={styles.onepointone}>What you get for $100/month:</div>
            <div style={styles.onepointtwo}>
              <div style={styles.row}>
                <div style={styles.item}>
                  <ReactSVG src="/arrow-forward.svg" />
                  &nbsp;Access to our local and professional expertise.
                </div>
                <div style={styles.item}>
                  <ReactSVG src="/arrow-forward.svg" />
                  &nbsp;Flat service fee. Get access to all our services for
                  this single economical price.
                </div>
              </div>
              <div style={styles.row}>
                <div style={styles.item}>
                  <ReactSVG src="/arrow-forward.svg" />
                  <span>
                    &nbsp;On demand support, fieldwork, market research and all
                    our services.
                    <ScrollLink to="allservices" smooth={true}>
                      <a
                        style={{
                          cursor: "pointer",
                          fontSize: 12,
                          display: "flex",
                          justifyContent: "flex-end",
                          alignItems: "flex-end",
                          color: "#000",
                          float: "right",
                          clear: "both",
                          fontWeight: 500,
                          textDecoration: "underline",
                        }}
                      >
                        See all services
                      </a>
                    </ScrollLink>
                  </span>
                </div>
                <div style={styles.item}>
                  <ReactSVG src="/arrow-forward.svg" />
                  &nbsp;&nbsp;All overhead expenses chargable&nbsp;&nbsp;&nbsp;
                  <ReactSVG
                    onMouseEnter={() => setVisible(true)}
                    onMouseLeave={() => setVisible(false)}
                    src="/info.svg"
                  />
                  {visible ? (
                    <div
                      style={styles.infobox}
                      onMouseLeave={() => setVisible(false)}
                      onMouseEnter={() => setVisible(true)}
                    >
                      Expenses such as rail/air travel, sample purchasing,
                      shipping of goods, and other such expenses for which extra
                      amount needs to be paid will be charged seperately. Travel
                      expenses waived in certain locations. Such overhead
                      expenses will be billed separately. Contact Us for more
                      info.
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
          <div style={styles.ratebox}>
            <div style={styles.allfor}>All for</div>
            <div style={styles.pricebutton}>
              <div style={styles.rate}>
                <font size="60">$</font>100
              </div>
              <div style={styles.monthly}>/month</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const styles = {
  container: {
    borderTop: 1,
    borderTopStyle: "dashed",
    borderTopColor: "#000",
    borderBottom: 1,
    borderBottomStyle: "dashed",
    borderBottomColor: "#000",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "50px 30px 50px 30px",
  },
  heading: {
    marginTop: 30,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    fontSize: 45,
    width: "100%",
    fontWeight: 700,
  },
  pricingMainBox: {
    outline: 1,
    outlineColor: "#000",
    outlineStyle: "solid",
    display: "flex",
    width: "96vw",
    flexDirection: "column",
  },
  onepointone: {
    display: "flex",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    borderBottomStyle: "solid",
  },
  onepointtwo: {
    display: "flex",
    height: "inherit",
    justifyContent: "center",
    alignItems: "center",
    padding: "3vw",
    fontSize: 14,
    fontWeight: 300,
    flexDirection: "column",
  },
  row: {
    width: "100vw",
    padding: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "space-around",
  },
  item: {
    width: "35vw",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-start",
  },
  ratebox: {
    padding: "7vw 5vw 7vw 5vw",
    display: "flex",
    backgroundColor: "#F2F2F2",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderTopWidth: 10,
    borderTopStyle: "solid",
    borderTopColor: "#5790FF",
  },
  allfor: {},
  pricebutton: {
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "3vw",
    backgroundColor: "#000",
    borderRadius: 15,
    boxShadow: "6px 5px 1px rgba(0, 0, 0, 0.25)",
  },
  rate: {
    color: "#fff",
    fontWeight: 600,
    fontSize: 65,
  },
  monthly: {
    display: "flex",
    height: 60,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    color: "#fff",
  },
  infobox: {
    backgroundColor: "#F2F2F2",
    padding: 10,
    position: "absolute",
    left: 50,
    marginTop: "4vh",
    alignSelf: "flex-start",
    width: 300,
    borderColor: "#000",
    borderWidth: 1,
    zIndex: 9999,
    borderStyle: "solid",
  },
};
