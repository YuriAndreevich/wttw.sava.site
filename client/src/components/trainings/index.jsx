import TrainingCard from "./TrainingCard"; 
import { Title, Text } from "components/UI";

function Index() {
  return (
    <div className="parallax">
      <div>
        <Title>Тренажеры</Title>
        <Text className="text-white">
          Электронные тренажёры предназначены для изучения алгоритмов посещения
          различных объектов, а также для обучения действиям в чрезвычайных
          ситуациях, включая обращение за помощью в аварийные службы.
        </Text>
        <TrainingCard />
      </div>

      <div className="mask"></div>
    </div>
  );
}

export default Index;
