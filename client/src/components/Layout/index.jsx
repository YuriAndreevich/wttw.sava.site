import styles from './Layout.module.scss';
import Sidebar from 'components/Sidebar';
import Container from 'components/Container';
import  Navbar  from 'components/Navbar';

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Navbar/>
        <Sidebar />
        <Container className={styles.container}>{children}
        <marquee style={{ color: "#000", fontSize: "40px" }}>
           При поддержке учреждения образования «Новополоцкий государственный
           политехнический колледж»
         </marquee>
        </Container>
    </div>
  );
};

export default Layout;
