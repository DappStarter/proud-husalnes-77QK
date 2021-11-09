require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nature tail sign story deny snow collect hover clog slot general'; 
let testAccounts = [
"0x228f3353afb63e48461116bd1e2d9af100cc3df91e6decc8db681ec1f245dd47",
"0x544787b92dfeba5bbf27373091ea2142ffd15c9750047ff98e46da1f77c5962c",
"0x0cff51d3ee0c2d0aa00d0aac12e8954d119f4a2ce2c531e55105008fb90f3aee",
"0xbb2ef179fcdabd2e583775be797494a7d75d352a54d9e391a52e2e3f5d83df09",
"0x47d6956a1f95641a88c0e496b60484c6457372c6da8cb0e304cb52c2d008ec14",
"0x7af14daed84f3f4f20b883cc39bc62ca79c3e08450dd23bd5b901256c7303555",
"0x4ece1f71140bf38f3416e566146519941c9653ee5aa602e5a18bd8d3a44b2004",
"0xe66465f44434a662cf360ba8d9711f0231f0c784ae0a5e07d588371da73ce822",
"0x59c5e78f95dd318402afcc7371f9d8983ea33c44769b56134e745026326513b8",
"0xd8715621ceccbf39513a6dd84da81eeae8e525687dfc9d7b5c78fc22d8e25cdb"
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
            version: '^0.8.0'
        }
    }
};

