import  { useState } from "react";
import "./SocialCenter.scss";

import uslugaPng from "assets/img/usluga.png";

import A1 from "assets/img/services/A/A1.jpg";
import A2 from "assets/img/services/A/A2.jpg";
import A3 from "assets/img/services/A/A3.jpg";
import A4 from "assets/img/services/A/A4.jpg";
import A5 from "assets/img/services/A/A5.jpg";
import A6 from "assets/img/services/A/A6.jpg";
import A7 from "assets/img/services/A/A7.jpg";
import A8 from "assets/img/services/A/A8.jpg";
import A9 from "assets/img/services/A/A9.jpg";

import B1 from "assets/img/services/B/B1.jpg";
import B2 from "assets/img/services/B/B2.jpg";
import B3 from "assets/img/services/B/B3.jpg";
import B4 from "assets/img/services/B/B4.jpg";

import C1 from "assets/img/services/C/C1.jpg";
import C2 from "assets/img/services/C/C2.jpg";
import C3 from "assets/img/services/C/C3.jpg";

import D1 from "assets/img/services/D/D1.jpg";
import D2 from "assets/img/services/D/D2.jpg";
import D3 from "assets/img/services/D/D3.jpg";

import E1 from "assets/img/services/E/E1.jpg";
import E2 from "assets/img/services/E/E2.jpg";
import E3 from "assets/img/services/E/E3.jpg";

const Dropdown = ({ options, selectedOption, onOptionChange }) => {
  return (
    <select
      value={selectedOption.usluga}
      onChange={(e) =>
        onOptionChange(
          options.find((option) => option.usluga === e.target.value)
        )
      }
    >
      {options.map((option) => (
        <option key={option.usluga} value={option.usluga}>
          {option.usluga}
        </option>
      ))}
    </select>
  );
};

const dropdownOptions = [
  {
    usluga: "Оказание социально – педагогических услуг",
    otdel: "A",
    imageUrl: A1,
  },
  { usluga: "Оказание социально-бытовых услуг", otdel: "A", imageUrl: A2 },
  {
    usluga: "Оказание консультационно-информационных услуг",
    otdel: "A",
    imageUrl: A3,
  },
  {
    usluga: "Оказание социально-посреднических услуг",
    otdel: "A",
    imageUrl: A4,
  },
  {
    usluga: "Оказание социально-реабилитационных услуг",
    otdel: "A",
    imageUrl: A5,
  },
  {
    usluga: "Посещение культурно-массовых мероприятий",
    otdel: "A",
    imageUrl: A6,
  },
  {
    usluga: "Обеспечение услугой персонального ассистента",
    otdel: "A",
    imageUrl: A7,
  },
  {
    usluga:
      "Формирование и выполнение индивидуальных программ реабилитации, абилитации инвалидов",
    otdel: "A",
    imageUrl: A8,
  },
  {
    usluga: "Пункт проката технических средств социальной реабилитации",
    otdel: "A",
    imageUrl: A9,
  },
  { usluga: "Оказание материальной помощи", otdel: "B", imageUrl: B1 },
  { usluga: "Оказание адресной социальной помощи", otdel: "B", imageUrl: B2 },
  {
    usluga: "Компенсация затрат на приобретение подгузников",
    otdel: "B",
    imageUrl: B3,
  },
  {
    usluga:
      "Содействие в оформлении документов для определения в дома интернаты",
    otdel: "B",
    imageUrl: B4,
  },
  { usluga: "Услуга социального работника", otdel: "C", imageUrl: C1 },
  { usluga: "Услуга социальной сиделки", otdel: "C", imageUrl: C2 },
  { usluga: "Услуга социальной няни", otdel: "C", imageUrl: C3 },
  { usluga: "Оказание гуманитарной помощи", otdel: "D", imageUrl: D1 },
  { usluga: "Оказание психологической помощи", otdel: "D", imageUrl: D2 },
  {
    usluga:
      "Обеспечение инвалидов техническими средствами социальной реабилитации",
    otdel: "D",
    imageUrl: D3,
  },
  { usluga: "Организация досуга", otdel: "E", imageUrl: E1 },
  { usluga: "Поддержание активного образа жизни", otdel: "E", imageUrl: E2 },
  {
    usluga: "Проведение культурно-массовых мероприятий",
    otdel: "E",
    imageUrl: E3,
  },
];

const nameOtdel = {
  A: "Отделение социальной реабилитации,  абилитации инвалидов.",
  B: "Отделение первичного приёма, информации, анализа и прогнозирования.",
  C: "Отделение социальной помощи на дому.",
  D: "Отделение помощи в кризисной ситуации и осуществления функций по опеки и попечительству.",
  E: "Отделение дневного пребывания для граждан пожилого возраста.",
};

function SocCenter() {
  const [selectedOption, setSelectedOption] = useState(dropdownOptions[0]);
  const [stage, setStage] = useState(0);

  const handleOptionChange = (newOption) => {
    setSelectedOption(newOption);
  };

  const getServicesByOtdel = (otdel) => {
    return dropdownOptions.filter((option) => option.otdel === otdel);
  };

  const handleServiceButtonClick = (service) => {
    if (service.otdel === selectedOption.otdel) {
      console.log(`Выбрана услуга: ${service.usluga}`);
      // Ваш код для обработки выбора услуги
    } else {
      alert("Ошибка: Вы выбрали услугу из неверного раздела.");
    }
  };

  return (
    <div
      className={`socCenterContainer ${stage === 1 ? "reception" : ""} ${
        stage === 2 ? "dver" : ""
      } ${stage === 3 ? "cabinet" : ""} ${stage === 4 ? "cabinet" : ""}`}
    >
      {stage === 0 && (
        <div>
          <button
            onClick={() => setStage(1)}
            style={{ backgroundColor: "rgb(56, 161, 105)", color: "white" }}
          >
            Войти в территориальный центр
          </button>
        </div>
      )}

      {stage === 1 && (
        <div>
          <img
            src={uslugaPng}
            style={{ display: "flex", margin: "auto" }}
          ></img>
          <span
            style={{
              color: "green",
              fontWeight: "700",
              height: "150px",
              width: "fit-content",
              fontSize: "20px",
            }}
          >
            <Dropdown
              options={dropdownOptions}
              selectedOption={selectedOption.usluga}
              onOptionChange={handleOptionChange}
              style={{ color: "red" }}
            />
          </span>
          <button
            onClick={() => setStage(2)}
            style={{
              marginBottom: "10%",
              marginLeft: "85.5%",
              backgroundColor: "rgb(56, 161, 105)",
              color: "white",
            }}
          >
            Далее
          </button>
        </div>
      )}

      {stage === 2 && (
        <div>
          <h1
            style={{
              color: "white",
              backgroundColor: "rgb(56, 161, 105)",
              border: "1 px solid black",
              textAlign: "center",
            }}
          >
            Отдел: {nameOtdel[selectedOption.otdel]}
          </h1>
          <button
            onClick={() => setStage(3)}
            style={{
              marginLeft: "79%",
              backgroundColor: "rgb(56, 161, 105)",
              color: "white",
            }}
          >
            Продолжить
          </button>
        </div>
      )}

      {stage === 3 && (
        <div>
          <h1
            style={{
              color: "white",
              backgroundColor: "rgb(56, 161, 105)",
              border: "1 px solid black",
              textAlign: "center",
            }}
          >
            {nameOtdel[selectedOption.otdel]}:
          </h1>
          <div>
            <span
              style={{
                color: "green",
                fontWeight: "700",
                height: "150px",
                width: "fit-content",
                fontSize: "20px",
              }}
            >
              <Dropdown
                options={getServicesByOtdel(selectedOption.otdel)}
                selectedOption={selectedOption}
                onOptionChange={handleOptionChange}
              />
            </span>
          </div>
          <button
            onClick={() => setStage(0)}
            style={{
              backgroundColor: "rgb(56, 161, 105)",
              color: "white",
              marginRight: "62%",
              marginTop: "5%",
            }}
          >
            Начать заново
          </button>
          <button
            onClick={() => setStage(4)}
            style={{ backgroundColor: "rgb(56, 161, 105)", color: "white" }}
          >
            Далее
          </button>
        </div>
      )}

      {stage === 4 && (
        <div>
          <button>
            <img
              alt=""
              src={selectedOption.imageUrl}
              style={{ height: "25vh", width: "25vh", margin: "auto" }}
            />
            <h1 color="rgb(56, 161, 105)">Услуга оказана</h1>
          </button>
          <br />
          <br />
          <button
            onClick={() => setStage(0)}
            style={{
              backgroundColor: "rgb(56, 161, 105)",
              color: "white",
              marginLeft: "35%",
            }}
          >
            Выход
          </button>
        </div>
      )}
    </div>
  );
}
export default SocCenter;
