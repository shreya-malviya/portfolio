import React from "react";
import "./loading.css";
function Loading() {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <ul className="cssload-flex-container">
                <li>
                    <span className="cssload-loading cssload-one"></span>
                    <span className="cssload-loading cssload-two"></span>
                    <span className="cssload-loading-center"></span>
                </li>
            </ul>
        </div>
    );
}

export default Loading;
