import React, { Fragment, useEffect, useState } from 'react'
import ProjectCard from '../projectCard/ProjectCard'
import { List, ItemList, DeleteButton, Pagination, PaginationButton } from '../../views/home/style'
import { MdDelete } from 'react-icons/md';

const elementsPerPage = 6;
const ProjectsComponent = (props) => {

    const { data, urlParams } = props;

    const [page, setPage] = useState(0);

    const deleteItem = (i) => { document.getElementById(i).remove(); }

    const sliceData = () => (data && data.slice(page * elementsPerPage, page * elementsPerPage + elementsPerPage));

    useEffect(() => {}, [page]);

    return (
        <Fragment>
            {data &&
                <List>
                    {sliceData().map((ele, i) => (
                        <ItemList primaryColor={'#F5ECE8'} id={i}>
                            <DeleteButton onClick={() => deleteItem(i)}><MdDelete fontSize={20} /></DeleteButton>
                            <ProjectCard id={ele.id} urlParams={urlParams} key={ele.id} />
                        </ItemList>
                    ))}
                </List>
            }
              <Pagination>
                    <PaginationButton onClick={() => setPage(0)}>1</PaginationButton>
                    <PaginationButton onClick={() => setPage(1)}>2</PaginationButton>
                    <PaginationButton onClick={() => setPage(2)}>3</PaginationButton>
                </Pagination>
        </Fragment>
    )

}

export default ProjectsComponent;