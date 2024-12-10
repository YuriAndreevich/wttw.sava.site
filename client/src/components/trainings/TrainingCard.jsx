import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";

import DoctorIMG from "assets/img/registratura.jpg";
import ShopIMG from "assets/img/shop/enter.jpg";
import TerrCenterIMG from "assets/img/terr_center.jpg";
import PoliklinikaIMG from "assets/img/poliklinika.jpg";
import BankIMG from "assets/img/BankIMG.png";
import AvariiIMG from "assets/img/avarii/avarii.jpg";

import "./trainingCard.scss";

const trainingData = [
  {
    link: "/trainings/apteka",
    image: DoctorIMG,
    title: "Аптека",
    description:
      "Электронный тренажёр 'Аптека' может быть использован в изучении алгоритма посещения данного объекта",
  },
  {
    link: "/trainings/shop",
    image: ShopIMG,
    title: "Магазин",
    description:
      "Электронный тренажёр 'Магазин' может быть использован в изучении алгоритма посещения данного объекта",
  },
  {
    link: "/trainings/soc-center",
    image: TerrCenterIMG,
    title: "Посещение НТЦСОН",
    description:
      "Электронный тренажёр 'Посещение НТЦСОН' может быть использован в изучении алгоритма посещения данного объекта",
  },
  {
    link: "/trainings/doctors",
    image: PoliklinikaIMG,
    title: "Поликлиника",
    description:
      "Электронный тренажёр 'Поликлиника' может быть использован в изучении алгоритма посещения данного объекта",
  },
  {
    link: "/trainings/bank",
    image: BankIMG,
    title: "Банк",
    description:
      "Электронный тренажёр 'Банк' может быть использован в изучении алгоритма посещения данного объекта",
  },
  {
    link: "/trainings/avarii",
    image: AvariiIMG,
    title: "Чрезвычайные ситуации",
    description:
      "Электронный тренажёр 'Чрезвычайные ситуации' может быть использован в изучении алгоритма обращения за помощью в аварийные службы",
  },
];

const TrainingCardItem = ({ link, image, title, description }) => (
  <Link to={link}>
    <Card sx={{ maxWidth: 345 }} style={{ height: "100%" }}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={image} alt={title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <span>{description}</span>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </Link>
);

export default function TrainingCard() {
  return (
    <div className="trainingCard">
      {trainingData.map((item, index) => (
        <TrainingCardItem
          key={index}
          link={item.link}
          image={item.image}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
}
