import React, { useState } from 'react';
import soundFile from 'assets/mp3/gudok.mp3';
import Modal from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import 'assets/css/avarii.scss';


import mchsAud from 'assets/mp3/mchs.mp3';
import electroAud from 'assets/mp3/electro.mp3';
import gasAud from 'assets/mp3/gas.mp3';
import liftAud from 'assets/mp3/lift.mp3';
import policeAud from 'assets/mp3/police.mp3';
import zkhAud from 'assets/mp3/zkh.mp3';


const Avarii = () => {
    const [stage, setStage] = useState(0);
    const [dots, setDots] = useState('.');
    const audio = new Audio(soundFile);
    const mchsAudio = new Audio(mchsAud);
    const electroAudio = new Audio(electroAud);
    const gasAudio = new Audio(gasAud);
    const liftAudio = new Audio(liftAud);
    const policeAudio = new Audio(policeAud);
    const zkhAudio = new Audio(zkhAud);


    const categories = [
        {
            id: "mchs",
            number: "112",
            label: "МЧС (112 или 101)",
            subcategories: ["Пожар", "Наводнение или другие стихийные бедствия", "ДТП", "Эвакуация из зоны бедствия"]
        },
        {
            id: "police",
            number: "102",
            label: "Милиция (102)",
            subcategories: ["Случаи насилия, грабежа", "Кража или утрата важных документов или имущества.", "Нападение или угрозы жизни", "Нарушения общественного порядка"]
        },
        {
            id: "medical",
            number: "103",
            label: "Скорая медицинская помощь (103)",
            subcategories: ["Острое ухудшение здоровья", "Случаи травмы или неожиданного заболевания",]
        },
        {
            id: "housing",
            number: "80214520081",
            label: "ЖКХ (Жилищно-коммунальные услуги) (80214520081)",
            subcategories: ["Проблемы с отоплением, горячей водой или электроснабжением", "Затопление, аварийное состояние канализации или другие проблемы", "Неисправности в системах вентиляции или кондиционирования воздуха"]
        },
        {
            id: "gas",
            number: "104",
            label: "Аварийная газовая служба (104)",
            subcategories: ["Подозрение на утечку газа", "Неполадки с газовым оборудованием", "Запах газа в его жилом помещении."]
        },
        {
            id: "lift",
            number: "139",
            label: "Аварийная служба лифтов (139)",
            subcategories: ["Застревание в лифте или другие проблемы с его функционированием.", "Проблемы с доступом к лифту"]
        },
        {
            id: "power",
            number: "144",
            label: "Аварийная служба электросетей (144)",
            subcategories: ["Обрыв проводов", "Потеря электроэнергии без предварительного уведомления или другие проблемы с электроснабжением.",]
        }
    ];

    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const [selectedNumber, setSelectedNumber] = useState('');

    const handleOptionChange = (event) => {
        const selectedIndex = event.target.selectedIndex;
        const selectedOption = event.target.value;

        // Находим объект категории по выбранной подкатегории
        const selectedCategoryObj = categories.find(category => category.subcategories.includes(selectedOption));

        // Получаем number из найденного объекта категории
        const selectedNumber = selectedCategoryObj ? selectedCategoryObj.number : '';

        // Устанавливаем состояния
        setSelectedCategory(selectedCategoryObj ? selectedCategoryObj.label : '');
        setSelectedOption(selectedOption);
        setSelectedNumber(selectedNumber);
    };

    const handleButtonClick = () => {
        console.log("Категория:", selectedCategory);
        console.log("Подкатегория:", selectedOption);
        console.log("Номер:", selectedNumber)
    };

    const [input, setInput] = useState('');
    const [numbers, setNumbers] = useState([]);

    // Функция для добавления числа к набранным
    const addToNumbers = (number) => {
        setNumbers([...numbers, number]);
    };

    // Функция для удаления последнего числа из набранных
    const deleteLastNumber = () => {
        setNumbers(numbers.slice(0, -1));
        setInput('');
    };

    // Функция для обработки нажатия кнопки
    const handleButtonClick1 = (number) => {
        setInput(input + number);
    };

    // Функция для обработки отправки номера
    const handleSubmit = () => {
      if (input !== selectedNumber) {
          setOpenModal(true);
          console.log('not ok');
      } else {
          console.log('ok');
          setNumbers([]);
          addToNumbers(input);
          setInput('');
          setStage(2)
          let counter = 0;
          const interval = setInterval(() => {
              counter++;
              setDots('.'.repeat(counter));
              audio.play(); // Воспроизводим звук при каждом обновлении точек
              if (counter === 3) {
                  clearInterval(interval);
                  setTimeout(() => {
                      setDots('.');
                      setStage(3);
                      audio.play(mchsAudio);// Установка стадии 4 после завершения анимации
                  }, 4000); // Сброс анимации и установка стадии 4 после 4 секунд
              }
          }, 1000);
      }
  };
  

  let selectedAudio;
        switch (selectedNumber) {
        case '112':
            selectedAudio = mchsAudio;
            break;
        default:
            selectedAudio = electroAudio;
            break;
}

    const [openModal, setOpenModal] = useState(false);

    return (
        <div className={`avariiContainer
         ${stage < 2 ? "startBackground" : ""}
         ${stage === 2 ? "callingBackground" : ""}
         ${selectedNumber === '112' && stage === 3 ? "mchsBackground" : ""}
         ${selectedNumber === '101' && stage === 3 ? "mchsBackground" : ""}
         ${selectedNumber === '102' && stage === 3 ? "policeBackground" : ""}
         ${selectedNumber === '103' && stage === 3 ? "skorayaBackground" : ""}
         ${selectedNumber === '119' && stage === 3 ? "vodokanalBackground" : ""}
         ${selectedNumber === '144' && stage === 3 ? "elsetBackground" : ""}
         ${selectedNumber === '139' && stage === 3 ? "liftBackground" : ""}
         ${selectedNumber === '80214520081' && stage === 3 ? "zkhBackground" : ""}

         `} >
            {stage === 0 && (
                <div>
                    <select onChange={handleOptionChange}>
                        <option value="">Выберите аварийную службу</option>
                        {categories.map((category) => (
                            <optgroup key={category.id} label={category.label}>
                                {category.subcategories.map((subcategory, index) => (
                                    <option key={index} value={subcategory}>{subcategory}</option>
                                ))}
                            </optgroup>
                        ))}
                    </select>
                    <br />
                    <br />
                    {selectedNumber &&  (
                    <button style={{marginLeft: "25vw"}} onClick={() => {
                        handleButtonClick();
                        setStage(1);
                    }}>Далее</button> )}
                </div>
            )}
            <Modal open={openModal} onClose={() => setOpenModal(false)}>
                <h2 style={{color: "Red", fontSize: "50px", textAlign: "center"}}>Ошибка!</h2>
                <p style={{color: "Red", fontSize: "30px", textAlign: "center"}}>Введенный номер неверный.</p>
                <h1>Экстренные службы</h1>
                <ul>
                    <li>
                        <h2>Служба МЧС</h2>
                        <p>Единая диспетчерская служба: 112</p>
                    </li>
                    <li>
                        <h2>Городской отдел по чрезвычайным ситуациям</h2>
                        <p>101</p>
                    </li>
                    <li>
                        <h2>Милиция</h2>
                        <p>102</p>
                    </li>
                    <li>
                        <h2>Скорая медицинская помощь</h2>
                        <p>103</p>
                    </li>
                    <li>
                        <h2>Аварийная служба водоканала</h2>
                        <p>119</p>
                    </li>
                    <li>
                        <h2>Лифтовая аварийная служба</h2>
                        <p>139</p>
                    </li>
                    <li>
                        <h2>Аварийная служба городского участка электросетей (г. Новополоцк)</h2>
                        <p>144</p>
                    </li>
                    <li>
                        <h2>Аварийная газа</h2>
                        <p>104</p>
                    </li>
                    <li>
                        <h2>Аварийная тепловых сетей (г. Новополоцк)</h2>
                        <p>53-00-29</p>
                    </li>
                    <li>
                        <h2>Аварийная КУП «ЖКХ г. Полоцк»</h2>
                        <p>80214-52-00-81</p>
                    </li>
                </ul>
            </Modal>

            {stage === 1 && (
                <div style={{ marginLeft: "5vw", marginTop: "20vh", fontSize: "40px" }}>
                    <div>Наберите номер аварийной службы</div>
                    <input type="text" value={input} readOnly />
                    <br />
                    <button onClick={() => handleButtonClick1('1')} style={{ margin: "0.5vw" }}>1</button>
                    <button onClick={() => handleButtonClick1('2')} style={{ margin: "0.5vw" }}>2</button>
                    <button onClick={() => handleButtonClick1('3')} style={{ margin: "0.5vw" }}>3</button>
                    <br />
                    <button onClick={() => handleButtonClick1('4')} style={{ margin: "0.5vw" }}>4</button>
                    <button onClick={() => handleButtonClick1('5')} style={{ margin: "0.5vw" }}>5</button>
                    <button onClick={() => handleButtonClick1('6')} style={{ margin: "0.5vw" }}>6</button>
                    <br />
                    <button onClick={() => handleButtonClick1('7')} style={{ margin: "0.5vw" }}>7</button>
                    <button onClick={() => handleButtonClick1('8')} style={{ margin: "0.5vw" }}>8</button>
                    <button onClick={() => handleButtonClick1('9')} style={{ margin: "0.5vw" }}>9</button>
                    <br />
                    <button onClick={deleteLastNumber} style={{ margin: "0.2vw" }}>Удалить</button>
                    <button onClick={() => handleButtonClick1('0')} style={{ margin: "0.2vw" }}>0</button>
                    <button onClick={handleSubmit} style={{ margin: "0.2vw" }}>Позвонить</button>
                </div>
            )}

            {stage === 2 && (
                <div style={{ fontSize: "50px", border: '1px solid black', backgroundColor: "white", padding: "5px" }}><b>Звонок{dots}</b></div>
            )}
            
            

            {stage === 3  && (
                <div>
                <div style={{ fontSize: "50px", border: '1px solid black', backgroundColor: "white", padding: "5px" }}><b>Соединение установлено</b></div>
                <button onClick={() => setStage(0)}>Вернутся на главную страницу</button>
                <br />
                </div>
            )}
        </div>
    );
};

export default Avarii;
