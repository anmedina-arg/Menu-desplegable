import React from "react";

function MenuItem({ name }) {
 
    return (
        <div>
            <li>
                <a href="#">{name}</a>
            </li>
        </div>
    )
}

export default MenuItem