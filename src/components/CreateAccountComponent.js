import React, { Component } from 'react';
import { Layout, Card, Button } from 'antd';
import 'antd/dist/antd.css';


const { Content, Sider } = Layout;

class CreateAccount extends Component {

    constructor(props) {
        super(props);
    }

    getAccount(wallet) {
        var address = wallet.getAddress();
        return address;
    }

    createAccount(wallet) {
        var account = wallet.getAddress();
    }

    renderContent() {
        
    }

    render() {
        const wallet = this.props.wallet;
        return (
            <div>
                <Card title="账户信息" extra={<a href="#">More</a>} style={{ width: 640 }}>
                    <p>Address: <span class="account">{ wallet.getAddress() }</span></p> 
                    <p>PrivateKey: <span class="account">{ wallet.getPrivateKey() }</span></p> 
                </Card>
            </div>
        );
    }
}

export default CreateAccount;