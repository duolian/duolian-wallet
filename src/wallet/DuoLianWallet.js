const EthWallet = require("ethereumjs-wallet");
const EthUtil   = require("ethereumjs-util");

class DuoLianWallet {

    constructor() {
        this.instance = null;
    }

    /**
     * 获取实例
     */
    getInstance() {
        if (this.instance == null) {
            this.instance = EthWallet.generate();
        }
        return this.instance;
    }

    /**
     * 获取地址
     */
    getAddress() {
        var address = this.getInstance().getAddressString();
        return address;
    }

    /**
     * 获取私钥
     */
    getPrivateKey() {
        var privateKey = this.getInstance().getPrivateKeyString();
        return privateKey;
    }

    /**
     * 获取keystore
     * @param string _password 
     */
    getKeyStore(_password) {
        var keystore = this.getInstance().toV3String(_password);
        return keystore;
    }

    /**
     * 通过私钥导入账号
     * @param string _privateKey 
     */
    fromPrivateKey(_privateKey) {
        var privateKeyBuffer = EthUtil.toBuffer(_privateKey);
        console.log(_privateKey);
        console.log(privateKeyBuffer);
        this.instance = EthWallet.fromPrivateKey(privateKeyBuffer);
        return this.instance;
    }

    /**
     * 通过keystore文件导入账号
     * @param string _keystore 
     * @param string _password 
     */
    fromKeyStore(_keystore, _password) {
        this.instance = EthWallet.fromV3(_keystore, _password);
        console.log(this.instance.getAddress());
        return this.instance;
    }
}

export default DuoLianWallet;