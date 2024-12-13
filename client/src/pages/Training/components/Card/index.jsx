import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Pagination, Autoplay } from "swiper/modules";
import DoctorIMG from "assets/img/registratura.jpg";
import ShopIMG from "assets/img/shop/enter.jpg";
import TerrCenterIMG from "assets/img/terr_center.jpg";
import PoliklinikaIMG from "assets/img/poliklinika.jpg";
import BankIMG from "assets/img/BankIMG.png";
import AvariiIMG from "assets/img/avarii/avarii.jpg";
import style from "./Card.module.scss";
import HoverText from "../HoverText";
import "swiper/css";
import "swiper/css/pagination";
import useWindowSize from "../../../../hooks/useWindowSize";
import PropTypes from "prop-types";

const trainingData = [
  {
    link: "/trainings/Pharmacy",
    image: DoctorIMG,
    title: "Аптека",
  },
  {
    link: "/trainings/Shop",
    image: ShopIMG,
    title: "Магазин",
  },
  {
    link: "/trainings/SocialCenter",
    image: TerrCenterIMG,
    title: "Посещение НТЦСОН",
  },
  {
    link: "/trainings/Clinic",
    image: PoliklinikaIMG,
    title: "Поликлиника",
  },
  {
    link: "/trainings/Bank",
    image: BankIMG,
    title: "Банк",
  },
  {
    link: "/trainings/EmergencySituations",
    image: AvariiIMG,
    title: "Чрезвычайные ситуации",
  },
];

const TrainingCardItem = ({ link, image, title }) => (
  <Link to={link} className={style.card}>
    <div className={style.imageContainer}>
      <img src={image} alt={title} className={style.cardImg} />
      <div className={style.hoverText}>
        <HoverText title={title} />
      </div>
    </div>
  </Link>
);

TrainingCardItem.propTypes = {
  link: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default function TrainingCard({ isMain }) {
  const { width: screenWidth } = useWindowSize();

  return (
    <div className={style.container}>
      {isMain ? (
        <div className="card__page">
          {trainingData.map((item, index) => (
            <TrainingCardItem
              key={index}
              link={item.link}
              image={item.image}
              title={item.title}
            />
          ))}
        </div>
      ) : (
        screenWidth < 900 ? (
          <Swiper
            slidesPerView="auto"
            modules={[Navigation, FreeMode, Pagination, Autoplay]}
            spaceBetween={10}
            navigation
            freeMode={true}
            loop={true}
          >
            {trainingData.map((item, index) => (
              <SwiperSlide key={index} className={style.slider}>
                <TrainingCardItem
                  link={item.link}
                  image={item.image}
                  title={item.title}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="card__page">
            {trainingData.map((item, index) => (
              <TrainingCardItem
                key={index}
                link={item.link}
                image={item.image}
                title={item.title}
              />
            ))}
          </div>
        )
      )}
    </div>
  );
}

TrainingCard.propTypes = {
  isMain: PropTypes.bool.isRequired,
};
