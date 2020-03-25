import React, { Fragment, useState } from 'react'
import ProjectCard from '../projectCard/ProjectCard'
import { List, ItemList, DeleteButton, Pagination, PaginationButton } from './style'
import { MdDelete } from 'react-icons/md';

const elementsPerPage = 6;
const ProjectsComponent = (props) => {

    const { data, urlParams } = props;

    const [page, setPage] = useState(0);

    const pages = [0, 1, 2];

    const deleteItem = (i) => { document.getElementById(i).remove(); }

    const sliceData = () => (data && data.slice(page * elementsPerPage, page * elementsPerPage + elementsPerPage));

    return (
        <Fragment>
            {data &&
                <List>
                    {sliceData().map((ele, i) => (
                        <ItemList primaryColor={'#F5ECE8'} id={i} key={i}>
                            <DeleteButton onClick={() => deleteItem(i)}><MdDelete fontSize={20} /></DeleteButton>
                            <ProjectCard id={ele.id} urlParams={urlParams} />
                        </ItemList>
                    ))}
                </List>
            }
            <Pagination>
                {pages.map(ele => <PaginationButton onClick={() => setPage(ele)} className={page === ele ? 'selected' : ''}>{ele+1}</PaginationButton>)}
            </Pagination>
        </Fragment>
    )
}

export default ProjectsComponent;