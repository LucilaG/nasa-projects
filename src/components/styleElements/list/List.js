import React, { Fragment } from 'react'
import styled from 'styled-components'

const List = (props) => {
    const { data, ulClassName, liClassName } = props;
    console.log(data)
    return (
        <Fragment>
            {data &&
                <ul className={ulClassName}>
                    {data.projects.slice(0,10).map(ele => (
                        <li className={liClassName}>{ele.lastUpdated}</li>
                    ))}
                </ul>}
        </Fragment>
    )

}

export default List;