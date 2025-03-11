/*
<div id = "parent">
    <div i = "child">
        <h1 I'm h1 Tag />
    <div>
    <div i = "child2">
        <h1 I'm h1 Tag />
    <div>
<div>
React.createElement(Object)  converts HTML(Browser understands)
*/

const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm h1 tag"),
    React.createElement("h2", {}, "I'm h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm h1 tag"),
    React.createElement("h2", {}, "I'm h2 tag"),
  ]),
]);
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
