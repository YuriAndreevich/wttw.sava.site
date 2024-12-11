import styles from './Layout.module.scss';
import Sidebar from 'components/Sidebar';
import Container from 'components/Container';
import { useSelector } from 'react-redux';

const Layout = ({ children }) => {
  const isSidebarHidden = useSelector((state) => state.sidebar.isSidebarHidden);


  return (
    <div className={styles.layout}>
      <Sidebar />
      <Container
        className={`${styles.content} ${
          !isSidebarHidden ? styles.shifted : ''
        }`}
      >
        {children}
      </Container>
    </div>
  );
};

export default Layout;
