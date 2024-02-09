const parent= React.createElement("div",
{id:"parent"},
[React.createElement("div",{id:"child"},
[React.createElement("h1",{id:"heading"},"I am h1 tag"),
React.createElement("h1",{id:"heading2"},"I am h1 tag2"),]),
React.createElement("div",{id:"child"},
[React.createElement("h1",{id:"heading"},"I am h1 tag"),
React.createElement("h1",{id:"heading2"},"I am h1 tag2"),])]);


const heading= React.createElement("h1",
{id:"abc",xyz:"xyz"},
"hello");
    const root=ReactDOM.createRoot(document.getElementById("root"));
    root.render(parent);

    /////React(element)->creates an Object and which inturn getes converted to html tags understood by browser