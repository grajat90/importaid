import Link from "next/link";
import { useState } from "react";
import ReactModal from "react-modal";
export default function MessageButton() {
  const [hover, setHover] = useState(false);
  const [open, setOpen] = useState(false);
  const [from, setFrom] = useState(null);
  const [text, setText] = useState(null);
  const [sendhover, setSendhover] = useState(false);
  const submit = () => {
    setOpen(false);
    setHover(false);
    setSendhover(false);
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
        style={styles.modalStyle}
      >
        <form style={styles.form}>
          <input
            style={styles.from}
            type="text"
            name="from"
            placeholder="Your Phone or Email"
            value={from}
            onChange={({ value }) => setFrom(value)}
          />
          <textarea
            aria-multiline="true"
            style={styles.text}
            type="text"
            name="text"
            placeholder="Your Message"
            value={text}
            onChange={({ value }) => setText(value)}
          />
          <div
            style={{
              display: "flex",
              width: "inherit",
              justifyContent: "flex-end",
              alignContent: "flex-end",
            }}
          >
            <div
              style={sendhover ? styles.sendactive : styles.sendinactive}
              onClick={() => submit()}
              onMouseEnter={() => {
                setSendhover(true);
              }}
              onMouseLeave={() => {
                setSendhover(false);
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
};
