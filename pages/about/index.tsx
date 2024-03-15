'use client'
import { useEffect, useState } from "react";
import { Content } from '../../types';
import Card from '../../components/Card'

export default function About() {
    const [aboutContent, setAboutContent] = useState<Content>();

    useEffect(() => {
        async function getRecords() {
          const response = await fetch(`http://localhost:5000/about/`);
           if (!response.ok) {
            const message = `An error occurred: ${response.statusText}`;
            window.alert(message);
            return;
          }
           const data = await response.json();
           console.log('data: ', data[0]);
           setAboutContent(data[0]);
        }
         getRecords();
         return;
    }, []);

    return <div>{aboutContent &&<Card {...aboutContent} key={aboutContent?.title}/>}</div>
}

