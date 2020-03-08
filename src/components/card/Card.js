import React, { Fragment, useState, useRef } from 'react'
import { Span, Button, Article, Container, Transparent, CloseButton, CardTitle, Row, FavoriteButton } from './style'
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { MdExpandMore } from 'react-icons/md';

import { MdFavorite } from 'react-icons/md';


const Card = (props) => {

    const { data, dataRow} = props;

    const [showMore, setShowMore] = useState(false)

    const node = useRef();

    const handleClick = (e) => {
        setShowMore(!showMore)
    }

    const formatTitle = (raw) => raw.replace(/([A-Z]+)/g, " $1").replace(/^,/, "");

    const [isFavorite, setIsFavorite] = useState(false)

    return (
        <Fragment>
            {data &&
                Object.values(data).map((ele, i) => {
                    return (
                        <Container className={showMore ? "active" : "desactivate"} ref={node} key={i} id={i}>
                            <FavoriteButton onClick={() => setIsFavorite(!isFavorite)} className={isFavorite ? 'favorite' : ''}>
                                <MdFavorite fontSize={20} />
                            </FavoriteButton>
                            <Article key={ele.id}>
                                <CardTitle>{ele.title}</CardTitle>
                                <CloseButton onClick={e => handleClick(e)}><IoIosCloseCircleOutline fontSize={20} /></CloseButton>
                                {dataRow.map((drele, i) => ele[drele] && <Row key={i}><Span primary>{formatTitle(drele)}</Span> <Span>{ele[drele]}</Span></Row>)}
                            </Article>
                            <Transparent className='transparent'></Transparent>
                            <Button onClick={e => handleClick(e)}>
                                <MdExpandMore fontSize={20} />
                            </Button>
                        </Container>
                    )
                })
            }
        </Fragment>
    )

}

export default Card;

