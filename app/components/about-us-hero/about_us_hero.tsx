import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../buttons/buttons";
import { AboutUsParams } from "@/app/utils/interfaces/interfaces";
import { InView } from "react-intersection-observer";

export default function AboutUs(params: AboutUsParams) {
  const { actionLink, actionTitle } = params;
  return (
    <div className="about-us-brief">
      <div className="brief-img">
        <Image
          src={"/images/brief_image.png"}
          alt="About OASD"
          width={720}
          height={720}
        />
      </div>
      <div className="brief-content">
        <h4 className="sub-title">Welcome to OASD</h4>
        <h1 className="main-title">
          We &apos;re on a mission to make the <span>change</span>
        </h1>

        <InView
          as="p"
          className="secondary-p"
          threshold={1}
          onChange={(inView, entry) =>
            inView && entry.target.classList.add("slide-right")
          }
        >
          The African Organization for Social Development (OASD) is a charitable
          organization that is non-profit, non-governmental, and
          non-discriminatory organization that was established in 2021 in
          Uganda.
          <br />
          <span>
            Our goal is to foster social and economic development for
            Africa&apos;s underprivileged and disadvantaged communities. We
            prioritize family, women, youth, and child safety issues, as well as
            inclusive and effective social protection systems.
          </span>
        </InView>
        <InView
          as="div"
          className="header-actions"
          threshold={1}
          onChange={(inView, entry) =>
            inView && entry.target.classList.add("slide-right")
          }
        >
          <Button href={actionLink || "/about"} className="solid-btn-primary">
            {actionTitle || "Learn More"}
          </Button>
        </InView>
      </div>
    </div>
  );
}
