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

export {
    getPairData
}