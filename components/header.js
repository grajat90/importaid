import { ReactSVG } from "react-svg";
import Link from "next/link";
import { useRouter } from "next/router";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { useState } from "react";
import HeaderMobile from "./headermobile";
export default function Header({ device, width, selected }) {
  if (device == "mobile") {
    return (
      <>
        <HeaderMobile width={width} />
      </>
    );
  }
  const [inpage, setInpage] = useState(null);
  const router = useRouter();
  return (
    <header style={styles.header}>
      <div style={styles.divContainer}>
        <div style={styles.logo}>
          <ReactSVG
            onClick={() => {
              setInpage(null);
              router.push("/");
              scroll.scrollToTop();
            }}
            style={{ cursor: "pointer" }}
            src="/logo.svg"
          />
        </div>
        <div style={styles.main}>
          <div style={styles.tabs}>
            <ScrollLink
              to="pricing"
              smooth={true}
              onClick={() => {
                router.push("/");
                setInpage(1);
              }}
            >
              <a
                style={{
                  textDecoration: inpage == 1 ? "underline" : "none",
                  color: "#000",
                  cursor: "pointer",
                }}
              >
                Pricing
              </a>
            </ScrollLink>
          </div>
          <div style={styles.tabs}>
            <ScrollLink
              to="allservices"
              smooth={true}
              onClick={() => {
                router.push("/");
                setInpage(2);
              }}
            >
              <a
                style={{
                  textDecoration: inpage == 2 ? "underline" : "none",
                  color: "#000",
                  cursor: "pointer",
                }}
              >
                All Services
              </a>
            </ScrollLink>
          </div>
          <div style={styles.tabs}>
            <Link href="/about">
              <a
                style={{
                  textDecoration: selected == 3 ? "underline" : "none",
                  color: "#000",
                  cursor: "pointer",
                }}
              >
                About
              </a>
            </Link>
          </div>
          <div style={styles.tabs}>
            <ScrollLink to="footer" smooth={true} onClick={() => setInpage(4)}>
              <a
                style={{
                  textDecoration: inpage == 4 ? "underline" : "none",
                  color: "#000",
                  cursor: "pointer",
                }}
              >
                Contact Us
              </a>
            </ScrollLink>
          </div>
        </div>
      </div>
    </header>
  );
}

const styles = {
  header: {
    position: "sticky",
    backgroundColor: "#fff",
    top: 0,
    left: 0,
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    borderBottomStyle: "solid",
  },
  divContainer: {
    flexDirection: "row",
    display: "flex",
    paddingTop: 10,
    paddingBottom: 10,
  },
  logo: { flex: 1, justifyContent: "flex-start", paddingLeft: 50 },
  main: {
    flex: 2,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
    fontWeight: 500,
    paddingRight: 50,
  },
  tabs: {
    paddingLeft: 20,
    paddingRight: 20,
  },
};
