const axios = require("axios");

const getPairData = async (pair) => {
    try {
        let res = await axios.get(`${process.env.REACT_APP_SERVER_URL}api/stats/pair?pair=${pair}`, {
            headers: { 
                'Access-Control-Allow-Origin' : '*',
                'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
              },
        })
        return res.data;
    } catch(error){
        console.log(error);
    }
}

const sendSwap = async (data) => {
    try {
        let res = await axios.post(`${process.env.REACT_APP_SERVER_URL}api/swap/create`, data, {
            headers: { 
                'Access-Control-Allow-Origin' : '*',
                'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
              },
        });
        console.log(res.data);
    } catch(error){
        alert(error);
        console.log(error);
    }
}

export {
    getPairData,
    sendSwap
}