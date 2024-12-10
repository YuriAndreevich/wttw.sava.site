import React from 'react';
import styles from './Layout.module.scss';
import Sidebar from 'components/Sidebar';
import Container from 'components/Container';
import  Navbar  from 'components/Navbar';

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Navbar/>
        <Sidebar />
        <Container className={styles.container}>{children}</Container>
    </div>
  );
};

export default Layout;
