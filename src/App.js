const htmlElement = React.createElement("h1", {id: 'title'}, "Hello World with React!")
             const root = ReactDOM.createRoot(document.getElementById("root"));
             root.render(htmlElement);
             console.log(htmlElement);
             console.log(root);