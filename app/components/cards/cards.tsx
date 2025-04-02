import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/app/components/buttons/buttons";
import { BrandIcons } from "@/app/components/icons/icons";
import { ProgramCardParam, TeamCardParam, PostCardParams, FeaturedPostParam } from "@/app/utils/interfaces/interfaces";
import { InView } from "react-intersection-observer";


export function ProgramCard(param: ProgramCardParam) {
    return (
        <InView as="div" className="card-container" threshold={1}
            onChange={(inView, entry) =>
                inView && entry.target.classList.add('slide-top')
            }>
            <div className="card-image">
                <Image src={param.icon} alt={param.title} width={200} height={200} />
            </div>
            <div className="card-body">
                <h2 className="">{param.title}</h2>
                <p className="secondary-p">{param.children}</p>
                <Button href={param.link}>Learn More</Button>
            </div>
        </InView >
        // <div className="card-container">
        //     <div className="card-image">
        //         <Image src={param.icon} alt={param.title} width={200} height={200} />
        //     </div>
        //     <div className="card-body">
        //         <h2 className="">{param.title}</h2>
        //         <p className="secondary-p">{param.children}</p>
        //         <Button href={param.link}>Learn More</Button>
        //     </div>
        // </div>
    )
}

export function TeamCard(param: TeamCardParam) {

    return (
        <div className="card-container team-card-container">
            <div className="card-thumbnail">
                <Image src={`/images/directors/${param.thumbnail}.jpg`} alt={`${param.name} image`} width={460} height={620} />
            </div>
            <div className="card-body">
                <h2>{param.name}</h2>
                <p className="secondary-p">{param.children}</p>
            </div>
            <div className="card-footer">
                <ul>
                    <li key={1}>
                        <Link href={'#'}>
                            <BrandIcons icon="linkedin" className="" />
                        </Link>
                    </li>
                    <li key={2}>
                        <Link href={'#'}>
                            <BrandIcons icon="square-facebook" className="" />
                        </Link>
                    </li>
                </ul>
            </div>
        </div >
    );
}

export function PostCard(params: PostCardParams) {
    const { category, title, thumbnail, summary, link } = params;
    const tags = params.tags || [];

    return (
        <div className="card-container post-card-container">
            <div className="post-thumbnail">
                <Image className="post-image" src={thumbnail} alt="Post Thumbnail Image" width={640} height={720} />
            </div>
            <div className="post-card-body">
                <div className={`post-category-tag ${category.toLowerCase().replaceAll(' ', '-')}-tag`}>{category}</div>
                <div className="post-meta">
                    {/* clock icon here */}
                    <h6 className="sub-title">{params.lastUpdate || 'This Year'}</h6>
                </div>
                <div className="post-title">
                    <h3 className="primary-title">
                        {title.length <= 27 ? title : title.slice(0, 20) + '...'}
                    </h3>
                </div>
                <div className="post-summary">
                    <p className="secondary-p">
                        {summary}
                    </p>
                </div>
            </div>
            <div className="post-card-link-container">
                <Button href={params.link}>Read On</Button>
            </div>
        </div>
    );
}

export function FeaturedPostCard(params: FeaturedPostParam) {
    const { category, title, thumbnail, link } = params;

    return (
        <div className="card-container post-card-container featured-post-container">
            <div className="post-thumbnail">
                <Image className="post-image" src={thumbnail} alt="Post Thumbnail Image" width={640} height={720} />
            </div>
            <div className="post-card-body">
                <div className={`post-category-tag ${category.toLowerCase().replaceAll(' ', '-')}-tag`}>{category}</div>
                <div className="post-meta">
                    {/* clock icon here */}
                    <h6 className="sub-title">{params.lastUpdate || 'This Year'}</h6>
                </div>
                <div className="post-title">
                    <h3 className="primary-title">
                        {title.length <= 27 ? title : title.slice(0, 20) + '...'}
                    </h3>
                </div>
            </div>
            <div className="post-card-link-container">
                <Button href={params.link}>Read On</Button>
            </div>
        </div>
    );
}
