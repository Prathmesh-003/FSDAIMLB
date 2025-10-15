const parent = document.getElementById("parent");
const root = ReactDOM.createRoot(parent);

const h2 = React.createElement(
  "h2",
  { style: { background: "brown", color: "white" } },
  "welcome to react dom"
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
    src: "https://imgs.search.brave.com/a8s3pmo-DZYQF-1akKpxxwaOFK0QEtBkTUq5xu3B5e8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hcGku/bWVtZXMuY28uaW4v/bWVkaWEvbWVtZXN2/aWRlby90ZW1wbGF0/ZS9IYWtsYSUyMFNo/YWhydWtoJTIwS2hh/biUyME1lbWUlMjBU/ZW1wbGF0ZS5qcGc",
    alt: "react",
    style: { width: "100px", height: "100px", borderRadius: "50%" },
  }),
  React.createElement("h1", {}, "Prathmesh")
);

const wrapper = React.createElement("div", {}, h2, nameAndPic, list);
root.render(wrapper);