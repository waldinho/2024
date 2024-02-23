export type CardProps = {
    company?: string;
    blurb?: string;
    logoUrl?: string;
}

export interface Work extends CardProps {
    _id: string;
}

export type Menu = {
    item: string;
    linkUrl: string;
}