import { useState, useEffect } from "react";
import data from "../public/data.json";
export default function AllServices() {
  const [selected, setSelected] = useState(0);
  const select = (idx) => {
    setSelected(idx);
    setDetails((prev) => ({
      title: items[idx],
      text: data[items[idx]],
    }));
  };
  const [details, setDetails] = useState({ title: null, text: null });
  const items = [
    "Fieldwork",
    "Sample Collection",
    "Sample Delivery",
    "Documentation",
    "Inspection",
    "Dispatch",
    "Follow Up",
    "Quality Check and Control",
    "Market Research",
    "And much more",
  ];
  useEffect(() => {
    select(0);
  }, []);
  return (
    <>
      <div style={styles.container} id="allservices">
        <div style={styles.allBox}>
          {items.map((item, idx) => {
            return (
              <div
                style={selected == idx ? styles.itemselected : styles.item}
                onClick={() => (selected != item ? select(idx) : null)}
              >
                {item}
              </div>
            );
          })}
        </div>
        <div style={styles.info}>
          <h2>{details.title}</h2>
          {details.text}
        </div>
      </div>
    </>
  );
}

const styles = {
  container: {
    height: "100vh",
    padding: 50,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  allBox: {
    height: "55vh",
    width: "20vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    outline: 1,
    outlineColor: "#000",
    outlineStyle: "solid",
    overflowY: "scroll",
    overflowX: "clip",
    WebkitScrollbar: { display: "none" },
    fontSize: 20,
    fontWeight: 500,
  },
  item: {
    padding: "30px 0px 30px 0px",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    width: "20vw",
  },
  itemselected: {
    padding: "30px 0px 30px 0px",
    cursor: "default",
    display: "flex",
    width: "20vw",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
  },
  info: {
    flexDirection: "column",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    padding: "20px 40px 20px 40px",
    width: "35vw",
  },
};
