import React from "react";

import "./button.scss";

export default function Button({content, className}) {
    return (
        <button id="btnCommon" className={className}>
            {content}
        </button>
    )
}