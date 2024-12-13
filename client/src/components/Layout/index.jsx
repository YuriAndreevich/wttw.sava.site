import PropTypes from 'prop-types';
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

Layout.propTypes = {
  children: PropTypes.node.isRequired,  // children должно быть React элементом
};

export default Layout;
