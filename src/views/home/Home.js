import React, { Fragment } from 'react'
import { useGet } from "restful-react"
import ProjectsComponent from '../../components/projectsComponent/ProjectsComponent'
import { Header, Title, Body, Content, Footer } from './style'
import Loading from '../../components/loading/Loading'
import Error from '../../components/error/Error';

const URL = 'https://api.nasa.gov/techport/api/projects'
const URL_PARAMS = '?api_key=aFTcAdnON8NotVOegGndAMcsUKn1t9a1bieDPAmO'

const Home = () => {

    const { data, error, loading } = useGet({
        path: URL.concat(URL_PARAMS),
        resolve: data => data && data.projects && data.projects.projects,
    });


    return (
        <Fragment>
            {loading && <Loading className='fixed' />}
            {data &&
                <Content>
                    <Header>
                        <Title>Nasa<br />Projects</Title>
                        <Title subtitle>Hey!<br /> Look at everything <br /> NASA is working on</Title>
                    </Header>
                    <Body>
                        <ProjectsComponent data={data} urlParams={URL_PARAMS}></ProjectsComponent>
                    </Body>
                    <Footer><p>Develop by Lucila Gaudio</p></Footer>
                </Content >
            }
            {error &&
                <Error />
            }
        </Fragment>
    )

}

export default Home;