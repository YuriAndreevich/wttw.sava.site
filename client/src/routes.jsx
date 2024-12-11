import Home from "pages/Home";
import News from "pages/News";
import Trainings from "pages/Training";
import Contacts from "pages/Contacts";

import Clinic from "pages/Training/Trainings/Clinic";
import Pharmacy from "pages/Training/Trainings/Pharmacy";
import SocialCenter from "pages/Training/Trainings/SocialCenter";
import Shop from "pages/Training/Trainings/Shop";
import Bank from "pages/Training/Trainings/Bank";
import EmergencySituations from "pages/Training/Trainings/EmergencySituations";

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
import Algoritm from "pages/Algoritm";
import LgotiSInval from "pages/LgotiSInval";
import Putevoditel from "pages/Putevoditel";

import { LoginPage } from "pages/LoginPage";
import { RegisterPage } from "pages/RegisterPage";
import PostPage from "pages/News/components/PostPage";

import Crm from "pages/Crm";
import {CreatePostPage} from 'pages/Crm/CreatePost'
import SendUs from 'pages/Crm/sendUs'
import SendUsForm from 'components/SendUs'


import PrivateRoute from "components/PrivateRoute";
// import VideoChat from "pages/VideoChat"
const routes = [
  { path: "/", element: <Home /> },
  { path: "/news", element: <News /> },
  { path: "/news/:id", element: <PostPage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/register", element: <RegisterPage /> },
  { path: "/konvent-o-prav-inval", element: <KonventOPravInval /> },
  { path: "/nac-plan-2017-2025", element: <NacPlan20172025 /> },
  {
    path: "/postanovlenie-o-tech-sredstvah",
    element: <PostanovlenieOGosReestreTehSredstv />,
  },
  {
    path: "/postanovlenie-sm-rb-o-vzaimodeistvii",
    element: <PostanovlenieOMezved />,
  },
  { path: "/audiobiblioteka-dlya-nezryachikh", element: <Audiobiblioteka /> },
  { path: "/zakon-o-gos-soc-pomoschi", element: <GosPomosh /> },
  { path: "/zakon-o-soc-lgotah", element: <GosLgoti /> },
  { path: "/zakon-o-prav-inv", element: <OPravahInvalidovSicIntegraciya /> },
  {
    path: "/postanovlenie-sm-rb-o-posobii",
    element: <OPosobiiInvalid1Group80let />,
  },
  { path: "/sit-pomosh-invalidam", element: <SituatPomosh /> },
  { path: "/mat-pomosh", element: <MatPomosh /> },
  { path: "/trainings/Clinic", element: <Clinic /> },
  { path: "/trainings/Pharmacy", element: <Pharmacy /> },
  { path: "/trainings/SocialCenter", element: <SocialCenter /> },
  { path: "/trainings/Shop", element: <Shop /> },
  { path: "/contacts", element: <Contacts /> },
  { path: "/trainings", element: <Trainings /> },
  { path: "/trainings/bank", element: <Bank /> },
  { path: "/algoritm-posesheniya", element: <Algoritm /> },
  { path: "/lgoti-ludyam-s-invalidnostyu", element: <LgotiSInval /> },
  { path: "/trainings/EmergencySituations", element: <EmergencySituations /> },
  { path: "/SendUsForm", element: <SendUsForm /> },
  {
    path: "/putevoditel",
    element: <Putevoditel />,
  },
  // { path: "/VideoChat", element: VideoChat },
  {
    path: "/crm",
    element: (
      <PrivateRoute>
        <Crm />
      </PrivateRoute>
    ),
  },
  {
    path: "/crm/CreatePostPage",
    element: (
      <PrivateRoute>
           <CreatePostPage />
      </PrivateRoute>
    ),
  },
  {
    path: "/crm/SendUs",
    element: (
      <PrivateRoute>
           <SendUs />
      </PrivateRoute>
    ),
  },
];

export default routes;
