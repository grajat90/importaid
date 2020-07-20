import Link from "next/link";
import { ReactSVG } from "react-svg";
import MessageButton from "./footerMessageButton";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
export default function Footer({ device }) {
  const router = useRouter();
  const toastshow = () =>
    toast.success("📬 Message Sent Successfully", {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  return (
    <footer style={styles.footer} id="footer">
      <div style={styles.container}>
        <div style={styles.one}>
          <div style={styles.links}>
            <ul>
              <li>
                <ScrollLink
                  to="pricing"
                  smooth={true}
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    router.push("/");
                  }}
                >
                  <a style={{ textDecoration: "none" }}>Pricing</a>
                </ScrollLink>
                &nbsp;&nbsp;|&nbsp;&nbsp;
                <ScrollLink
                  style={{ cursor: "pointer" }}
                  to="allservices"
                  smooth={true}
                  onClick={() => {
                    router.push("/");
                  }}
                >
                  <a style={{ textDecoration: "none" }}>All Services</a>
                </ScrollLink>
              </li>
              <li>
                <Link href="/about">
                  <a style={{ textDecoration: "none" }}>About Us</a>
                </Link>
              </li>
              <li>
                <ScrollLink to="footer" style={{ cursor: "pointer" }}>
                  <a style={{ textDecoration: "none" }}>Contact Us</a>
                </ScrollLink>
              </li>
              <li>
                <a
                  href="mailto:contact@importaid.com"
                  style={{ textDecoration: "none" }}
                >
                  Write to Us
                </a>
              </li>
              <li>
                <a href="/sitemap.xml" style={{ textDecoration: "none" }}>
                  Sitemap
                </a>
              </li>
            </ul>
          </div>
          <div
            style={device == "mobile" ? styles.contactMobile : styles.contact}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <a href="tel:+919650330079" style={{ textDecoration: "none" }}>
                <div
                  style={{
                    cursor: "pointer",
                    display: "flex",
                    flexDirection: "row",
                    paddingBottom: 20,
                  }}
                >
                  <ReactSVG
                    src="/phone.svg"
                    style={{ width: 15, height: 15 }}
                  />{" "}
                  &nbsp;+91-9650330079
                </div>
              </a>
              <a
                href="mailto:contact@importaid.com"
                style={{ textDecoration: "none" }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    cursor: "pointer",
                  }}
                >
                  <ReactSVG
                    src="/email.svg"
                    style={{ width: 15, height: 15 }}
                  />{" "}
                  &nbsp;contact@importaid.com
                </div>
              </a>
            </div>
            <div style={{ marginTop: device == "mobile" ? 20 : 0 }}>
              <MessageButton device={device} toastshow={toastshow} />
            </div>
          </div>
        </div>
        <div style={styles.two}>
          <div>
            &copy; Copyright. All rights reserved. By viewing this site you
            agree to the&nbsp;
            <Link href="/tnc">
              <a>terms and conditions</a>
            </Link>
            &nbsp; and&nbsp;
            <Link href="/privacypolicy">
              <a>privacy policy</a>
            </Link>
            .
          </div>
        </div>
      </div>
      <style jsx>
        {`
          ul {
            list-style: none;
          }
          li {
            padding: 5px 0px 5px 0px;
            font-size: 15px;
          }
          a {
            color: #000000;
          }
        `}
      </style>
    </footer>
  );
}

const styles = {
  footer: {
    width: "100%",
    bottom: 0,
    left: 0,
    outline: 1,
    outlineColor: "#000",
    outlineStyle: "solid",
    outlineOffset: -1,
    backgroundColor: "#F2F2F2",
  },
  container: {
    flexDirection: "column",
    display: "flex",
  },
  one: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    display: "flex",
  },
  two: {
    flex: 2,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#000",
    borderTopStyle: "solid",
    fontWeight: 200,
    fontSize: 12,
    padding: 5,
  },
  links: {
    flex: 3,
    padding: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRight: 1,
    borderRigthColor: "#000",
    borderRightStyle: "solid",
  },
  contact: {
    flex: 4,
    padding: 5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    fontSize: 15,
  },
  contactMobile: {
    flex: 4,
    padding: 5,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 15,
  },
};
