import React from "react";
import { useAlert } from "react-alert";

const ResponseHandler = (response, callback) => {
    const alert = useAlert();
    if(response.error){
        alert.error(response.data.message)
    } else {
        alert.success(response.data.message)
    }

    return (
        <p>{}</p>
    )
}

export default ResponseHandler;