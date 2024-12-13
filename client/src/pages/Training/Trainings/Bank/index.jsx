import  { useState } from "react";
import './Bank.scss'
import card from 'assets/img/bank/card.png'
import wallet from 'assets/img/bank/wallet.png'
import y2 from 'assets/mp3/у2.mp3';
import k3 from 'assets/mp3/к3.mp3';
import v4 from 'assets/mp3/в4.mp3';
import c5 from 'assets/mp3/с5.mp3';

function Bank () {
    
    const [stage, setStage] = useState(0)
    const [ setPaymentMethod] = useState (0)
    const [prevStage, setPrevStage] = useState(0)

    const choosePaymentMethod = (paymentMethod, stage, prevStage) => () => {
        setPaymentMethod(paymentMethod)
        setStage(stage)
        setPrevStage(prevStage)
    }

    const windows = {
        '2': 'У',
        '3': 'К',
        '4': 'В',
        '5': 'С',
    };

    return (
        <div className={`bankContainer ${stage <= 3 ? "startBackground" : ""} ${stage >= 4 ? "terminalBackground" : ""} ${stage >= 9 ? "tvBackground" : ""}`}>
            
            {stage === 0 && (
                <div>
                    <button onClick={() => setStage(1)}>Запрос на услугу банка</button>
                </div>
            )}

            {stage === 1 && (
                <div style={{'display': "grid", gridGap: "5px"}}>
                    <button onClick={() => setStage(2)}>Коммунальные услуги</button>
                    <button onClick={() => setStage(3)}>Получение платежной карточки</button>
                    <button onClick={() => setStage(4)}>Вклады</button>
                    <button onClick={() => setStage(5)}>Страхование</button>
                </div>
            )}

            {stage === 2 && (
            <div>
                <div className='infoPad'>
                    <h1>Вам необходимо: </h1>
                    <span>- снять показания счетчиков (вода горячая, вода холодная, газ)</span>
                </div>
                <div style={{'marginLeft': "8vh", 'marginTop': "10vh", marginRight: ""}}>
                    <button style={{'marginRight': "10vh"}} onClick={choosePaymentMethod(0, 6, 2)}><h3>Карта</h3><img src={card} alt="Карта" style={{width: '10vh', height: "10vh"}}></img></button>
                    <button style={{'marginRight': "10vh"}} onClick={choosePaymentMethod(1, 7, 2)}><h3>Наличные</h3><img src={wallet} alt="Кошелек" style={{width: '10vh', height: "10vh"}}></img></button>
                </div>
            </div>
            )}

            {stage === 3 && (
            <div>
                <div className='infoPad'>
                    <h1>Вам необходимо: </h1>
                    <span>- взять паспорт</span>
                </div>
                <div style={{'marginLeft': "17.5vh", 'marginTop': "10vh", marginRight: ""}}>
                    <button style={{'marginRight': "15vh"}} onClick={choosePaymentMethod(1, 8, 3)}><h3>Наличные</h3><img src={wallet} alt="Кошелек" style={{width: '10vh', height: "10vh"}}></img></button>
                </div>
            </div>
            )}

            {stage === 4 && (
            <div>
                <div className='infoPad'>
                    <h1>Вам необходимо: </h1>
                    <span>- взять паспорт</span>
                </div>
                <div style={{'marginLeft': "17.5vh", 'marginTop': "10vh", marginRight: ""}}>
                    <button style={{'marginRight': "10vh" }} onClick={choosePaymentMethod(0, 6, 4)} ><h3>Карта</h3><img src={card} alt="Карта" style={{width: '10vh', height: "10vh"}}></img></button>
                    <button style={{'marginRight': "10vh"}} onClick={choosePaymentMethod(1, 7, 4)}><h3>Наличные</h3><img src={wallet} alt="Кошелек" style={{width: '10vh', height: "10vh"}}></img></button>
                </div>
            </div>
            )}

            {stage === 5 && (
            <div>
                <div className='infoPad'>
                    <h1>Вам необходимо: </h1>
                    <span>- взять паспорт</span>
                </div>
                <div style={{'marginLeft': "17.5vh", 'marginTop': "10vh", marginRight: ""}}>
                    <button style={{'marginRight': "10vh"}} onClick={choosePaymentMethod(0, 6, 5)} ><h3>Карта</h3><img src={card} alt="Карта" style={{width: '10vh', height: "10vh"}}></img></button>
                    <button style={{'marginRight': "10vh"}} onClick={choosePaymentMethod(1, 7, 5)}><h3>Наличные</h3><img src={wallet} alt="Кошелек" style={{width: '10vh', height: "10vh"}}></img></button>
                </div>
            </div>
            )}

            {stage === 6 && (
                <div>
                    <button onClick={() => setStage(11)}>Инфокиоск</button>
                    <button style ={{  alignItems: "center" }} onClick={() => setStage(7)}>Касса</button>
                </div>
            )}
            
            {stage === 11 && (
                <button onClick={() => setStage(10)}>Обратитесь к консультанту</button>
            )}
            {stage === 8 && (
                <div>
                    <button style ={{  alignItems: "center" }} onClick={() => setStage(12)}>Касса</button>
                </div>
            )}

            {stage === 7 && (
                <div style={{'display': "grid", gridGap: "5px"}}>
                    <h2 className="infoPad" style={{marginBottom: "10vh"}}>Получите талон на выбранную услугу</h2>
                    <button onClick={() => { setStage(9); const audio = new Audio(y2); audio.play(); }}>Коммунальные услуги </button>

                    <button onClick={() => { setStage(9); const audio = new Audio(k3); audio.play(); }}>Получение платежной карточки</button>

                    <button onClick={() => { setStage(9); const audio = new Audio(v4); audio.play(); }}>Вклады</button>

                    <button onClick={() => { setStage(9); const audio = new Audio(c5); audio.play(); }}>Страхование</button>
                </div>
            )}

            {stage === 9 && (
                <div style={{overflow: "hidden", display: "contents"}}>
                    <h1 style={{color: "white", marginRight: "35vh", marginBottom: "7vh"}}>Клиент  |  Окно</h1>
                    <button style={{marginLeft: "-35vh"}}>&nbsp;&nbsp;&nbsp;{windows[prevStage]}{prevStage}&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;{prevStage}&nbsp;&nbsp;&nbsp;</button>
                    <button style={{position: 'absolute', left: "65vh", bottom: "-90vh"}} onClick={() => setStage(10)}>Подойти к окну</button>
                </div>
            )}

            {stage === 10 && (
                <div className="infoPad" style={{marginBottom: "-25vh"}}>
                    <h1>Операция выполнена!</h1>
                    <button onClick={() => setStage(1)}>Выход</button>
                </div>
            )}

            {stage === 12 && (
                <div className="infoPad" style={{marginBottom: "-25vh"}}>
                    <h1>Вы получили карточку!</h1>
                    <button onClick={() => setStage(1)}>Выход</button>
                </div>
            )}
        </div>
    )
}

export default Bank;
