'use client';
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { SolidIcons } from "@/app/components/icons/icons";
import { BreadCrumbParams } from "@/app/utils/interfaces/interfaces";


export default function BreadCrumb(params: BreadCrumbParams) {

  const { self, ancestors, classType, bgImage } = params;
  const parent = ancestors.length > 1 ? ancestors[ancestors.length - 1].title : self;

  useEffect(() => {
    const breadContainer = document.querySelector('.breadcrumb-container');
    breadContainer?.classList.add('breadcrumb-animate');
  }, [])
  return (
    <section className={`container-fluid breadcrumb-container ${classType || 'causes-bg'}`} style={bgImage ? { backgroundImage: bgImage } : {}}>
      <div className="header-title-container">
        <h2 className="primary-title">{parent}</h2>
        <ul className="breadcrumb">
          {ancestors.map((ancestor, index) =>
            <li key={index}>
              <Link href={ancestor.link}>{ancestor.title}</Link>
              <SolidIcons icon="arrow-right" className="breadcrumb-icon" />
            </li>
          )}
          <li key={ancestors.length}>{self}</li>
        </ul>
      </div>
    </section>
  )
}