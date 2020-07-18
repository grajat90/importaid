import { useState, useEffect } from "react";
import { ReactSVG } from "react-svg";

export default function AllServices() {
  const [selected, setSelected] = useState(0);
  const select = (idx) => {
    setSelected(idx);
    setDetails((prev) => ({
      title: items[idx],
      text: prev.text,
    }));
  };
  const [details, setDetails] = useState({ title: null, text: null });
  const items = ["Fieldwork", "Sample Collection", "And much more"];
  useEffect(() => {
    setDetails({
      title: "Product",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut\
      dolor sapien. Pellentesque vel scelerisque libero. Phasellus vehicula,\
      nibh ac convallis pellentesque, massa urna blandit dolor, ac gravida\
      leo justo nec ante. Proin eu auctor nunc. Fusce sollicitudin auctor\
      venenatis. Pellentesque lobortis vulputate odio luctus placerat. Cras\
      eget est euismod ex gravida laoreet at quis tortor. Curabitur accumsan\
      sapien at libero mollis imperdiet. In mollis, ex vel dictum congue,\
      augue arcu consectetur neque, nec dictum metus nisi vitae leo. Nam nec\
      metus leo. Nullam efficitur nulla id quam hendrerit ultrices. Aliquam\
      erat volutpat. Nam aliquam odio velit, accumsan convallis massa luctus\
      finibus. Nulla feugiat nec elit sit amet lobortis. Pellentesque\
      ullamcorper metus nisl, ut pretium eros vulputate a. Proin tortor mi,\
      rutrum sed tortor eget, euismod blandit arcu.",
    });
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
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    width: "20vw",
    paddingTop: 10,
    width: "inherit",
    paddingBottom: 10,
  },
  itemselected: {
    cursor: "default",
    paddingTop: 10,
    paddingBottom: 10,
    display: "flex",
    width: "inherit",
    justifyContent: "center",
    alignItems: "center",
    width: "20vw",
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
