import React, { Fragment } from 'react'
import { useGet } from "restful-react"
import Card from '../card/Card';
import Loading from '../loading/Loading';

const ProjectCard = ({ id, urlParams }) => {

    const { data, loading } = useGet({
        path: process.env.REACT_APP_BASE_URL.concat('/', id, urlParams)
    });

    const dataRow = ['lastUpdated', 'status', 'startDate', 'description'];

    return (
        <Fragment>
            {loading && <Loading />}
            {data && <Card data={data} dataRow={dataRow} />}
        </Fragment>
    )

}

export default ProjectCard;

