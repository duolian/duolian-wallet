import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import 'antd/dist/antd.css';
import CreateAccount from '../components/CreateAccountComponent';
import ExportAccount from '../components/ExportAccountComponent';

const { Content, Sider } = Layout;

class AccountComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mode: 'create'
        };
    }

    componentDidMount() {
    }

    onSelectTab = ({key}) => {
        this.setState({
            mode: key
        })
    }

    renderContent() {
        const wallet = this.props.wallet;
        const { mode } = this.state;
        switch(mode) {
            case 'create':
                return <CreateAccount wallet={wallet} />;
            case 'export':
                return <ExportAccount wallet={wallet} />;
        }
    }
      

    render() {
        return (
            <Layout style={{ padding: '24px 0', background: '#fff' }}>
                <Sider width={200} style={{ background: '#fff' }}>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['create']}
                        style={{ height: '100%' }}
                        onSelect={this.onSelectTab}
                    >
                        <Menu.Item key="create">创建钱包</Menu.Item>
                        <Menu.Item key="export">导入钱包</Menu.Item>                        
                    </Menu>
                </Sider>
                <Content style={{ padding: '0 24px', minHeight: 280 }}>
                    { this.renderContent() }
                </Content>
            </Layout>
        );
    }
}

export default AccountComponent;