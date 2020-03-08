import React, { Fragment } from 'react'
import { useGet } from "restful-react"
import ProjectCard from '../../components/projectCard/ProjectCard'
import { List, ItemList, Header, Title, Body, Content } from './style'

const URL = 'https://api.nasa.gov/techport/api/projects'
const URL_PARAMS = '?api_key=aFTcAdnON8NotVOegGndAMcsUKn1t9a1bieDPAmO'

const Home = (props) => {

    const { data, error, loading } = useGet({
        path: URL.concat(URL_PARAMS)
    });
    return (
        <Content>
            <Header>
                <Title>Nasa Projects</Title>
                <Title subtitle>Hey! look at everything NASA is working on</Title>
            </Header>
            <Body>
                {(data && data.projects) &&
                    <List>
                        {data.projects.projects.slice(0, 10).map(ele => (
                            <ItemList primaryColor={'#F5ECE8'}>
                                <ProjectCard id={ele.id} urlParams={URL_PARAMS} key={ele.id}/>
                            </ItemList>
                        ))}
                    </List>
                }
            </Body>
        </Content >
    )

}

export default Home;