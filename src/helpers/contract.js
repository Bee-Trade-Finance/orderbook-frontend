import { ethers } from "ethers";
import moment from "moment";
import BeeTradeOrderbookABI from "../abis/BeeTradeOrderbook.json";
import BeeTradeStakingBTFABI from "../abis/BeetradeStakingBTF.json";

export async function getTokenBalance(library, token){
    const signer = library.getSigner();
    const beetradeOrderbookContract = new ethers.Contract(process.env.REACT_APP_CONTRACT_ADDRESS_TESTNET, BeeTradeOrderbookABI, signer);
    let res = await beetradeOrderbookContract.getAvailableTokenBalance(token);
    let res2 = await beetradeOrderbookContract.getLockedTokenBalance(token);
    return {available: ethers.utils.formatEther(res), locked: ethers.utils.formatEther(res2)};
}

export async function getTokensBalances(library, tokens){
    let res = {};
    for(const token of tokens){
        let bal = await getTokenBalance(library, token.address);
        res[token.address] = bal;
    }
    return res;
}


export async function depositAVAX(library, amount){
    try {
        const signer = library.getSigner();
        const beetradeOrderbookContract = new ethers.Contract(process.env.REACT_APP_CONTRACT_ADDRESS_TESTNET, BeeTradeOrderbookABI, signer);
        let wei = ethers.utils.parseEther(amount);
        const options = {
            value: wei
        }
        
        let res = await beetradeOrderbookContract.depositAVAX(wei.toString(), options);
        const receipt = await res.wait(res);
        console.log('rezzz', receipt);
        return ({success: true, data: {message: `Transaction Mined With ${receipt.confirmations} Confirmations, Transaction Hash: ${receipt.transactionHash}`, ...receipt}});
    } catch(error){
        if(error.data?.message) return ({error: true, data: error.data})
        if(error.message) return ({error: true, data: error})
        return error;
    }
}

export async function depositToken(library, address, amount, abi){
    try {
        const signer = library.getSigner();
        let wei = ethers.utils.parseEther(amount);
        // set token allowance first
        const tokenContract = new ethers.Contract(address, abi, signer);
        let resp = await tokenContract.approve(process.env.REACT_APP_CONTRACT_ADDRESS_TESTNET, wei.toString());
        const resp_receipt = await resp.wait(resp);

        const beetradeOrderbookContract = new ethers.Contract(process.env.REACT_APP_CONTRACT_ADDRESS_TESTNET, BeeTradeOrderbookABI, signer);
    
        let res = await beetradeOrderbookContract.depositToken(address, wei.toString());
        const receipt = await res.wait(res);
        console.log('rezzz', receipt);
        return ({success: true, data: {message: `Transaction Mined With ${receipt.confirmations} Confirmations, Transaction Hash: ${receipt.transactionHash}`, ...receipt}});
    } catch(error){
        if(error.data?.message) return ({error: true, data: error.data})
        if(error.message) return ({error: true, data: error})
        return error;
    }
}

export async function withdrawAVAX(library, amount){
    try {
        const signer = library.getSigner();
        const beetradeOrderbookContract = new ethers.Contract(process.env.REACT_APP_CONTRACT_ADDRESS_TESTNET, BeeTradeOrderbookABI, signer);
        let wei = ethers.utils.parseEther(amount);
        console.log(wei.toString())
        let res = await beetradeOrderbookContract.withdrawAVAX(wei.toString());
        const receipt = await res.wait(res);
        console.log('rezzz', receipt);
        return ({success: true, data: {message: `Transaction Mined With ${receipt.confirmations} Confirmations, Transaction Hash: ${receipt.transactionHash}`, ...receipt}});
    } catch(error){
        if(error.data?.message) return ({error: true, data: error.data})
        if(error.message) return ({error: true, data: error})
        return error;
    }
}

export async function withdrawToken(library, address, amount ){
    try {
        const signer = library.getSigner();
        const beetradeOrderbookContract = new ethers.Contract(process.env.REACT_APP_CONTRACT_ADDRESS_TESTNET, BeeTradeOrderbookABI, signer);
        let wei = ethers.utils.parseEther(amount);

        console.log(wei.toString())
        
        let res = await beetradeOrderbookContract.withdrawToken(address, wei.toString());
        const receipt = await res.wait(res);
        console.log('rezzz', receipt);
        return ({success: true, data: {message: `Transaction Mined With ${receipt.confirmations} Confirmations, Transaction Hash: ${receipt.transactionHash}`, ...receipt}});
    } catch(error){
        if(error.data?.message) return ({error: true, data: error.data})
        if(error.message) return ({error: true, data: error})
        return error;
    }
}

export async function sendOrder(library, order ){
    try {
        const signer = library.getSigner();
        const beetradeOrderbookContract = new ethers.Contract(process.env.REACT_APP_CONTRACT_ADDRESS_TESTNET, BeeTradeOrderbookABI, signer);
        let amountWei = ethers.utils.parseEther(order.volume.toString());
        let priceWei = ethers.utils.parseEther(order.price.toString());
        let res = await beetradeOrderbookContract.createOrder(amountWei.toString(), order.buySell, order.date, order.orderType, order.pair, priceWei.toString(), order.id, order.token);
        const receipt = await res.wait(res);
        console.log('rezzz', receipt);
        return ({success: true, data: {message: `Transaction Mined With ${receipt.confirmations} Confirmations, Transaction Hash: ${receipt.transactionHash}`, ...receipt}});
    } catch(error){
        if(error.data?.message) return ({error: true, data: error.data})
        if(error.message) return ({error: true, data: error})
        return error;
    }
}



export async function stakeToken(library, address, amount, abi){
    try {
        const signer = library.getSigner();
        let wei = ethers.utils.parseEther(amount);
        // set token allowance first
        const tokenContract = new ethers.Contract(address, abi, signer);
        let resp = await tokenContract.approve(process.env.REACT_APP_BEETRADE_STAKING_BTF_CONTRACT, wei.toString());
        const resp_receipt = await resp.wait(resp);

        const beetradeStakingContractBTF = new ethers.Contract(process.env.REACT_APP_BEETRADE_STAKING_BTF_CONTRACT, BeeTradeStakingBTFABI, signer);
    
        let res = await beetradeStakingContractBTF.deposit(wei.toString());
        const receipt = await res.wait(res);
        console.log('rezzz', receipt);
        return ({success: true, data: {message: `Transaction Mined With ${receipt.confirmations} Confirmations, Transaction Hash: ${receipt.transactionHash}`, ...receipt}});
    } catch(error){
        if(error.data?.message) return ({error: true, data: error.data})
        if(error.message) return ({error: true, data: error})
        return error;
    }
}


export async function unstakeToken(library, amount){
    try {
        const signer = library.getSigner();
        let wei = ethers.utils.parseEther(amount);

        const beetradeStakingContractBTF = new ethers.Contract(process.env.REACT_APP_BEETRADE_STAKING_BTF_CONTRACT, BeeTradeStakingBTFABI, signer);
    
        let res = await beetradeStakingContractBTF.withdraw(wei.toString());
        const receipt = await res.wait(res);
        console.log('rezzz', receipt);
        return ({success: true, data: {message: `Transaction Mined With ${receipt.confirmations} Confirmations, Transaction Hash: ${receipt.transactionHash}`, ...receipt}});
    } catch(error){
        if(error.data?.message) return ({error: true, data: error.data})
        if(error.message) return ({error: true, data: error})
        return error;
    }
}


export async function unstakeAllTokens(library){
    try {
        const signer = library.getSigner();

        const beetradeStakingContractBTF = new ethers.Contract(process.env.REACT_APP_BEETRADE_STAKING_BTF_CONTRACT, BeeTradeStakingBTFABI, signer);
    
        let res = await beetradeStakingContractBTF.withdrawAll();
        const receipt = await res.wait(res);
        console.log('rezzz', receipt);
        return ({success: true, data: {message: `Transaction Mined With ${receipt.confirmations} Confirmations, Transaction Hash: ${receipt.transactionHash}`, ...receipt}});
    } catch(error){
        if(error.data?.message) return ({error: true, data: error.data})
        if(error.message) return ({error: true, data: error})
        return error;
    }
}

export async function getAmountStakedUser(library, address){
    
    const signer = library.getSigner();

    const beetradeStakingContractBTF = new ethers.Contract(process.env.REACT_APP_BEETRADE_STAKING_BTF_CONTRACT, BeeTradeStakingBTFABI, signer);

    let res = await beetradeStakingContractBTF.amountStaked(address);
    return ethers.utils.formatEther(res);
    
}


export async function getTotalStaked(library){
    
    const signer = library.getSigner();

    const beetradeStakingContractBTF = new ethers.Contract(process.env.REACT_APP_BEETRADE_STAKING_BTF_CONTRACT, BeeTradeStakingBTFABI, signer);

    let res = await beetradeStakingContractBTF.totalDeposited();
    return ethers.utils.formatEther(res);
}

export async function getPendingRewards(library, address){
    const signer = library.getSigner();

    const beetradeStakingContractBTF = new ethers.Contract(process.env.REACT_APP_BEETRADE_STAKING_BTF_CONTRACT, BeeTradeStakingBTFABI, signer);

    let res = await beetradeStakingContractBTF.rewardOf(address);
    return ethers.utils.formatEther(res);
}


export async function claimRewards(library){
    try {
        const signer = library.getSigner();

        const beetradeStakingContractBTF = new ethers.Contract(process.env.REACT_APP_BEETRADE_STAKING_BTF_CONTRACT, BeeTradeStakingBTFABI, signer);
    
        let res = await beetradeStakingContractBTF.claimRewards();
        const receipt = await res.wait(res);
        console.log('rezzz', receipt);
        return ({success: true, data: {message: `Transaction Mined With ${receipt.confirmations} Confirmations, Transaction Hash: ${receipt.transactionHash}`, ...receipt}});
    } catch(error){
        if(error.data?.message) return ({error: true, data: error.data})
        if(error.message) return ({error: true, data: error})
        return error;
    }
}

export async function getAPY(library){
    const signer = library.getSigner();

    const beetradeStakingContractBTF = new ethers.Contract(process.env.REACT_APP_BEETRADE_STAKING_BTF_CONTRACT, BeeTradeStakingBTFABI, signer);

    let res = await beetradeStakingContractBTF.fixedAPY();
    return ethers.utils.formatEther(res);
}

export async function getEndsIn(library){
    const signer = library.getSigner();

    const beetradeStakingContractBTF = new ethers.Contract(process.env.REACT_APP_BEETRADE_STAKING_BTF_CONTRACT, BeeTradeStakingBTFABI, signer);

    let res = await beetradeStakingContractBTF.endPeriod();
    
    let futureDate = res.toString() * 1000;

    let nowDate = new Date().getTime();

    let milSecs = futureDate - nowDate;

    let days = Math.round((milSecs / (1000 * 3600 * 24))/1e+18);

    return (days)
}