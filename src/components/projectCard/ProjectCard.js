import React, { Fragment, useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import Title from '../styleElements/title/Title'
import { useGet } from "restful-react"
import { Span, Button, Article, Container, Transparent, CloseButton } from './style'
const URL = 'https://api.nasa.gov/techport/api/projects/'

const ProjectCard = (props) => {

    const { id, urlParams } = props;

    const [showMore, setShowMore] = useState(false)

    const node = useRef();

    const { data, error, loading } = useGet({
        path: URL.concat('/', id, urlParams)
    });

    const dataRow = ['lastUpdated', 'status', 'startDate', 'description'];

    const handleClick = (e) => {
        setShowMore(!showMore);
    }

    const formatTitle = (raw) => raw.replace(/([A-Z]+)/g, " $1").replace(/^,/, "");

    return (
        <Fragment>
            {data   &&
                Object.values(data).map(ele => {
                    return (
                        <Container className={showMore ? "active" : ""} ref={node}>
                            <Article key={ele.id}>
                                <Title title={ele.title} />
                                <CloseButton onClick={e => handleClick(e)}> X </CloseButton>
                                {dataRow.map(drele => ele[drele] && <p><Span primary>{formatTitle(drele)}</Span><br /><Span>{ele[drele]}</Span></p>)}
                            </Article>
                            <Transparent className='transparent'></Transparent>
                            <Button onClick={e => handleClick(e)}>
                                Show More
                            </Button>
                        </Container>

                    )
                })
            }
        </Fragment>
    )

}

export default ProjectCard;

