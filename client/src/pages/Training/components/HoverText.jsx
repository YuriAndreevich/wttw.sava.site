import { useState } from "react";
import { Title } from "components/UI";
import PropTypes from "prop-types";

function HoverText({ title }) {
  const [text, setText] = useState(title);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => {
        setText("Начать");
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setText(title);
        setIsHovered(false);
      }}
      style={{
        cursor: "pointer",
        transform: isHovered ? "scale(1.05)" : "scale(1)",
        transition: "transform 0.3s ease-in-out",
      }}
    >
      <Title>{text}</Title>
    </div>
  );
}

HoverText.propTypes = {
  title: PropTypes.string.isRequired,
};

export default HoverText;
