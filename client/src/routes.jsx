import Home from "pages/Home";
import {News} from "pages/News/MainPage";
import Trainings from "components/trainings"
import Contacts from "pages/Contacts";
import KonventOPravInval from "pages/KonventOPravInval";
import NacPlan20172025 from "pages/NacPlan20172025";
import PostanovlenieOGosReestreTehSredstv from "pages/PostanovlenieOGosReestreTehSredstv";
import PostanovlenieOMezved from "pages/PostanovlenieOMezved";
import Audiobiblioteka from "pages/Audiobiblioteka";
import GosPomosh from "pages/GosPomosh";
import GosLgoti from "pages/ZakonOGosSocLgotah";
import OPravahInvalidovSicIntegraciya from "pages/OPravahInvalidovISocIntegracii";
import OPosobiiInvalid1Group80let from "pages/OPosobiiInvalid1Group80let";
import SituatPomosh from "pages/SituatPomosh";
import MatPomosh from "pages/MatPomosh";
import Trenazher2 from "components/trainings/Trenazher2";
import AptekaTrenazher from "components/trainings/Aptekatrenazher.jsx";
import SocCenter from "components/trainings/SocCenter";
import Shop from "components/trainings/shop";
import Bank from "components/trainings/Bank";
import Algoritm from "pages/Algoritm";
import LgotiSInval from "pages/LgotiSInval";
import Avarii from "components/trainings/Avarii";
import Putevoditel from "pages/Putevoditel";
import { LoginPage } from "pages/LoginPage";
import { RegisterPage } from "pages/RegisterPage";
import { PostPage } from "pages/News/PostPage";
import CRM from "pages/CRM";
import PrivateRoute from "components/PrivateRoute";
// import VideoChat from "pages/VideoChat"
const routes = [
  { path: "/", component: Home },
  { path: "/news", component: News },
  { path: "/news/:id", component: PostPage },
  { path: "/login", component: LoginPage },
  { path: "/register", component: RegisterPage },
  { path: "/konvent-o-prav-inval", component: KonventOPravInval },
  { path: "/nac-plan-2017-2025", component: NacPlan20172025 },
  { path: "/postanovlenie-o-tech-sredstvah", component: PostanovlenieOGosReestreTehSredstv },
  { path: "/postanovlenie-sm-rb-o-vzaimodeistvii", component: PostanovlenieOMezved },
  { path: "/audiobiblioteka-dlya-nezryachikh", component: Audiobiblioteka },
  { path: "/zakon-o-gos-soc-pomoschi", component: GosPomosh },
  { path: "/zakon-o-soc-lgotah", component: GosLgoti },
  { path: "/zakon-o-prav-inv", component: OPravahInvalidovSicIntegraciya },
  { path: "/postanovlenie-sm-rb-o-posobii", component: OPosobiiInvalid1Group80let },
  { path: "/sit-pomosh-invalidam", component: SituatPomosh },
  { path: "/mat-pomosh", component: MatPomosh },
  { path: "/trainings/doctors", component: Trenazher2 },
  { path: "/trainings/apteka", component: AptekaTrenazher },
  { path: "/trainings/soc-center", component: SocCenter },
  { path: "/trainings/shop", component: Shop },
  { path: "/contacts", component: Contacts },
  { path: "/trainings", component: Trainings },
  { path: "/trainings/bank", component: Bank },
  { path: "/algoritm-posesheniya", component: Algoritm },
  { path: "/lgoti-ludyam-s-invalidnostyu", component: LgotiSInval },
  { path: "/trainings/avarii", component: Avarii },
  { path: "/putevoditel", component: Putevoditel },
  // { path: "/VideoChat", component: VideoChat },

  {
    path: "/crm",
    element: (
      <PrivateRoute>
        <CRM />
      </PrivateRoute>
    ),
  },
];

export default routes;
