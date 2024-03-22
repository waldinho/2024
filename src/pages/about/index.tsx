'use client'
import { useContext } from "react";

import { AboutContext } from '../../contexts/AboutContext';
import { Content } from '../../types';
import Card from '../../components/Card'

export default function About() {
    const aboutContent = useContext<Content>(AboutContext);
    return <div>{aboutContent &&<Card {...aboutContent} key={aboutContent?.title}/>}</div>
}

