import React from "react";
import SpinnerImg from "../../assets/img/loader.gif";

let Spinner = () => {
    return(
        <React.Fragment>
            <div>
                <img src={SpinnerImg} alt="Loading" className="d-block m-auto" style={{width: '200px'}} />
            </div>
        </React.Fragment>
    )
};

export default Spinner;