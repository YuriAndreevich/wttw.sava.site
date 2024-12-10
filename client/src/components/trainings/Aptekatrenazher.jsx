import React, { useState, useEffect } from "react";
import "assets/css/aptekatrenazher.scss";
import 'react-responsive-modal/styles.css';
import 'rodal/lib/rodal.css';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

import jaropon from "assets/img/medicines/zaropon.png";
import pastilki from "assets/img/medicines/pastilki.jpg";
import spray from "assets/img/medicines/spray.jpg";
import obezbol from "assets/img/medicines/obezbol.jpg";
import spazm from "assets/img/medicines/spazm.png";
import maz from "assets/img/medicines/maz.png";
import kapliVNos from "assets/img/medicines/kapli_v_nos.jpg";
import syrop from "assets/img/medicines/syrop.png";
import zubKapli from "assets/img/medicines/zub_kapli.jpg";
import diarea from 'assets/img/medicines/diarea.jpg'
import izjoga from 'assets/img/medicines/izjoga.jpg'
import kompress from 'assets/img/medicines/kompress.jpg'
import yod from 'assets/img/medicines/yod.jpg'
import plastir from 'assets/img/medicines/plastir.png'

import aptekaVhod from 'assets/img/apteka_vhod.jpg'
import happy from 'assets/img/happy.jpg'
import bolen from "assets/img/disease/bolen.jpg";
import sick from 'assets/img/sick.png'

import luchshe from 'assets/mp3/luchshe.mp3';
import kVrachy from 'assets/mp3/obratites_k-vrachy.mp3';
const kVrachy_aud = new Audio(kVrachy);
const luchshe_aud = new Audio(luchshe);

function AptekaTrenazher() {
  const [openModal, setOpenModal] = useState(false);
  const [stage, setStage] = useState(0);
  const [balance, setBalance] = useState(0);
  const [currentBodyPart, setCurrentBodyPart] = useState("");
  const [medecinesArray, setMedecinesArray] = useState([]);
  const [adminHelpVisible, setAdminHelpVisible] = useState(true);
  // eslint-disable-next-line


  useEffect(() => {
    console.log("Баланс обновлен:", balance);
  }, [balance]); 
  const balanceSetFunc = (bal, st) => () => {
    setBalance(bal);
    setStage(st);
  };

  const currBodyFunc = (bodpart) => () => {
    setCurrentBodyPart(bodpart);
    setStage(3);
  };

  const buyMedecines = (medName, medPrice) => {
    console.log(`Покупка: ${medName}, Цена: ${medPrice}`);
    setMedecinesArray([...medecinesArray, medName]);
    setBalance(balance - medPrice);
  };

  const medicinesData = {
    Горло: [
      { name: "Спрей", price: 5, image: spray },
      { name: "Пастилки", price: 5, image: pastilki },
    ],
    Голова: [
      { name: "Обезбаливающее", price: 6, image: obezbol },
      { name: "Средство от спазмов", price: 6, image: spazm },
      { name: "Жаропонижающее", price: 5, image: jaropon },
    ],
    Нос: [
      { name: "Капли в нос", price: 3, image: kapliVNos },
      { name: "Мазь", price: 4, image: maz },
      { name: "Спрей", price: 6, image: spray },
    ],
    Зубы: [
      { name: "Болеутоляющее", price: 6, image: obezbol },
      { name: "Зубные капли", price: 2, image: zubKapli },
      { name: "Сироп", price: 10, image: syrop },
    ],
    Живот: [
      { name: "Болеутоляющее", price: 6, image: obezbol },
      { name: "Средство от изжоги", price: 6, image: izjoga },
      { name: "Средство от диареи", price: 2, image: diarea },
    ],
    Ухо: [
      { name: "Капли", price: 4, image: kapliVNos },
      { name: "Болеутоляющее", price: 6, image: obezbol },
      { name: "Компресс", price: 5, image: kompress },
    ],
    Ушиб: [
      { name: "Болеутоляющее", price: 6, image: obezbol },
      { name: "Йод", price: 2, image: yod },
      { name: "Мазь", price: 5, image: maz },
    ],
    Спина: [
      { name: "Болеутоляющее", price: 6, image: obezbol },
      { name: "Мазь согревающая", price: 20, image: maz },
      { name: "Пластырь", price: 4, image: plastir },
    ],
  };

  return (
    <div className={`aptekaContainer ${stage === 4 ? "aptekaKassa" : ""}`} style={{overflow: "hidden"}}>
      <div className="balance" style={{marginTop: "0", overflow: "auto", float: "right"}}>
        <div style={{border: "1px solid black", borderRadius: "3px", backgroundColor: "white"}}>
          <h1>Баланс: {balance}</h1>
        </div>
        <div style={{float: "left", overflow: "hidden"}}>
          <button onClick={() =>  setOpenModal(true)} style={{backgroundColor: "orange", color: "red", width: '325px'}}>Помощь администратора

          </button>
          <Modal open={openModal} onClose={() => setOpenModal(false)}>
          <div className="admin-help">
            <h1>Список лекарств:</h1>
          <h1 style={{border: "1px solid black", width: "content-fit", textAlign: "center", backgroundColor: "white"}}>{medecinesArray.length > 0 ? medecinesArray.join(", ") : ""}</h1>
        </div>
                </Modal>
        </div>
      </div>



      {stage === 0 && (
        <div style={{ marginLeft: "20vw",     overflow: "visible"}}>
          <button onClick={() => setStage(1)} style={{marginTop: "35vh"}}><img src={bolen} style={{width: '20vw', height: "40vh"}} alt="Я заболел" /></button>
        </div>
      )}

      {stage === 1 && (
        <div style={{ marginLeft: "20vw", marginTop: "45vh",     overflow: "visible"}}>
          <h1>Сколько у меня денег?</h1>
          <button onClick={balanceSetFunc(10, 2)}>10</button>
          <button onClick={balanceSetFunc(50, 2)}>50</button>
          <button onClick={balanceSetFunc(100, 2)}>100</button>
        </div>
      )}

      {stage === 2 && (
        <div style={{ marginLeft: "10vw", marginTop: "45vh",     overflow: "visible", width: "200vw"}}>
          <button onClick={currBodyFunc("Горло")}>Горло</button>
          <button onClick={currBodyFunc("Нос")}>Нос</button>
          <button onClick={currBodyFunc("Зубы")}>Зубы</button>
          <button onClick={currBodyFunc("Живот")}>Живот</button>
          <button onClick={currBodyFunc("Ухо")}>Ухо</button>
          <button onClick={currBodyFunc("Ушиб")}>Ушиб</button>
          <button onClick={currBodyFunc("Спина")}>Спина</button>
        </div>
      )}

      {stage === 3 && (
        <div style={{}}>
          <div style={{ overflow: "auto", marginLeft: "5vw", marginTop: "35vh"}}>
            {medicinesData[currentBodyPart].map((medicine, index) => (
              <button
                key={index}
                onClick={() => buyMedecines(medicine.name, medicine.price)}
                disabled={
                  balance < medicine.price ||
                  medecinesArray.includes(medicine.name)
                }
              >
                <img
                  src={medicine.image}
                  alt={medicine.name}
                  style={{ width: "10vh", height: "10vh" }}
                />
                <h3>
                  {medicine.name}, цена: {medicine.price}
                </h3>
              </button>
            ))}
          </div>
          <div style={{marginLeft: "35vw", marginTop: "10vh"}}>
            <button onClick={() => setStage(4)}>
              <img src={aptekaVhod} alt="Вход в аптеку" style={{ width: '10vh', height: "10vh"}} />
            </button>
          </div>
        </div>
      )}

      {stage === 4 && (
        <div style={{overflow: "hidden"}}>
          <button onClick={() => { setStage(5); setAdminHelpVisible(false)}} style={{marginTop: "60vh", marginLeft: "23.5vw"}}>Купить лекарства</button>
        </div>
      )}

      {stage === 5 && (
        <div style={{marginTop: "60vh", marginLeft: "23.5vw"}}>
          <h1>Вам стало лучше?</h1>
          <button onClick={() => { setStage(6); luchshe_aud.play(); }}>Да</button>
          <button onClick={() => { setStage(7); kVrachy_aud.play(); }}>Нет</button>
        </div>
      )}

      {stage === 6 && (
        <div style={{marginTop: "40vh", marginLeft: "15vw", overflow: "hidden"}}> 
          <h1 style={{fontWeight: "600", marginLeft: "12.5vw" }}>Вы здоровы</h1>
          <img src={happy} alt="Вы здоровы" />
          <br />
          <button onClick={() => setStage(5)} style={{marginLeft: "12.5vw"}}>Назад</button>
        </div>
      )}

      {stage === 7 && (
        <div style={{marginTop: "40vh", marginLeft: "15vw", overflow: "hidden"}}> 
          <h1 style={{fontWeight: "600", marginLeft: "12.5vw" }}>Обратитесь к врачу</h1>
          <img src={sick} alt="Обратитесь к врачу" style={{marginLeft: "12vw"}} />
          <br />
          <button onClick={() => setStage(5)} style={{marginLeft: "12.5vw"}}>Назад</button>
        </div>
      )}
    </div>
  );
}

export default AptekaTrenazher;
