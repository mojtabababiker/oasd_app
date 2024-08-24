import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../buttons/buttons";
import { AboutUsParams } from "@/app/utils/interfaces/interfaces";

export default function AboutUs(params: AboutUsParams) {
    const { actionLink, actionTitle } = params;
    return (
        <div className="about-us-brief">
            <div className="brief-img">
                <Image src={'/images/brief_image.png'} alt="About OASD" width={720} height={720} />
            </div>
            <div className="brief-content">
                <h4 className="sub-title">Welcome to OASD</h4>
                <h1 className="main-title">We're on a mission to make the <span>change</span></h1>
                <p className="secondary-p">
                    The African Organization for Social Development (OASD) is a
                    charitable organization that is non-profit, non-governmental,
                    and non-discriminatory organization that was established in 2021 in Uganda.<br />
                    <span>
                        Our goal is to foster social and economic development for Africa's underprivileged
                        and disadvantaged communities. We prioritize family, women, youth, and child safety
                        issues, as well as inclusive and effective social protection systems.
                    </span>
                </p>
                <Button href={actionLink || "/about"} className="solid-btn-primary">{actionTitle || "Learn More"}</Button>
            </div>
        </div>
    );
}