import Training from "pages/Training";
import News from "pages/News";
import Contacts from "./Contacts";
import { Title } from "components/UI";

function Home() {
  return (
    <>
      <Training />
      <Title>Новости</Title>
      <News />
      <Title>Контакты</Title>
      <Contacts />
    </>
  );
}

export default Home;
