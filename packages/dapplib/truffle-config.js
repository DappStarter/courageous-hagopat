require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom knife frame security iron response still grant half arctic swift thunder'; 
let testAccounts = [
"0xfb2baa087991beb8246ca27c354bd24a85d9ec302cb23303f273226a4a4c76e3",
"0x00060a12a5da82cf78c60a9cc304898c9c0ad0da88537492810cafd4405c6ae2",
"0x62ccf96b1753f7ae67ced9c44beb7e53e6b7760e8777be202c5bcd41337f0009",
"0xcf793c84048b91941ae1c21233b5551655378574a1bd9e61e0367330a2ed320c",
"0x640a390bec5b092c436e863a802c6698bf88ee30a5f29ce9d9fd0b85155ca29d",
"0x4fcd9d6064229eeb98acaf698bafb115cf0ef414b2059f40b047ab783b2321dc",
"0x724755a93b6a011270d7e5ea9a5172b673ae0f5c3e942c3ae73cd908951fa749",
"0x5a6f6f71815335ced2b6ddef2aaee2c95704a343dddd14abe34a4a698585d2b3",
"0xf45e95f8fb5d0b78ed01d1ae9488aff8dcc9072a77164de92b74f9a32c0fce70",
"0x1554e65ef085587bb0b3df5bef0481dbf0f97b6a07c06661e1a86ab7586d33a2"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
