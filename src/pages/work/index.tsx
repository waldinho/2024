import { useContext } from "react";
import { WorkContext } from '../../contexts/WorkContext';
import { Content } from '../../types';
import Card from '../../components/Card'

export default function Work() {
    const workList = useContext(WorkContext) as Content[];

    const recordList = () => workList?.map((work: Content) => (
            <Card {...work} key={work.company}/>
        )
    );

    return <div>{recordList()}</div>
}

