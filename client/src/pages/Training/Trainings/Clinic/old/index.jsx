import  { useState } from "react";

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
// import pred_receipt from 'assets/mp3/pred_receipt.mp3';
// const pred_receipt_aud = new Audio(pred_receipt);

function Trenazher() {
  const [disease, setDisease] = useState(null);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [enteredClinic, setEnteredClinic] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [enteredLift, setEnteredLift] = useState(false);

  const [enteredFloor, setEnteredFloor] = useState(null);
  const [floor, setFloor] = useState(null);
  const [rightFloor, setRightFloor] = useState(null);
  const [cabinet, setCabinet] = useState(null);

  const [rightCabinet, setRightCabinet] = useState(null);
  const [enteredApteka, setEnteredApteka] = useState(null);
  const [smile, setSmile] = useState(null);
  const changeDisease = (selectedDisease) => {
    setDisease(selectedDisease);
    setSelectedDoctor(null);
    setEnteredLift(false);
    setEnteredClinic(false);
    setSelectedOption(null);
    setDoctorLocation(null);
  };

  const [infoWindow, setInfoWindow] = useState(null);

  const pressedInfoWindow = () => {
    setInfoWindow(!infoWindow);
  };

  const setDoctorLocation = (a, b) => {
    setFloor(a);
    setCabinet(b);
    console.log(floor, cabinet);
  };
  const showDoctors = (doctorType) => {
    console.log(`Выбран врач: ${doctorType}`);
    setSelectedDoctor(doctorType);
    console.log(floor, cabinet);

    switch (doctorType) {
      case "Невропатолог":
        setDoctorLocation(1, 101);
        break;
      case "Терапевт":
        setDoctorLocation(1, 101);
        break;
      case "ЛОР":
        setDoctorLocation(3, 301);
        break;
      case "Стоматолог":
        setDoctorLocation(2, 201);
        break;
      case "Хирург":
        setDoctorLocation(3, 302);
        break;
      default:
        setDoctorLocation(null);
    }
  };

  const enterClinic = () => {
    setEnteredClinic(true);
  };

  const enterLift = () => {
    setEnteredLift(true);
  };
  const enterFloor = () => {
    setEnteredFloor(true);
    setEnteredLift(false);
  };
  const enterApteka = () => {
    setEnteredApteka(true);
    console.log("1t");
  };

  return (
    <div
      className={`containerr ${enteredClinic ? "enteredClinic" : ""} ${
        enteredLift ? "enteredLift" : ""
      } ${enteredApteka ? "enteredApteka" : ""} ${smile ? "smile" : ""}`}
    >
      <div className="content">
        <button
          style={{ marginLeft: "65%", marginBottom: "" }}
          onClick={pressedInfoWindow}
        >
          Помощь администратора
        </button>

        {disease === null ? (
          <button onClick={() => changeDisease("Я заболел")}>
            <img src={bolen} style={{ height: "40vh", width: "40vh" }} />
            <h1>Я заболел!</h1>
          </button>
        ) : (
          <>
            {disease === "Я заболел" ? (
              <div id="bodyParts">
                <button onClick={() => changeDisease("Спина")}>
                  <img src={spina} style={{ width: "12vh", height: "15vh" }} />
                  <h1>Спина</h1>
                </button>
                <button onClick={() => changeDisease("Голова")}>
                  <img src={golova} style={{ width: "12vh", height: "15vh" }} />
                  <h1>Голова</h1>
                </button>
                <button onClick={() => changeDisease("Горло")}>
                  <img src={gorlo} style={{ width: "12vh", height: "15vh" }} />
                  <h1>Горло</h1>
                </button>
                <button onClick={() => changeDisease("Зубы")}>
                  <img src={zubi} style={{ width: "12vh", height: "15vh" }} />
                  <h1>Зубы</h1>
                </button>
                <button onClick={() => changeDisease("Живот")}>
                  <img src={zivot} style={{ width: "12vh", height: "15vh" }} />
                  <h1>Живот</h1>
                </button>
                <button onClick={() => changeDisease("Ухо")}>
                  <img src={uho} style={{ width: "12vh", height: "15vh" }} />
                  <h1>Ухо</h1>
                </button>
                <button onClick={() => changeDisease("Нос")}>
                  <img src={nose} style={{ width: "12vh", height: "15vh" }} />
                  <h1>Нос</h1>
                </button>
                <button onClick={() => changeDisease("Ушиб")}>
                  <img src={ushib} style={{ width: "12vh", height: "15vh" }} />
                  <h1>Ушиб</h1>
                </button>
              </div>
            ) : (
              <div id="doctors">
                {disease === "Спина" && (
                  <>
                    {!selectedDoctor && (
                      <button onClick={() => showDoctors("Невропатолог")}>
                        <img
                          src={nevropatolog}
                          style={{ width: "60vh", height: "60vh" }}
                        />
                        <h1>Невропатолог</h1>
                      </button>
                    )}
                  </>
                )}
                {disease === "Голова" && (
                  <>
                    {!selectedDoctor && (
                      <button onClick={() => showDoctors("Терапевт")}>
                        <img
                          src={terapeft}
                          style={{ width: "60vh", height: "60vh" }}
                        />
                        <h1>Терапевт</h1>
                      </button>
                    )}
                  </>
                )}
                {disease === "Горло" && (
                  <>
                    {!selectedDoctor && (
                      <button onClick={() => showDoctors("ЛОР")}>
                        <img
                          src={lor}
                          style={{ width: "60vh", height: "60vh" }}
                        />
                        <h1>ЛОР</h1>
                      </button>
                    )}
                  </>
                )}
                {disease === "Зубы" && (
                  <>
                    {!selectedDoctor && (
                      <button onClick={() => showDoctors("Стоматолог")}>
                        <img
                          src={stomatolog}
                          style={{ width: "60vh", height: "60vh" }}
                        />
                        <h1>Стоматолог</h1>
                      </button>
                    )}
                  </>
                )}
                {disease === "Живот" && (
                  <>
                    {!selectedDoctor && (
                      <button onClick={() => showDoctors("Терапевт")}>
                        <img
                          src={terapeft}
                          style={{ width: "60vh", height: "60vh" }}
                        />
                        <h1>Терапевт</h1>
                      </button>
                    )}
                  </>
                )}
                {disease === "Ухо" && (
                  <>
                    {!selectedDoctor && (
                      <button onClick={() => showDoctors("ЛОР")}>
                        <img
                          src={lor}
                          style={{ width: "60vh", height: "60vh" }}
                        />
                        <h1>ЛОР</h1>
                      </button>
                    )}
                  </>
                )}
                {disease === "Нос" && (
                  <>
                    {!selectedDoctor && (
                      <button onClick={() => showDoctors("ЛОР")}>
                        <img
                          src={lor}
                          style={{ width: "60vh", height: "60vh" }}
                        />
                        <h1>ЛОР</h1>
                      </button>
                    )}
                  </>
                )}
                {disease === "Ушиб" && (
                  <>
                    {!selectedDoctor && (
                      <button onClick={() => showDoctors("Хирург")}>
                        <img
                          src={hirurg}
                          style={{ width: "12vh", height: "15vh" }}
                        />
                        <h1>Хирург</h1>
                      </button>
                    )}
                  </>
                )}
                {selectedDoctor && !enteredFloor && (
                  <>
                    {infoWindow && (
                      <p className="doctorLocation" style={{ color: "white" }}>
                        <span style={{ color: "red" }}>Напоминание!</span>
                        Выбран врач:
                        <span style={{ color: "dodgerblue" }}>
                          {selectedDoctor}
                        </span>
                        <br />
                        Этаж:
                        <span style={{ color: "dodgerblue" }}>{floor}</span>
                        <br />
                        Номер кабинета:
                        <span style={{ color: "dodgerblue" }}>{cabinet}</span>
                        <br />
                        <br />
                      </p>
                    )}
                    <div>
                      {!enteredClinic && (
                        <button
                          onClick={enterClinic}
                          style={{ marginLeft: "8%" }}
                        >
                          <img
                            src={vhod_v_pol}
                            style={{ width: "30vh", height: "30vh" }}
                          />
                          <h2>Войти в поликлинику</h2>
                        </button>
                      )}
                    </div>
                  </>
                )}
              </div>
            )}
            {enteredClinic &&
              !selectedOption &&
              !enteredLift &&
              !enteredFloor &&
              !enteredApteka && (
                <>
                  <div id="clinicOptions">
                    <button onClick={enterLift} disabled={floor === 1}>
                      Лифт
                    </button>
                    <button onClick={enterFloor} disabled={floor != 1}>
                      Лестница
                    </button>
                  </div>
                </>
              )}

            {enteredLift && (
              <>
                <div className="liftButtons">
                  {rightFloor === false && (
                    <span style={{ display: "flex", color: "white" }}>
                      Неверный этаж
                    </span>
                  )}
                  <button
                    onClick={() =>
                      floor === 1 ? enterFloor() : setRightFloor(false)
                    }
                  >
                    1
                  </button>
                  <button
                    onClick={() =>
                      floor === 2 ? enterFloor() : setRightFloor(false)
                    }
                  >
                    2
                  </button>
                  <button
                    onClick={() =>
                      floor === 3 ? enterFloor() : setRightFloor(false)
                    }
                  >
                    3
                  </button>
                </div>
              </>
            )}

            {enteredFloor && !enteredLift && !enteredApteka && !smile && (
              <>
                <div>
                  <p className="doctorLocation" style={{ color: "white" }}>
                    <span style={{ color: "red" }}>Напоминание!</span> Выбран
                    врач:
                    <span style={{ color: "dodgerblue" }}>
                      {selectedDoctor}
                    </span>
                    <br />
                    Этаж: <span style={{ color: "dodgerblue" }}>{floor}</span>
                    <br />
                    Номер кабинета:
                    <span style={{ color: "dodgerblue" }}>{cabinet}</span>
                    <br />
                    
                    <br />
                  </p>
                  {rightCabinet === false && (
                    <span style={{ display: "flex" }}>Неверный кабинет</span>
                  )}
                  {floor === 1 && (
                    <div>
                      <button
                        onClick={() =>
                          cabinet === 101
                            ? enterApteka()
                            : setRightCabinet(false)
                        }
                      >
                        101
                      </button>
                      <button
                        onClick={() =>
                          cabinet === 102
                            ? enterApteka()
                            : setRightCabinet(false)
                        }
                      >
                        102
                      </button>
                      <button
                        onClick={() =>
                          cabinet === 103
                            ? enterApteka()
                            : setRightCabinet(false)
                        }
                      >
                        103
                      </button>
                      <button
                        onClick={() =>
                          cabinet === 104
                            ? enterApteka()
                            : setRightCabinet(false)
                        }
                      >
                        104
                      </button>
                      <button
                        onClick={() =>
                          cabinet === 105
                            ? enterApteka()
                            : setRightCabinet(false)
                        }
                      >
                        105
                      </button>
                    </div>
                  )}
                  {floor === 2 && (
                    <div>
                      <button
                        onClick={() =>
                          cabinet === 201
                            ? enterApteka()
                            : setRightCabinet(false)
                        }
                      >
                        201
                      </button>
                      <button
                        onClick={() =>
                          cabinet === 202
                            ? enterApteka()
                            : setRightCabinet(false)
                        }
                      >
                        202
                      </button>
                      <button
                        onClick={() =>
                          cabinet === 203
                            ? enterApteka()
                            : setRightCabinet(false)
                        }
                      >
                        203
                      </button>
                      <button
                        onClick={() =>
                          cabinet === 204
                            ? enterApteka()
                            : setRightCabinet(false)
                        }
                      >
                        204
                      </button>
                      <button
                        onClick={() =>
                          cabinet === 205
                            ? enterApteka()
                            : setRightCabinet(false)
                        }
                      >
                        205
                      </button>
                    </div>
                  )}
                  {floor === 3 && (
                    <div>
                      <button
                        onClick={() => {
                          cabinet === 301
                            ? enterApteka()
                            : setRightCabinet(false) ;
                            //  audio.play(pred_receipt_aud)
                            }
                        }
                      >
                        301
                      </button>
                      <button
                        onClick={() =>
                          cabinet === 302
                            ? enterApteka()
                            : setRightCabinet(false)
                        }
                      >
                        302
                      </button>
                      <button
                        onClick={() =>
                          cabinet === 303
                            ? enterApteka()
                            : setRightCabinet(false)
                        }
                      >
                        303
                      </button>
                      <button
                        onClick={() =>
                          cabinet === 304
                            ? enterApteka()
                            : setRightCabinet(false)
                        }
                      >
                        304
                      </button>
                      <button
                        onClick={() => {
                          cabinet === 305
                            ? enterApteka()
                            : setRightCabinet(false) ;
                            //  audio.play(pred_receipt_aud)
                            }
                        }
                      >
                        305
                      </button>
                    </div>
                  )}
                </div>
              </>
            )}

            {enteredApteka && !smile && (
              <div>
                <p className="doctorLocation">Вы получили рецепт </p>
                <button onClick={() => setSmile(true)}>Купить лекарства</button>
              </div>
            )}

            {smile && <h1 style={{ color: "White" }}>Вы здоровы!</h1>}
          </>
        )}
      </div>
    </div>
  );
}

export default Trenazher;
