import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router";

function UpdatesFeed(props) {
    return (
        <div>
            Updates feed
            <Link to="/book/detail">Book Detail</Link>
        </div>
    );
}

export default withRouter(UpdatesFeed);