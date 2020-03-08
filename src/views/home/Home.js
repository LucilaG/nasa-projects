import React, { Fragment } from 'react'
import { useGet } from "restful-react"
import ProjectsComponent from '../../components/projectsComponent/ProjectsComponent'
import { Header, Title, Body, Content } from './style'
import Loading from '../../components/loading/Loading'

const URL = 'https://api.nasa.gov/techport/api/projects'
const URL_PARAMS = '?api_key=aFTcAdnON8NotVOegGndAMcsUKn1t9a1bieDPAmO'

const Home = (props) => {

    const { data, error, loading } = useGet({
        path: URL.concat(URL_PARAMS),
        resolve: data => data && data.projects && data.projects.projects,
    });


    return (
        <Fragment>
            {loading && <Loading className='fixed' />}
            {data &&
                <Content loading={loading}>
                    <Header>
                        <Title>Nasa<br />Projects</Title>
                        <Title subtitle>Hey!<br /> look at everything <br /> NASA is working on</Title>
                    </Header>
                    <Body>
                        <ProjectsComponent data={data} urlParams={URL_PARAMS}></ProjectsComponent>
                    </Body>
                </Content >
            }
        </Fragment>
    )

}

export default Home;