import Card from "./components/Card"; 
import { Text } from "components/UI";
import './Training.scss'
import { useLocation } from "react-router-dom";



function Index() {
  const location = useLocation();
  const isMain = location.pathname === "/";
  return (
    <div className={isMain? 'parallax' : 'parallax parallax__page'}>
      <div>
        <Text className="text-white">
          Электронные тренажёры предназначены для изучения алгоритмов посещения
          различных объектов, а также для обучения действиям в чрезвычайных
          ситуациях, включая обращение за помощью в аварийные службы.
        </Text>
        <Card isMain={isMain} />
      </div>

      <div className="mask"></div>
    </div>
  );
}

export default Index;
