import  { useState } from "react";

function Audiobiblioteka() {
  const [isVisible, setIsVisible] = useState(null);

  const toggleVisibility = (index) => {
    if (isVisible === index) {
      setIsVisible(null);
    } else {
      setIsVisible(index);
    }
  };
  return (
    <div>
      <p className="contentTabs" onClick={() => toggleVisibility(0)}>
        Беседа библиотекаря с незрячим читателем
      </p>
      {isVisible === 0 && (
        <div className="content">
          <iframe
            src="https://drive.google.com/file/d/1RFX7TqsNhaqsSszA4JNno9NGLf-kFycg/preview"
            width="640"
            height="480"
            style={{ display: "block", margin: "auto" }}
          ></iframe>
        </div>
      )}

      <p className="contentTabs" onClick={() => toggleVisibility(1)}>
        Взаимодействие медперсонала с незрячим пациентом
      </p>

      {isVisible === 1 && (
        <div className="content">
          <embed
            src="https://drive.google.com/file/d/18-t_e3HJ9PVsFZEhsH-7h9VVqsjG0vIb/preview"
            width="640"
            height="480"
            style={{ display: "block", margin: "auto" }}
          ></embed>
        </div>
      )}

      <p className="contentTabs" onClick={() => toggleVisibility(2)}>
        Встреча со знакомым незрячим
      </p>

      {isVisible === 2 && (
        <div className="content">
          <embed
            src="https://drive.google.com/file/d/1kr7sk6Dw1GdVWkVpfEnRWCUoLgHjGTJH/preview"
            width="640"
            height="480"
            style={{ display: "block", margin: "auto" }}
          ></embed>
        </div>
      )}
      <p className="contentTabs" onClick={() => toggleVisibility(3)}>
        Если Вам нужно что - то передать незрячему
      </p>

      {isVisible === 3 && (
        <div className="content">
          <embed
            src="https://drive.google.com/file/d/1dlhaaH0u6PSz8hhYBjnngP_cgmUmNnmC/preview"
            width="640"
            height="480"
            style={{ display: "block", margin: "auto" }}
          ></embed>
        </div>
      )}
      <p className="contentTabs" onClick={() => toggleVisibility(4)}>
        Жесты и мимика в беседе с незрячим
      </p>

      {isVisible === 4 && (
        <div className="content">
          <embed
            src="https://drive.google.com/file/d/1Nph8sz23S8V3oNJNA830bU-UY89M-Nen/preview"
            width="640"
            height="480"
            style={{ display: "block", margin: "auto" }}
          ></embed>
        </div>
      )}
      <p className="contentTabs" onClick={() => toggleVisibility(5)}>
        Как правильно предложить помощь при сопровождении незрачего
      </p>

      {isVisible === 5 && (
        <div className="content">
          <embed
            src="https://drive.google.com/file/d/1i44Z5Jvzta3-pjExAk8ST4meSamIQpEI/preview"
            width="640"
            height="480"
            style={{ display: "block", margin: "auto" }}
          ></embed>
        </div>
      )}
    </div>
  );
}

export default Audiobiblioteka;
