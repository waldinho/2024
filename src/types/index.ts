export type CardProps = {
    title?: string;
    company?: string;
    blurb?: string;
    logoUrl?: string;
    imgUrl?: string;
}

export interface Content extends CardProps {
    _id: string;
}

export type Menu = {
    item: string;
    linkUrl: string;
}