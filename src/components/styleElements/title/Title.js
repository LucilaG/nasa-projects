import React, { Fragment } from 'react'
import styled from 'styled-components'

const Title = (props) => {
    const { title, className } = props;

    return (
        <Fragment>
            {title && <h3 className={className}>{title}</h3>}
        </Fragment>
    )

}

export default Title;