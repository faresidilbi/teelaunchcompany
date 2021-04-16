import React from "react";

function Footer() {
    var d = new Date();
    var y = d.getFullYear();
    return (<footer>
        <div className="footer"><b> teelaunch {y} </b></div>
        </footer>

    );
}


export default Footer;