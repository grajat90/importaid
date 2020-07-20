import { ReactSVG } from "react-svg";
import Link from "next/link";
import { useRouter } from "next/router";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { useState, useRef } from "react";
export default function HeaderMobile({ width, selected }) {
  const router = useRouter();
  const wrapperref = useRef();
  function handleClick() {
    var wrapper = wrapperref.current;
    wrapper.classList.toggle("is-nav-open");
  }
  return (
    <header style={{ ...styles.header, width: width }}>
      <div style={{ ...styles.divContainer, width: width }}>
        <div style={styles.logo}>
          <ReactSVG
            onClick={() => {
              router.push("/");
              scroll.scrollToTop();
            }}
            style={{ cursor: "pointer" }}
            src="/logo.svg"
          />
        </div>
        <div
          style={{
            display: "flex",
            flex: 1,
            width: "inherit",
            justifyContent: "flex-end",
            paddingRight: 20,
          }}
        >
          <ReactSVG
            src="/hamburger.svg"
            style={{ cursor: "pointer" }}
            onClick={() => {
              handleClick();
            }}
          />
        </div>
        <div ref={wrapperref} className="wrapper">
          <div className="cross">
            <ReactSVG
              src="/exit.svg"
              style={{ cursor: "pointer" }}
              onClick={() => {
                handleClick();
              }}
            />
          </div>
          <div className="nav">
            <div style={styles.main}>
              <div style={styles.tabs}>
                <ScrollLink
                  to="pricing"
                  smooth={true}
                  onClick={() => {
                    handleClick();
                    router.push("/");
                  }}
                >
                  <a
                    style={{
                      textDecoration: "none",
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
                    handleClick();
                    router.push("/");
                  }}
                >
                  <a
                    style={{
                      textDecoration: "none",
                      color: "#000",
                      cursor: "pointer",
                    }}
                  >
                    All Services
                  </a>
                </ScrollLink>
              </div>
              <div style={styles.tabs} onClick={() => handleClick()}>
                <Link href="/about">
                  <a
                    style={{
                      textDecoration: "none",
                      color: "#000",
                      cursor: "pointer",
                    }}
                  >
                    About
                  </a>
                </Link>
              </div>
              <div style={styles.tabs}>
                <ScrollLink
                  to="footer"
                  smooth={true}
                  onClick={() => {
                    handleClick();
                  }}
                >
                  <a
                    style={{
                      textDecoration: "none",
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
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    borderBottomStyle: "solid",
  },
  divContainer: {
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 10,
  },
  logo: { flex: 1, justifyContent: "flex-start", paddingLeft: 50 },
  main: {
    flex: 1,
    height: "inherit",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    lineHeight: 1,
    flexDirection: "column",
    fontWeight: 600,
    fontSize: 25,
    width: "100vw",
    paddingRight: 50,
  },
  tabs: {
    display: "flex",
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    paddingLeft: 20,
    paddingRight: 20,
  },
};
