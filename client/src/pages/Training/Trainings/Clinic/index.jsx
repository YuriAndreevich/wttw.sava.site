import  { useState, useEffect } from "react";
import "./Clinic.scss";

import bolen from "assets/img/disease/bolen.jpg";
import spina from "assets/img/disease/spina.jpg";
import golova from "assets/img/disease/golova.jpg";
import gorlo from "assets/img/disease/gorlo.jpg";
import zubi from "assets/img/disease/zubi.png";
import zivot from "assets/img/disease/zivot.jpg";
import uho from "assets/img/disease/uho.jpg";
import nose from "assets/img/disease/nose.jpg";
import ushib from "assets/img/disease/ushib.jpg";

import nevropatolog from "assets/img/doctors/nevropatolog.jpg";
import terapeft from "assets/img/doctors/terapeft.png";
import lor from "assets/img/doctors/lor.jpg";
import stomatolog from "assets/img/doctors/stomatolog.jpg";
import hirurg from "assets/img/doctors/hirurg.jpg";
import vhod_v_pol from "assets/img/vhod_v_polikliniku.png";
import administratorimg from "assets/img/administrator.png";
// import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';


import recept from 'assets/mp3/pred_receipt.mp3';
const recept_aud = new Audio(recept);

// import blank from "assets/img/blank.png";

function Trenazher2() {

  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const [stage, setStage] = useState(0);
  const [disease, setDisease] = useState("");
  const [floor, setFloor] = useState(0);
  const [cabinet, setCabinet] = useState(0);
  const [adminHelpStatus] = useState(false);
  const [ setCurrentAction] = useState(
    'Нажмите на кнопку "Я заболел!'
  );

  const setDiseaseFunc = (dis) => {
    setDisease(dis);
    setStage(2);
  };

  useEffect(() => {
    if (disease === "ЛОР") {
      setFloor(3);
      setCabinet(301);
      console.log(floor, cabinet);
    } else if (disease === "Терапевт") {
      setFloor(1);
      setCabinet(101);
      console.log(floor, cabinet);
    } else if (disease === "Стоматолог") {
      setFloor(2);
      setCabinet(201);
      console.log(floor, cabinet);
    } else if (disease === "Хирург") {
      setFloor(3);
      setCabinet(302);
      console.log(floor, cabinet);
    } else if (disease === "Нввропатолог") {
      setFloor(2);
      setCabinet(204);
      console.log(floor, cabinet);
    }
  }, [disease, floor, cabinet]);

  const handleCabinetClick = (cab) => {
    if (cab == cabinet) {
      setStage(8);
    }
  };
  return (
    <div
      className={`trenContainer ${
        stage === 6 || stage === 7 ? "poliklinika" : ""
      }  ${stage === 5 ? "lift" : ""} ${stage === 9 ? "apteka" : ""} ${
        stage === 10 ? "smile" : ""
      } ${stage === 4 ? "registratura" : ""} ${stage === 11 ? "poliklinika" : ""} ${stage === 8 ? "receipt" : ""}`}
    >
      <div
        className="adminButtonContainer"
        style={{
          visibility: stage >= 5 || stage === 10 ? "visible" : "hidden",
        }}
      >
        <div>
        <button
          onClick={onOpenModal}
          style={{ height: "20vh", width: "28vh" }}
        >
          <img
            alt=""
            src={administratorimg}
            style={{ height: "12vh", width: "10vh" }}
          />
          <span>Помощь администратора</span>
        </button>
        <Modal open={open} onClose={onCloseModal} center classNames={{modal: 'customModal'}}>
        <h1 style={{ color: "red", textAlign: "center"}}>Напоминание!</h1>
          <h2>Выбран врач:</h2> <h3 style={{ color: "dodgerblue" }}>{disease}</h3>
          <br />
          <h2>Этаж:</h2>
          <h3 style={{ color: "dodgerblue" }}>{floor}</h3> <br />
          <h2>Номер кабинета:</h2>
          <h3 style={{ color: "dodgerblue" }}>{cabinet}</h3>
      </Modal>
        </div>
      </div>
      <div>
        <div
          style={{ visibility: adminHelpStatus ? "visible" : "hidden" }}
          className="adminInfo"
        >
          <span style={{ color: "red" }}>Напоминание!</span>
          <span>Выбран врач:</span>
          <span style={{ color: "dodgerblue" }}>Врач: {disease}</span>
          <br />
          <span>Этаж:</span>
          <span style={{ color: "dodgerblue" }}>{floor}</span> <br />
          <span>Номер кабинета:</span>
          <span style={{ color: "dodgerblue" }}>{cabinet}</span>
        </div>
        {stage === 0 && (
          <div className="">
            <button
              onClick={() => {
                setStage(1);
                setCurrentAction('Нажмите на кнопку "Я заболел!"');
              }}
            >
              <img
                alt=""
                src={bolen}
                style={{ height: "40vh", width: "40vh" }}
              />
              <h1>Я заболел!</h1>
            </button>
          </div>
        )}

        {stage === 1 && (
          <div className="diseases">
            <button onClick={() => setDiseaseFunc("ЛОР")}>
              <img
                alt=""
                src={gorlo}
                style={{ height: "10vh", width: "10vh" }}
              />
              <h1>Горло</h1>
            </button>
            <button onClick={() => setDiseaseFunc("Терапевт")}>
              <img
                alt=""
                src={golova}
                style={{ height: "10vh", width: "10vh" }}
              />
              <h1>Голова</h1>
            </button>
            <button onClick={() => setDiseaseFunc("ЛОР")}>
              <img
                alt=""
                src={nose}
                style={{ height: "10vh", width: "10vh" }}
              />
              <h1>Нос</h1>
            </button>
            <button onClick={() => setDiseaseFunc("Стоматолог")}>
              <img
                alt=""
                src={zubi}
                style={{ height: "10vh", width: "10vh" }}
              />
              <h1>Зубы</h1>
            </button>
            <button onClick={() => setDiseaseFunc("Терапевт")}>
              <img
                alt=""
                src={zivot}
                style={{ height: "10vh", width: "10vh" }}
              />
              <h1>Живот</h1>
            </button>
            <button onClick={() => setDiseaseFunc("ЛОР")}>
              <img alt="" src={uho} style={{ height: "10vh", width: "10vh" }} />
              <h1>Ухо</h1>
            </button>
            <button onClick={() => setDiseaseFunc("Хирург")}>
              <img
                alt=""
                src={ushib}
                style={{ height: "10vh", width: "10vh" }}
              />
              <h1>Ушиб</h1>
            </button>
            <button onClick={() => setDiseaseFunc("Невропатолог")}>
              <img
                alt=""
                src={spina}
                style={{ height: "10vh", width: "10vh" }}
              />
              <h1>Спина</h1>
            </button>
          </div>
        )}

        {stage === 2 &&
          (disease === "ЛОР" ? (
            <button onClick={() => setStage(3)}>
              <img alt="" src={lor} style={{ height: "40vh", width: "40vh" }} />
              <h1>Лор</h1>
            </button>
          ) : disease === "Терапевт" ? (
            <button onClick={() => setStage(3)}>
              <img
                alt=""
                src={terapeft}
                style={{ height: "40vh", width: "40vh" }}
              />
              <h1>Терапевт</h1>
            </button>
          ) : disease === "Хирург" ? (
            <button onClick={() => setStage(3)}>
              <img
                alt=""
                src={hirurg}
                style={{ height: "40vh", width: "40vh" }}
              />
              <h1>Хирург</h1>
            </button>
          ) : disease === "Невропатолог" ? (
            <button onClick={() => setStage(3)}>
              <img
                alt=""
                src={nevropatolog}
                style={{ height: "40vh", width: "40vh" }}
              />
              <h1>Невропатолог</h1>
            </button>
          ) : disease === "Стоматолог" ? (
            <button onClick={() => setStage(3)}>
              <img
                alt=""
                src={stomatolog}
                style={{ height: "40vh", width: "40vh" }}
              />
              <h1>Стоматолог</h1>
            </button>
          ) : null)}

        {stage === 3 && (
          <button onClick={() => setStage(4)}>
            <img
              alt=""
              src={vhod_v_pol}
              style={{ height: "10vh", width: "10vh" }}
            />
            <h1>Войти в поликлинику</h1>
          </button>
        )}

        {stage === 4 && (
          <div style={{ marginBottom: "55%", paddingLeft: "45%" }}>
          <button
            onClick={() => {setStage(11); onOpenModal();}}
          >
              Регистратура
            </button>
          </div>
        )}

        {stage === 11 && (
          <div>
            <div>
<Modal open={open} onClose={onCloseModal} center classNames={{modal: 'customModal'}}>
        <h1 style={{ color: "red", textAlign: "center"}}>Талон к врачу</h1>
          <h2>Выбран врач:</h2> <h3 style={{ color: "dodgerblue" }}>{disease}</h3>
          <br />
          <h2>Этаж:</h2>
          <h3 style={{ color: "dodgerblue" }}>{floor}</h3> <br />
          <h2>Номер кабинета:</h2>
          <h3 style={{ color: "dodgerblue" }}>{cabinet}</h3>
      </Modal>
            </div>
            <button
                style={{marginBottom: "10vh", visibility: "visible", marginLeft: "20vh"}}
  
                onClick={() => setStage(5)}
              >
                Далее
              </button>
          </div>
        )}

        {stage === 5 && (
          <div className="options">
            <button disabled={floor === 1} onClick={() => setStage(6)}>
              Лифт
            </button>
            <button disabled={floor !== 1} onClick={() => setStage(7)}>
              Лестница
            </button>
          </div>
        )}

        {stage === 6 && (
          <div className="options">
            <button disabled={floor !== 2} onClick={() => setStage(7)}>
              2
            </button>
            <button disabled={floor !== 3} onClick={() => setStage(7)}>
              3
            </button>
          </div>
        )}

        {stage === 7 && floor === 1 && (
          <div>
            <button onClick={() => handleCabinetClick(101)}>101</button>
            <button onClick={() => handleCabinetClick(102)}>102</button>
            <button onClick={() => handleCabinetClick(103)}>103</button>
            <button onClick={() => handleCabinetClick(104)}>104</button>
            <button onClick={() => handleCabinetClick(105)}>105</button>
          </div>
        )}

        {stage === 7 && floor === 2 && (
          <div>
            <button onClick={() => handleCabinetClick(201)}>201</button>
            <button onClick={() => handleCabinetClick(202)}>202</button>
            <button onClick={() => handleCabinetClick(203)}>203</button>
            <button onClick={() => handleCabinetClick(204)}>204</button>
            <button onClick={() => handleCabinetClick(205)}>205</button>
          </div>
        )}

        {stage === 7 && floor === 3 && (
          <div>
            <button onClick={() => handleCabinetClick(301)}>301</button>
            <button onClick={() => handleCabinetClick(302)}>302</button>
            <button onClick={() => handleCabinetClick(303)}>303</button>
            <button onClick={() => handleCabinetClick(304)}>304</button>
            <button onClick={() => handleCabinetClick(305)}>305</button>
          </div>
        )}

        {stage === 8 && (
          <div>
            <h1 style={{position: "absolute", right: "10vh", maxWidth: "17vh"}}>Вы получили рецепт</h1>
            <button onClick={() => {setStage(9) ; recept_aud.play()}}>Войти в аптеку</button>
          </div>
        )}

        {stage === 9 && (
          <button onClick={() => setStage(10)}>Купить лекарства</button>
        )}

        {stage === 10 && (
          <h1
            style={{ alignItems: "center", display: "flex", marginLeft: "25%" }}
          >
            Вы здоровы!
          </h1>
        )}
      </div>
    </div>
  );
}

export default Trenazher2;
