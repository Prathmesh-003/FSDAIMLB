const parent = document.getElementById("parent");
const root = ReactDOM.createRoot(parent);

const h2 = React.createElement(
  "h2",
  { style: { background: "brown", color: "white",textAlign:"center" } },
  "  ABES ENGINEERING COLLEGE"
);

const l1 = React.createElement("li", {}, "java");
const l2 = React.createElement("li", {}, "python");
const l3 = React.createElement("li", {}, "React");
const list = React.createElement("ul", { style: { background: "cyan" } }, l1, l2, l3);
const nameAndPic = React.createElement(
  "div",
  {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "20px",
    },
  },
  React.createElement("img", {
    src: "https://imgs.search.brave.com/WG0qoXw5Z-34rcfdvahZGWR2f3RuX48RHv1GGs9o234/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzFjL2Y2/L2ZjLzFjZjZmYzk3/YzRmNzU0Yzg4MGYy/MTIzYmU2ZTI3Zjk3/LmpwZw",
    alt: "react",style: { width: "100px", height: "100px", borderRadius: "70%" },
  }),
  React.createElement("h1", {}, "Prathmesh")
);

const wrapper = React.createElement("div", {}, h2, nameAndPic, list);
root.render(wrapper);

//jsx
