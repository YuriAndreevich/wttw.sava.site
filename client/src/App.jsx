import { useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import Layout from 'components/Layout';
import routes from './routes.jsx';
import ScrollToTopButton from 'components/ScrollToTopButton';
import { useDispatch, useSelector } from "react-redux";
import { getMe } from "./redux/features/auth/authSlice.js";
import {ToastNotification} from 'components/ToastNotification'
import './App.scss'
import { toggleSidebar } from "./redux/sidebarSlice"; 

import MenuIcon from '@mui/icons-material/Menu';
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMe()); 
  }, [dispatch]);
  const isSidebarHidden = useSelector((state) => state.sidebar.isSidebarHidden);

  return (
    <Layout>
      <ScrollToTopButton />
      <ToastNotification />
      {isSidebarHidden && (
        <div className="hamburger">
<MenuIcon fontSize="large"
          onClick={() => dispatch(toggleSidebar())}
          />
        </div>
        
      )}
      <Routes>
        
      {routes.map((route, index) => {
          const { element, path } = route;
          return (
            <Route
              key={index}
              path={path}
              element={element}
            />
          );
        })}
      </Routes>
    </Layout>
  );
}

export default App;
