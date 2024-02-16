import { useEffect, useState } from "react";
import Card from '../../components/Card'

interface CardProps {
    _id: string;
    company?: string;
    blurb?: string;
    logoUrl?: string;
}

export default function Work() {
    const [workList, setWorkList] = useState([]);

    useEffect(() => {
        async function getRecords() {
          const response = await fetch(`http://localhost:5000/work/`);
           if (!response.ok) {
            const message = `An error occurred: ${response.statusText}`;
            window.alert(message);
            return;
          }
           const data = await response.json();
           setWorkList(data);
        }
         getRecords();
         return;
    }, [workList.length]);

    const recordList = () => workList?.map((work: CardProps) => (
            <Card {...work} />
        )
    );

    return <div>{recordList()}</div>
}

