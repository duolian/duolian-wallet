import React, { Component } from 'react';

import { Layout, Menu } from 'antd';
// import logo from './logo.svg';
import 'antd/dist/antd.css';
import './App.css';
import AccountComponent from "./components/AccountComponent";
import DuoLianWallet from "./wallet/DuoLianWallet";

const wallet = new DuoLianWallet();

const { Header, Content, Footer } = Layout;


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Layout>
        <Header className="header">
          <div className="logo">破可乐瓶的破钱包</div>
          <Menu 
          theme="dark" 
          mode="horizontal"
          defaultSelectedKeys={['account']}
          style={{ lineHeight: '64px' }}
          onSelect={this.onSelectTab}
          >
            <Menu.Item key="account">账户</Menu.Item>    
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Layout style={{ padding: '24px 0', background: "#fff", minHeight: '480px'}}>
            <AccountComponent wallet={wallet} />
          </Layout>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Wallet 2018 破可乐瓶
        </Footer>
      </Layout>
    );
  }
}

export default App;
