import React from 'react';
import "./_spinner.scss";

const Spinner = () => {
    return (<div style={{ marginTop: "150px", textAlign: "center" }}>
        <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        {/* <i style={{ color: "red" }} className="fa fa-circle-o-notch fa-spin"></i> */}
    </div>);
}

export default Spinner;