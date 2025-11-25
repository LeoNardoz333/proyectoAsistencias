import React from "react";
import "../../assets/css/elements/links.scss";
export function PrimaryLink({ href, children }) {
    return (
        <a className="forgot-password-link" href={href}>
            {children}
        </a>
    );
}

export default {
    PrimaryLink,
};