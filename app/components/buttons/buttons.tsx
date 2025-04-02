import Link from "next/link";
import React, { BaseSyntheticEvent } from "react";

interface ButtonProps {
    onClick?: (event: BaseSyntheticEvent) => void,
    href?: string,
    children: React.ReactNode,
    className?: string,
}

export function Button(props: ButtonProps) {
    const { onClick, href, children, className } = props;
    const baseClass = "btn-base";
    if (href) {
        return (
            <Link href={href} className={`${baseClass} ${className || ''}`} >{children}</Link>
        );
    }
    return (
        <button onClick={onClick} className={`${baseClass} ${className || ''}`}>{children}</button>
    );
}