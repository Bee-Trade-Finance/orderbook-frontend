const axios = require("axios");

const sendOrder = async (data) => {
    let res = await axios.post(`${process.env.REACT_APP_SERVER_URL}api/order/create`, data);
    console.log(res.data);
}

export {
    sendOrder
}