import React, { Fragment } from 'react'
import { useGet } from "restful-react"
import Card from '../card/Card';
import Loading from '../loading/Loading';

const URL = 'https://api.nasa.gov/techport/api/projects/'

const ProjectCard = (props) => {

    const { id, urlParams } = props;

    const { data, error, loading } = useGet({
        path: URL.concat('/', id, urlParams)
    });

    const dataRow = ['lastUpdated', 'status', 'startDate', 'description'];

    return (
        <Fragment>
            {loading && <Loading />}
            {data && 
                Object.values(data).map((ele, i) => {
                    return (
                        <Card data={data} dataRow={dataRow} key={i}/>
                    )
                })
            }
        </Fragment>
    )

}

export default ProjectCard;

