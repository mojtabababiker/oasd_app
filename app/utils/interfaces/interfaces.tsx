import { BaseSyntheticEvent } from "react";

export interface NavBarParams {
  activeTap?: string,
}

export interface ProgramCardParam {
  children?: React.ReactNode,
  title: string,
  icon: string,
  link: string,
}

export interface TeamCardParam {
  children?: React.ReactNode,
  thumbnail: string,
  name: string
}

export interface PostCardParams {
  category: string,
  title: string,
  thumbnail: string,
  summary: string,
  link: string,
  tags?: string[],
  createdAt?: string,
  lastUpdate?: string,
  author?: string,
  content?: string,
}

export interface FeaturedPostParam {
  category: string,
  title: string,
  thumbnail: string,
  link: string,
  lastUpdate?: string,
}

export interface ButtonProps {
  onClick?: (event: BaseSyntheticEvent) => void,
  href?: string,
  children: React.ReactNode,
  className?: string,
}

export interface BreadCrumbParams {
  bgImage?: string,
  classType?: string,
  ancestors: { title: string, link: string }[],
  self: string
}

export interface AboutUsParams {
  actionLink?: string,
  actionTitle?: string,
}