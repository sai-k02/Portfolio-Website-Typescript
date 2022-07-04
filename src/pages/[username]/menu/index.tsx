import { RadiusUprightOutlined } from '@ant-design/icons'
import type { GetServerSidePropsContext, NextPage } from 'next'
import { Layout, Avatar, Typography, Button, PageHeader, Divider, Row, Col, Skeleton, Image, Space, Card } from 'antd';
import SkeletonAvatar from 'antd/lib/skeleton/Avatar';
import { useState } from 'react';
import { useEffect } from 'react';
import HeaderMain from '../../components/HeaderMain';
import { signOut, useSession } from 'next-auth/react';
import axios from 'axios';
import { Tabs } from 'antd';
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import Profolio from './components/Profolio'
import Experiences from "./components/Experiences";
import Projects from './components/Projects'
import Profile from './components/Profile'
import Technologies from "./components/Technologies";
import Settings from "./components/Settings";
// building honestly the menu for a logged in user

const { Header, Content, Footer, Sider } = Layout
const { Text, Title } = Typography

// handle the change of the tab pane
const { TabPane } = Tabs;


const Home: NextPage = (SITE_USER_DATA: {
    _id: string;
}) => {
    const [tabContent, setTabContent] = useState(<Profile data={SITE_USER_DATA}></Profile>)

    // get username
    const SITE_USER_NAME = SITE_USER_DATA._id
    const { data: session } = useSession();


    const onChange = (key: string) => {
        if (key == "1") {
            setTabContent(<Profile data={SITE_USER_DATA}></Profile>)
        }
        if (key == "2") {
            setTabContent(<Profolio data={SITE_USER_DATA}></Profolio>)
        }
        if (key == "3") {
            setTabContent(<Experiences data={SITE_USER_DATA}></Experiences>)
        }
        if (key == "4") {
            setTabContent(<Projects data={SITE_USER_DATA} ></Projects>)
        }
        if (key == "5") {
            setTabContent(<Technologies data={SITE_USER_DATA} ></Technologies>)
        }
        if (key == "6") {
            setTabContent(<Settings data={SITE_USER_DATA} ></Settings>)

        }
    };

    return (
        <>
            <HeaderMain></HeaderMain><Divider></Divider>
            <PageHeader
                // onBack={() => window.history.back()}
                title={[<Title>{SITE_USER_NAME}'s Menu</Title>]}
                subTitle=""
                extra={[
                    <Button key="3">Operation</Button>,
                    <Button key="2">Operation</Button>,
                    <Button key="1" type="primary">
                        Primary
                    </Button>,
                ]}
                footer={
                    <Tabs defaultActiveKey="1" onChange={onChange}>
                        <TabPane tab={<Title level={3}>Profile</Title>} key="1"> {tabContent} </TabPane>
                        <TabPane tab={<Title level={3}>Pro-folio</Title>} key="2"> {tabContent} </TabPane>
                        <TabPane tab={<Title level={3}>Experiences</Title>} key="3"> {tabContent} </TabPane>
                        <TabPane tab={<Title level={3}>Projects</Title>} key="4" >  {tabContent} </TabPane>
                        <TabPane tab={<Title level={3}>Technologies</Title>} key="5" > {tabContent} </TabPane>
                        <TabPane tab={<Title level={3}>Settings</Title>} key="6" > {tabContent} </TabPane>
                    </Tabs>
                }
            ></PageHeader>

        </>

    )
}

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
    // domain
    const domain = context.req.headers.host
    try {
        var SITE_USERNAME = context.params.username;

    } catch (error) {
        console.log("Could not fetch username of page .. cannot continue")
        return {
            notFound: true
        }
    }
    // get user name from context
    var data = JSON.stringify({ "_id": SITE_USERNAME })
    var config = {
        method: 'get',
        url: "http://" + domain + '/api/r/getUser',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };

    let raw_response = await axios(config)
        .catch((e: any) => {
            console.log(e);
        });
    if (raw_response) {

        var SITE_USER_DATA = raw_response.data
        SITE_USER_DATA = SITE_USER_DATA.usersData
        SITE_USER_DATA = SITE_USER_DATA.at(0)
        return {
            props: SITE_USER_DATA // will be passed to the page component as props
        }


    }
    else {
        console.log("Could not load technologies of the username!")
        return {
            notFound: true,
        }
    }

    return {
        notFound: true
    }

}







export default Home
