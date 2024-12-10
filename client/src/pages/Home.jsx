import TrainingCard from "components/trainings";
  import News from "pages/News";
import Contacts from "./Contacts";
import { Title } from "components/UI";

function Home() {
  return (
    <>
      <TrainingCard />
      <Title>Новости</Title>
      <News />
      <Title>Контакты</Title>
      <Contacts />
    </>
  );
}

export default Home;
