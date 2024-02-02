import Web3 from 'web3';

export async function doLogin() {
    if (!window.ethereum) throw new Error('Please install MetaMask');

    const web3 = new Web3(window.ethereum);
    const accounts = await web3.eth.requestAccounts();
    if(!accounts || !accounts.length) throw new Error('Wallet not found/allowed');
      
    localStorage.setItem('wallet', accounts[0]);
    return accounts[0];
}

export async function getCurrentVoting(){
    const wallet = localStorage.getItem('wallet');
    if(!wallet) throw new Error('Unauthorized');

    const web3 = new Web3(window.ethereum);
    const contract = new web3.eth.Contract(abi, contractAddress);
}