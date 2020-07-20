import Link from "next/link";
import { useState } from "react";
import ReactModal from "react-modal";
const AWS = require("aws-sdk");
AWS.config.update({
  accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.NEXT_PUBLIC_ACCESS_KEY,
  region: process.env.NEXT_PUBLIC_AWS_DEFAULT_REGION,
});
const ses = new AWS.SES({ apiVersion: "2010-12-01" });
export default function MessageButton({ toastshow, device }) {
  const [hover, setHover] = useState(false);
  const [open, setOpen] = useState(false);
  const [from, setFrom] = useState(null);
  const [text, setText] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [sendhover, setSendhover] = useState(false);
  const submit = () => {
    if (from == null || from == "" || from == " ") {
      setErrorMessage("From Field Cannot be blank");
      setSendhover(false);
      return;
    } else if (text == null || text == "" || text == " ") {
      setErrorMessage("You can't send a blank message");
      setSendhover(false);
      return;
    } else {
      setErrorMessage(null);
      setOpen(false);
      setHover(false);
      setSendhover(false);
      var senddata =
        '{ "contact":"' +
        from.toString() +
        '","message":"' +
        text.toString() +
        '"}';
      var params = {
        Destination: {
          ToAddresses: ["private@importaid.com"],
        },
        Source: "New client message <private@importaid.com>" /* required */,
        Template: "importaidTemplate" /* required */,
        TemplateData: senddata /* required */,
        SourceArn:
          "arn:aws:ses:ap-south-1:117335449492:identity/private@importaid.com",
      };
      ses.sendTemplatedEmail(params, function (err, data) {
        if (err) console.log(err, err.stack);
        // an error occurred
        else {
          console.log(data);
          toastshow();
        } // successful response
      });
    }
  };
  return (
    <>
      <Link href="/">
        <div
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onClick={(event) => {
            event.preventDefault();
            setOpen(true);
            setSendhover(false);
          }}
          style={{
            ...(hover ? styles.containerHover : styles.containerNormal),
            cursor: "pointer",
          }}
        >
          Write A Message
        </div>
      </Link>
      <ReactModal
        onRequestClose={() => setOpen(false)}
        isOpen={open}
        style={device == "mobile" ? styles.modalStyleMobile : styles.modalStyle}
      >
        <form style={styles.form}>
          <input
            style={styles.from}
            type="text"
            name="from"
            placeholder="Your Phone or Email"
            value={from}
            onChange={(event) => setFrom(event.target.value)}
          />
          <textarea
            aria-multiline="true"
            style={styles.text}
            type="text"
            name="text"
            placeholder="Your Message"
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: device == "mobile" ? "100%" : "inherit",
              justifyContent: device == "mobile" ? "center" : "flex-end",
              alignItems: "center",
            }}
          >
            <div style={styles.error}>{errorMessage}</div>
            <div
              style={
                sendhover
                  ? device == "mobile"
                    ? { ...styles.sendinactive, width: "100%" }
                    : styles.sendinactive
                  : device == "mobile"
                  ? { ...styles.sendactive, width: "100%" }
                  : styles.sendactive
              }
              onClick={() => {
                setSendhover(true);
                setTimeout(submit, 100);
              }}
            >
              Send Message
            </div>
          </div>
        </form>
      </ReactModal>
    </>
  );
}

const styles = {
  containerNormal: {
    padding: 15,
    outline: 1,
    outlineStyle: "solid",
    backgroundColor: "#f2f2f2",
    color: "#000000",
    outlineColor: "#000000",
  },
  containerHover: {
    padding: 15,
    outline: 1,
    outlineStyle: "solid",
    backgroundColor: "#000000",
    color: "#f2f2f2",
    outlineColor: "#000000",
  },
  modalStyle: {
    overlay: {
      backgroundColor: "#BBBBBB90",
    },
    content: {
      position: "absolute",
      top: "12vh",
      left: "15vw",
      borderRadius: 0,
      outlineColor: "#000",
      outlineWidth: 1,
      outlineStyle: "solid",
      width: "70vw",
      height: "70vh",
      fontFamily: "Raleway",
      zIndex: 999999,
    },
  },
  modalStyleMobile: {
    overlay: {
      backgroundColor: "#BBBBBB90",
    },
    content: {
      position: "absolute",
      top: "12vh",
      left: "15vw",
      borderRadius: 0,
      outlineColor: "#000",
      outlineWidth: 1,
      outlineStyle: "solid",
      width: "90vw",
      height: "70vh",
      fontFamily: "Raleway",
      zIndex: 999999,
    },
  },
  form: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "inherit",
    justifyContent: "space-between",
    alignItems: "center",
    fontFamily: "Raleway",
  },
  from: {
    fontSize: 20,
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#000",
    borderStyle: "solid",
    fontWeight: 300,
  },
  text: {
    height: "inherit",
    marginTop: 10,
    marginBottom: 15,
    fontSize: 25,
    width: "100%",
    padding: 10,
    borderWidth: 1,
    fontFamily: "Raleway",
    borderColor: "#000",
    borderStyle: "solid",
    fontWeight: 300,
  },
  sendactive: {
    cursor: "pointer",
    padding: "13px 7px 13px 7px ",
    border: "none",
    backgroundColor: "#5790FF",
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 20,
    fontWeight: 500,
  },
  sendinactive: {
    cursor: "pointer",
    padding: "12px 6px 12px 6px ",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#5790FF",
    backgroundColor: "#fff",
    color: "#5790FF",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 20,
    fontWeight: 500,
  },
  error: {
    color: "#ff0033",
    marginRight: 20,
    fontWeight: 600,
  },
};
