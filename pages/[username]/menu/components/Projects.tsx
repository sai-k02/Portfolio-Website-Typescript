import {RadiusUprightOutlined} from '@ant-design/icons'
import type {GetServerSidePropsContext, NextPage} from 'next'
import {Layout, Avatar, Typography, Button, PageHeader, Divider, Row, Col, Skeleton, Image, Space, Card} from 'antd';
import SkeletonAvatar from 'antd/lib/skeleton/Avatar';
import { useState } from 'react';
import { useEffect } from 'react';
import HeaderMain from '../components/HeaderMain';
import {signOut, useSession} from 'next-auth/react';
import {Tabs} from 'antd';
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
// building honestly the menu for a logged in user

const {Header, Content, Footer, Sider} = Layout
const {Text, Title} = Typography

// handle the change of the tab pane
const { TabPane } = Tabs;

interface projectsPropsInterface{
    data: {}
}

const  Projects:NextPage = (props) => {
    let SITE_USER_DATA = {}
    let SITE_USER_PROJECTS
    let projectsExist

    try{
        SITE_USER_PROJECTS = SITE_USER_DATA.technologies
        projectsExist = true;
    }catch{
        SITE_USER_PROJECTS = []
        projectsExist = false;
    }

    const [content, setContent] = useState(SITE_USER_PROJECTS)

    const onChange = async () => {
        const technology = "Python"
        addTechnology(SITE_USER_DATA, content,technology).then(() => console.log("success add tech")).catch(() => {console.log("failure add tech")})

        return
    }

    return (
        <Layout style={{height:"100vh"}}>
            <Row style={{padding:50}} >
                <Col align={"middle"} span={24}>
                    <>
                        <Button type="primary" shape="round" size="large" style={{height:"75px", width:"250px", fontSize:"35px"}} > Add Project </Button>
                    </>
                </Col>
            </Row>
        </Layout>
    )
}







export default Projects
