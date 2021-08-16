import React from 'react';
import { Layout } from 'antd';

import HeaderPage from '../Header';
import FooterPage from '../Footer';

const { Header, Footer, Content } = Layout;

function MainLayout({ children }) {
  if (window.location.pathname === "/confirmation" || window.location.pathname === "/confirmation/approve" || window.location.pathname === "/confirmation/reject") {
    return (
      <Layout>
          <Header>
              <HeaderPage />
          </Header>
          <Content className="confirmation">
              {children}
          </Content>
      </Layout>
    );
  } else {
    return (
      <Layout>
          <Header>
              <HeaderPage />
          </Header>
          <Content>
              {children}
          </Content>
          <Footer>
              <FooterPage />
          </Footer>
      </Layout>
    );
  }
}

export default MainLayout;