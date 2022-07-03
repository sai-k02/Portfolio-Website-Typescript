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

interface settingsPropsInterface{
    data: {}
}

const Settings:NextPage<settingsPropsInterface> = (props) => {
    let SITE_USER_DATA = props.data
    return (
        <Layout style={{height:"100vh"}}>
            <Row style={{padding:50}} >
                <Col align={"middle"} span={24}>
                    <Card title="Settings" style={{ width: "600px",  height:"700px" }}>
                        <Button type="primary" shape="round" size="large" style={{height:"75px", width:"325px", fontSize:"35px"}} > Delete Account </Button>

                    </Card>
                </Col>
            </Row>
        </Layout>
    )
}







export default Settings
