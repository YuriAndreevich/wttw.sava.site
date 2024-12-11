    import  { useState } from 'react';
    import './Shop.scss'
    import { Modal } from 'react-responsive-modal';

    import baton from 'assets/img/shop/bread/baton.png'
    import hleb from 'assets/img/shop/bread/hleb.png'
    import pirog from 'assets/img/shop/bread/pirog.png'
    import bulka from 'assets/img/shop/bread/bulka.png'

    import milk from 'assets/img/shop/milk/milk.png'
    import tvorog from 'assets/img/shop/milk/tvorog.png'
    import kefir from 'assets/img/shop/milk/kefir.png'
    import smetana from 'assets/img/shop/milk/smetana.png'

    import potato from 'assets/img/shop/vegetables/potato.png'
    import carrot from 'assets/img/shop/vegetables/carrot.png'
    import cabbadge from 'assets/img/shop/vegetables/cabbadge.png'
    import onion from 'assets/img/shop/vegetables/onion.png'

    import card from 'assets/img/shop/card.png'
    import wallet from 'assets/img/shop/wallet.png'

    import telejka from 'assets/img/shop/telejka.png'
    import kassa_stage from 'assets/img/shop/kassa1.jpg'

    import adminIMG from 'assets/img/administrator.png'
    import 'reactjs-popup'

    import 'rodal/lib/rodal.css';
    import 'react-responsive-modal/styles.css';

    import zaPokupku from 'assets/mp3/za pokupku.mp3';
    const zaPokupku_aud = new Audio(zaPokupku);
    


    function Magazin() {
        const [openModal, setOpenModal] = useState(false);
        const [stage, setStage] = useState(0)
        const [balance, setBalance] = useState(0)
        const [spendBalance, setSpendBalance] = useState(0)
        const [paymentMethod, setPaymentMethod] = useState(0)
        const [shopListArray, setShopListArray] = useState([]);
        const [adminHelp, setAdminHelp] = useState(false)

        const buyProduct = (cost) => () => {
            setBalance(balance-cost)
        }
        const balanceSetFunc = (bal, product) => () => {
            setSpendBalance(spendBalance+bal)
            setShopListArray((prevArray) => [...prevArray, product]);
        } 


        const balanceSetAndStage = (bal, stage, product) => () => {
            setBalance(bal)
            setStage(stage)
        }

        const choosePaymentMethod = (method, stage) => () =>
        {
            setPaymentMethod(method)
            setStage(stage)
        }
        

        {/*${stage === 3 ? "breadBackground" : ""} ${stage === 1 || stage === 2 ? "shopBackground" : ""}*/}
        return (
            <div className={`shopContainer  ${stage === 12 ? "boughtBackground" : ""} ${stage === 11 ? "kassaBackground" : ""} ${stage === 10 ? "vegetablesBackground" : ""} ${stage === 9 ? "milkBackground" : ""} ${stage === 8 ? "breadBackground" : ""} ${stage <=5 ? "startBackground" : ""} ${stage===6 ? "basketBackground" : ""} ${stage === 7 ? "shopBackground" : ""} ${stage === 8 ? "breadBackground" : ""}`}>
                
                <div className='balanceInfo'>
                    <h1>Ваш баланс: {balance.toFixed(2)}</h1>
                    <h1 style={{color: "red !important"}}>Вы потратите: {spendBalance.toFixed(2)}</h1>
                </div>
                {/*<button style={{position: "absolute", right: "120vh", top: "175vh", visibility: stage>=6 ? "visible" : "hidden"}} onClick={() => setAdminHelp(!adminHelp)}>Помощь администратора</button>*/}
                <button style={{ marginTop: "-31vh", overflow: "hidden"}}  onClick={() => setOpenModal(true)}><img src={adminIMG} style={{width: "15vh", height: "15vh"}}></img><br></br>Помощь администратора</button>
                
                <Modal open={openModal} onClose={() => setOpenModal(false)}>
                <h1 style={{color: "black", textAlign: "center", border: "1px solid black", backgroundColor: "White"}}>
  Список покупок:
  {shopListArray.length > 0 ? shopListArray.map(item => <div key={item}>{item}</div>) : ""}
</h1>
                </Modal>
                

                <div style={{overflow: "hidden", width: "fit-content"}} id="test">
                {stage === 0 && (
                    <div style={{marginTop: '25%', marginLeft: "40vh"}}>
                        <h1 style={{color: "black"}}>Выберите сумму денег</h1>
                        <button onClick={balanceSetAndStage(10, 1)}>10</button>
                        <button onClick={balanceSetAndStage(20, 1)}>20</button>
                        <button onClick={balanceSetAndStage(50, 1)}>50</button>
                        <button onClick={balanceSetAndStage(100, 1)}>100</button>
                    </div>
                )}


                {stage === 1 && (
                    <div style={{marginTop: '25%', marginLeft: "40vh"}}>
                    <h1>Выберите метод оплаты:</h1>
                    <button onClick={choosePaymentMethod(0, 2)}><img src={card} style={{width: '10vh', height: "10vh"}}></img><br></br>Карта</button>
                    <button onClick={choosePaymentMethod(1, 2)}><img src={wallet} style={{width: '10vh', height: "10vh"}}></img><br></br>Наличные</button>
                    </div>
                )}

                {stage === 2 && (
                    <div style={{marginLeft: "40vh", minWidth: "85vh"}}>
                        <button onClick={() => setStage(3)}>Хлебобулочный отдел</button>
                        <button onClick={() => setStage(4)}>Молочные продукты</button>
                        <button onClick={() => setStage(5)}>Овощи</button>
                    <button  onClick={() => setStage(6)}><h1 style={{color: "white !important"}}>Магазин</h1><img src={telejka} style={{width: "15vh", height: "15vh"}}></img></button>
                    </div>
                )}

                {/*{{stage === 3 && (
                    <div>
                        <img src={baton} style={{width: "15vh", height: "15vh", position: "absolute", display: "flex", marginLeft: "10%", bottom: "-10%"}}></img>
                        <img src={hleb} style={{width: "15vh", height: "15vh", position: "absolute", display: "flex", marginLeft: "0%", bottom: "-37%"}}></img>
                    </div>
                )}}*/}

                {stage === 3 && (
                    <div>
                    <div style={{display: "grid", float: "center", overflow: "hidden", marginLeft: "50vh"  }}>
                        <button onClick={balanceSetFunc(2, 'Хлеб')} disabled={spendBalance>=balance || spendBalance+2>balance}><img src={hleb} style={{width: '10vh', height: "10vh"}}></img><br></br>Хлеб. Цена: 2</button>
                        <button onClick={balanceSetFunc(3, 'Батон')} disabled={spendBalance>=balance || spendBalance+3>balance}><img src={baton} style={{width: '10vh', height: "10vh"}}></img><br></br>Батон. Цена: 3</button>
                        <button onClick={balanceSetFunc(1, 'Булочка')} disabled={spendBalance>=balance || spendBalance+4>balance}><img src={bulka} style={{width: '10vh', height: "10vh"}}></img><br></br>Булочка. Цена: 1</button>
                        <button onClick={balanceSetFunc(5, 'Пирог')} disabled={spendBalance>=balance || spendBalance+5>balance}><img src={pirog} style={{width: '10vh', height: "10vh"}}></img><br></br>Пирог. Цена: 5</button>
                    </div>
                    <button style={{overflow: "hidden", marginLeft: "50vh"}} onClick={() => setStage(2)}>Другие покупки</button>
                    </div>
                )}

                {stage === 4 && (
                    <div>
                    <div style={{display: "grid", float: "center", overflow: "hidden", marginLeft: "50vh"  }}>
                        <button onClick={balanceSetFunc(2, 'Молоко')} disabled={spendBalance>=balance || spendBalance+2>balance}><img src={milk} style={{width: '10vh', height: "10vh"}}></img><br></br>Молоко. Цена: 2</button>
                        <button onClick={balanceSetFunc(1.5, 'Кефир')} disabled={spendBalance>=balance || spendBalance+1.5>balance}><img src={kefir} style={{width: '10vh', height: "10vh"}}></img><br></br>Кефир. Цена: 1.5</button>
                        <button onClick={balanceSetFunc(2.5, 'Творог')} disabled={spendBalance>=balance || spendBalance+2.5>balance}><img src={tvorog} style={{width: '10vh', height: "10vh"}}></img><br></br>Творог. Цена: 2.5</button>
                        <button onClick={balanceSetFunc(2.5, 'Сметана')} disabled={spendBalance>=balance || spendBalance+2.5>balance}><img src={smetana} style={{width: '10vh', height: "10vh"}}></img><br></br>Сметана. Цена: 2.5</button>
                        
                    </div>
                    <button style={{overflow: "hidden", marginLeft: "50vh"}} onClick={() => setStage(2)}>Другие покупки</button>
                    </div>
                )}


                {stage === 5 && (
                    <div>
                    <div style={{display: "grid", float: "center", overflow: "hidden", marginLeft: "50vh"  }}>
                        <button onClick={balanceSetFunc(0.8, 'Картофель')} disabled={spendBalance>=balance || spendBalance+0.8>balance}><img src={potato} style={{width: '10vh', height: "10vh"}}></img><br></br>Картофель. Цена: 0.8</button>
                        <button onClick={balanceSetFunc(1, 'Капуста')} disabled={spendBalance>=balance || spendBalance+1>balance}><img src={cabbadge} style={{width: '10vh', height: "10vh"}}></img><br></br>Капуста. Цена: 1</button>
                        <button onClick={balanceSetFunc(1.5, 'Морковь')} disabled={spendBalance>=balance || spendBalance+1.5>balance}><img src={carrot} style={{width: '10vh', height: "10vh"}}></img><br></br>Морковь. Цена: 1.5</button>
                        <button onClick={balanceSetFunc(2, 'Лук')} disabled={spendBalance>=balance || spendBalance+2>balance}><img src={onion} style={{width: '10vh', height: "10vh"}}></img><br></br>Лук. Цена:2</button>
                    </div>
                    <button style={{overflow: "hidden", marginLeft: "50vh"}} onClick={() => setStage(2)}>Другие покупки</button>
                    </div>
                )}


                {stage === 6 && (
                    <div>
                        <button onClick={() => setStage(7)} style={{marginLeft: "50vh", marginTop: "25vh"}}><img src={telejka} style={{width: "15vh", height: "15vh"}}></img><br></br>Взять корзину</button>
                    </div>
                )}

                {stage === 7 && (
                    <div style={{marginLeft: "40vh", minWidth: "85vh", overflow: "hidden"}}>
                        <button onClick={() => setStage(8)}>Хлебобулочный отдел</button>
                        <button onClick={() => setStage(9)}>Молочные продукты</button>
                        <button onClick={() => setStage(10)}>Овощи</button>
                    <button  onClick={() => setStage(11)}><h1 style={{color: "white !important"}}>На кассу</h1><img src={kassa_stage} style={{width: "15vh", height: "15vh"}}></img></button>
                    </div>
                )}
                

                {stage === 8 && (
                    <div>
                    <div style={{display: "grid", float: "center", overflow: "hidden", marginLeft: "50vh"  }}>
                        <button disabled={!shopListArray.includes('Хлеб')} onClick={buyProduct(2)}><img src={hleb} style={{width: '10vh', height: "10vh"}}></img><br></br>Хлеб. Цена: 2</button>
                        <button disabled={!shopListArray.includes('Батон')} onClick={buyProduct(3)}><img src={baton} style={{width: '10vh', height: "10vh"}}></img><br></br>Батон. Цена: 3</button>
                        <button disabled={!shopListArray.includes('Булочка')} onClick={buyProduct(1)}><img src={bulka} style={{width: '10vh', height: "10vh"}}></img><br></br>Булочка. Цена: 1</button>
                        <button disabled={!shopListArray.includes('Пирог')} onClick={buyProduct(5)}><img src={pirog} style={{width: '10vh', height: "10vh"}}></img><br></br>Пирог. Цена: 5</button>
                    </div>
                    <div>
                    <button style={{overflow: "hidden", marginLeft: "50vh"}} onClick={() => setStage(7)}>Другие покупки</button>
                    </div>
                    </div>
                )}


                {stage === 9 && (
                    <div>
                    <div style={{display: "grid", float: "center", overflow: "hidden", marginLeft: "50vh"  }}>
                        <button disabled={!shopListArray.includes('Молоко')} onClick={buyProduct(2)}><img src={milk} style={{width: '10vh', height: "10vh"}}></img><br></br>Молоко. Цена: 2</button>
                        <button disabled={!shopListArray.includes('Кефир')} onClick={buyProduct(1.5)}><img src={kefir} style={{width: '10vh', height: "10vh"}}></img><br></br>Кефир. Цена: 1.5</button>
                        <button disabled={!shopListArray.includes('Творог')} onClick={buyProduct(2.5)}><img src={tvorog} style={{width: '10vh', height: "10vh"}}></img><br></br>Творог. Цена: 2.5</button>
                        <button disabled={!shopListArray.includes('Сметана')} onClick={buyProduct(2.5)}><img src={smetana} style={{width: '10vh', height: "10vh"}}></img><br></br>Сметана. Цена: 2.5</button>
                        
                    </div>
                    <button style={{overflow: "hidden", marginLeft: "50vh"}} onClick={() => setStage(7)}>Другие покупки</button>
                    </div>
                )}


                {stage === 10 && (
                    <div>
                    <div style={{display: "grid", float: "center", overflow: "hidden", marginLeft: "50vh"  }}>
                        <button disabled={!shopListArray.includes('Картофель')} onClick={buyProduct(0.8)}><img src={potato} style={{width: '10vh', height: "10vh"}}></img><br></br>Картофель. Цена: 0.8</button>
                        <button disabled={!shopListArray.includes('Капуста')} onClick={buyProduct(1)}><img src={cabbadge} style={{width: '10vh', height: "10vh"}}></img><br></br>Капуста. Цена: 1</button>
                        <button disabled={!shopListArray.includes('Морковь')} onClick={buyProduct(1.5)}><img src={carrot} style={{width: '10vh', height: "10vh"}}></img><br></br>Морковь. Цена: 1.5</button>
                        <button disabled={!shopListArray.includes('Лук')} onClick={buyProduct(2)}><img src={onion} style={{width: '10vh', height: "10vh"}}></img><br></br>Лук. Цена:2</button>
                    </div>
                    <button style={{overflow: "hidden", marginLeft: "50vh"}} onClick={() => setStage(7)}>Другие покупки</button>
                    </div>
                )}


                {stage === 11 && (
                    <div style={{marginTop: '25%', marginLeft: "40vh"}}>
                        <button disabled={paymentMethod === 1} onClick={() => { setStage(12); zaPokupku_aud.play(); }}><img src={card} style={{width: '10vh', height: "10vh"}}></img><br></br>Карта</button>
                        <button disabled={paymentMethod === 0} onClick={() => { setStage(12); zaPokupku_aud.play(); }}><img src={wallet} style={{width: '10vh', height: "10vh"}}></img><br></br>   Наличные</button>
                    </div>
                )}
                
                {stage === 12 && (
                    <div style={{marginTop: '25%', marginLeft: "40vh"}}>
                        <h1>Спасибо за покупку!</h1>
                        <button onClick={() => setStage(1)}>Выход</button>
                    </div>
                )}
            </div>
            </div>
        )
    }
    
    export default Magazin; 