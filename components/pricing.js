import { ReactSVG } from "react-svg";
import Link from "next/link";
import { useState } from "react";

export default function Pricing() {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <div style={styles.container} id="pricing">
        <div style={styles.heading}>
          SINGLE FLAT PRICING <ReactSVG src="/asterisk.svg" />{" "}
        </div>
        <div style={styles.pricingMainBox}>
          <div>
            <div style={styles.onepointone}>What you get for $100/month:</div>
            <div style={styles.onepointtwo}>
              <div style={styles.row}>
                <div style={styles.item}>
                  {" "}
                  <ReactSVG src="/arrow-forward.svg" />
                  &nbsp;&nbsp;Access to our local and professional expertise.
                </div>
                <div style={styles.item}>
                  {" "}
                  <ReactSVG src="/arrow-forward.svg" />
                  &nbsp;&nbsp;Flat service fee. Get access to all our services
                  for this single economical price.
                </div>
              </div>
              <div style={styles.row}>
                <div style={styles.item}>
                  {" "}
                  <ReactSVG src="/arrow-forward.svg" />
                  <span>
                    &nbsp;&nbsp;On demand support, fieldwork, market research
                    and all our services.{" "}
                    <Link href="/">
                      <a
                        style={{
                          fontSize: 12,
                          display: "flex",
                          justifyContent: "flex-end",
                          alignItems: "flex-end",
                          color: "#000",
                          float: "right",
                          clear: "both",
                          fontWeight: 500,
                        }}
                      >
                        See all services
                      </a>
                    </Link>
                  </span>
                </div>
                <div style={styles.item}>
                  {" "}
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
                      amount needs to be paid will be charged seperately. Such
                      overhead expenses will be billed separately. Contact Us
                      for more info.
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
    padding: 50,
    marginBottom: "5vh",
  },
  heading: {
    marginTop: 30,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 45,
    fontWeight: 700,
  },
  pricingMainBox: {
    outline: 1,
    margin: 20,
    outlineColor: "#000",
    outlineStyle: "solid",
    display: "flex",
    flexDirection: "row",
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
    justifyContent: "space-between",
    alignItems: "space-between",
    padding: "2vw",
    fontSize: 12,
    fontWeight: 300,
    flexDirection: "column",
  },
  row: {
    width: "60vw",
    padding: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "space-between",
  },
  item: {
    width: "25vw",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  ratebox: {
    padding: "3vw 2vw 3vw 2vw",
    display: "flex",
    backgroundColor: "#F2F2F2",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderLeftWidth: 10,
    borderLeftStyle: "solid",
    borderLeftColor: "#5790FF",
  },
  allfor: {},
  pricebutton: {
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "1vw",
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
    marginTop: "4vh",
    alignSelf: "flex-start",
    width: 300,
    borderColor: "#000",
    borderWidth: 1,
    zIndex: 9999,
    borderStyle: "solid",
    float: "right",
    clear: "both",
  },
};
