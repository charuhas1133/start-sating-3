import { useState } from "react";
import "./App.css";
import { FaRegStar } from "react-icons/fa";

const arrayLength = 5;
function App() {
  const [currentRating, setCurrentRating] = useState(0);
  const [mouseOver, setMouseOver] = useState(0);

  const handleclick = (id) => {
    console.log("Mouse Click", id);
    setCurrentRating(id);
  };
  const handleMouseEnter = (id) => {
    console.log("Mouse Enter", id);
    setMouseOver(id);
  };
  const handleMouseLeave = (id) => {
    console.log("Mouse Leave", id);
    setMouseOver(currentRating);
  };
  return (
    <>
      <h1>Star⭐Rating</h1>
      {[...Array(arrayLength)].map((_, index) => {
        index += 1;
        return (
          <>
            <FaRegStar
              style={{
                fontSize: "70px",
                color: index <= (mouseOver || currentRating) ? "red" : "",
              }}
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onClick={() => handleclick(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            ></FaRegStar>
          </>
        );
      })}
    </>
  );
}

export default App;
