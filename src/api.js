const axios = require("axios");

const sendOrder = async (data) => {
    try {
        let res = await axios.post(`${process.env.REACT_APP_SERVER_URL}api/order/create`, data, {
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

const removeOrder = async (data) => {
    try {
        let res = await axios.post(`${process.env.REACT_APP_SERVER_URL}api/order/cancel`, data, {
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
    sendOrder,
    removeOrder
}