import { useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import Layout from 'components/Layout';
import routes from './routes.jsx';
import ScrollToTopButton from 'components/ScrollToTopButton';
import { useDispatch } from "react-redux";
import { getMe } from "./redux/features/auth/authSlice.js";
import {ToastNotification} from 'components/ToastNotification'

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMe()); 
  }, [dispatch]);

  return (
    <Layout>
      <ScrollToTopButton />
      <ToastNotification />
      <Routes>
        {routes.map((route, index) => {
          const { component: Component, path } = route;
          return (
            <Route 
              key={index} 
              path={path} 
              element={<Component />} 
            />
          );
        })}
      </Routes>
    </Layout>
  );
}

export default App;
