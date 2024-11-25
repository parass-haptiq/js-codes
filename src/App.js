import "./App.css";
import Card from "./components/Card";
import { useState } from "react";

function App() {
  const [showCards, setShowCards] = useState(true);

  const BlogObj = [
    { title: "Blog1", description: "About blog1 ,....." },
    { title: "Blog2", description: "About blog2 ,....." },
    { title: "Blog3", description: "About blog3 ,....." },
    { title: "Blog4", description: "About blog4 ,....." },
  ];

  const blogCard = BlogObj.map((item, pos) => {
    return <Card key={pos} title={item.title} description={item.description} />;
  });

  const hideOnClick = () => {
    setShowCards((prevState) => !prevState); // Use the setShowCards function to update the state
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Hello Everyone</h1>
        <br />
        <button className="hide-btn" onClick={hideOnClick}>
          Hide
        </button>
        <br />
        {showCards ? blogCard : null} {/* Conditional rendering of blogCard */}
      </div>
    </div>
  );
}

export default App;
