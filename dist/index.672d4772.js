//h1 tag using pure react
const heading1 = React.createElement("h1", {
    style: {
        color: "red"
    }
}, "Heading1!");
const heading2 = React.createElement("h2", {}, "Heading2!");
const heading3 = React.createElement("h3", {}, "Heading3!");
//when we have more than one element to render we create an array
const container = React.createElement("div", {}, [
    heading1,
    heading2,
    heading3
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
//passing a react element inside the root
root.render(container);

//# sourceMappingURL=index.672d4772.js.map
