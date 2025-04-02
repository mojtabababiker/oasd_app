import React from "react";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareFacebook, faInstagram, faLinkedin, faSquareXTwitter } from "@fortawesome/free-brands-svg-icons";
import {
    faEnvelope, faLocationDot, faPhone, faBars,
    faClose, faCross, faMagnifyingGlass,
    faHandHoldingHeart, faPeopleRoof, faUserGraduate, faBaby,
    faArrowRightLong, faFilter
} from "@fortawesome/free-solid-svg-icons";


export function BrandIcons(props: { icon: string, className: string }) {
    const iconNames = new Map<string, IconDefinition>();
    iconNames.set('instagram', faInstagram);
    iconNames.set('square-facebook', faSquareFacebook);
    iconNames.set('square-twitter', faSquareXTwitter);

    const icon = iconNames.get(props.icon) || faLinkedin;
    // console.log(icon);
    return (
        <FontAwesomeIcon icon={icon} className={props.className} />
    );
}

export function SolidIcons(props: { icon: string, className: string }) {
    const iconNames = new Map<string, IconDefinition>();
    iconNames.set('envelope', faEnvelope);
    iconNames.set('phone', faPhone);
    iconNames.set('location-dot', faLocationDot);
    iconNames.set('menu', faBars);
    iconNames.set('close', faClose);
    iconNames.set('cross', faCross);
    iconNames.set('search', faMagnifyingGlass);
    iconNames.set('hand-heart', faHandHoldingHeart);
    iconNames.set('people-roof', faPeopleRoof);
    iconNames.set('user-graduate', faUserGraduate);
    iconNames.set('baby', faBaby);
    iconNames.set('arrow-right', faArrowRightLong);
    iconNames.set('filter', faFilter);

    const icon = iconNames.get(props.icon) || faEnvelope;
    // console.log(icon);
    return (
        <FontAwesomeIcon icon={icon} className={props.className} />
    );
}