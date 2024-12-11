import { useState } from "react";
import { Title } from "components/UI"; // Предполагаем, что Title — это компонент для отображения заголовков

function HoverText({ title }) {
  const [text, setText] = useState(title);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => {
        setText("Начать"); // Меняем текст при наведении
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setText(title); // Возвращаем исходный текст
        setIsHovered(false);
      }}
      style={{
        cursor: "pointer",
        transform: isHovered ? "scale(1.05)" : "scale(1)", // Анимация при наведении
        transition: "transform 0.3s ease-in-out", // Плавный переход
      }}
    >
      <Title>{text}</Title> {/* Отображаем текст внутри компонента Title */}
    </div>
  );
}

export default HoverText;
