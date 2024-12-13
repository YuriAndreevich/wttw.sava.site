// import { useEffect } from "react";
// import ReactDOMServer from "react-dom/server";
// import ReactDOM from "react-dom";

// const YourComponent = () => {
//   useEffect(() => {
//     const changeClassInParagraphs = () => {
//       const container = document.getElementById("your-container-id");
//       const paragraphs = container.querySelectorAll("p");

//       paragraphs.forEach((paragraph) => {
//         paragraph.classList.add("your-new-class");
//         paragraph.classList.remove("your-old-class");
//       });
//     };

//     changeClassInParagraphs();
//   }, []);

//   return (
//     <div id="your-container-id">
//       <p className="your-old-class">Paragraph 1</p>
//       <p className="your-old-class">Paragraph 2</p>
//     </div>
//   );
// };

// const componentAsString = ReactDOMServer.renderToString(<YourComponent />);

// ReactDOM.hydrate(
//   <div dangerouslySetInnerHTML={{ __html: componentAsString }} />,
//   document.getElementById("root")
// );

// export default YourComponent;
