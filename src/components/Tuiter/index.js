import React from "react";

import {Link} from "react-router-dom";

const Index = () => {
    return(
        <>
            <h1>Tuiter</h1>
            <Link to="/hello">
                Hello
            </Link> |
            <Link to="/">
                Labs
            </Link>
        </>
    )
};


export default Index;