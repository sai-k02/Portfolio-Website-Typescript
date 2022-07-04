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

interface experiencesPropsInterface{
    data: {}
}

const Experiences: NextPage<experiencesPropsInterface> = (props) => {
    const SITE_USER_DATA = props.data
    return (
        <Layout style={{height:"100vh"}}>
            <Row style={{padding:50}} >
                <Col align={"middle"} span={24}>
                    <>
                        <Button type="primary" shape="round" size="large" style={{height:"75px", width:"300px", fontSize:"35px"}} > Add Experience </Button>
                    </>
                </Col>
            </Row>
        </Layout>
    )
}




export default Experiences
