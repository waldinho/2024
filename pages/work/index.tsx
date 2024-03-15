import { useEffect, useState } from "react";
import { Content } from '../../types';
import Card from '../../components/Card'

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

    const recordList = () => workList?.map((work: Content) => (
            <Card {...work} key={work.company}/>
        )
    );

    return <div>{recordList()}</div>
}

