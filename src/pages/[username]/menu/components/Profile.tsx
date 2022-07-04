import { RadiusUprightOutlined } from '@ant-design/icons'
import type { GetServerSidePropsContext, NextPage } from 'next'
import { Layout, Avatar, Typography, Button, PageHeader, Divider, Row, Col, Skeleton, Image, Space, Card } from 'antd';
import SkeletonAvatar from 'antd/lib/skeleton/Avatar';
import { useState } from 'react';
import { useEffect } from 'react';
import HeaderMain from './HeaderMain';
import { signOut, useSession } from 'next-auth/react';
import { Tabs } from 'antd';
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
// building honestly the menu for a logged in user

const { Header, Content, Footer, Sider } = Layout
const { Text, Title } = Typography

// handle the change of the tab pane
const { TabPane } = Tabs;

interface profilePropsInterface {
    data: {}
}

const Profile: NextPage<profilePropsInterface> = (props) => {
    let SITE_USER_DATA = props.data
    SITE_USER_DATA = SITE_USER_DATA.User
    const SITE_USERNAME = SITE_USER_DATA.login
    const SITE_USER_AVATAR = SITE_USER_DATA.avatar_url
    return (
        <Layout>
            <Row style={{ padding: 50 }}>
                <Col align={"middle"} span={6}>
                    <Image width={250} height={250} src={SITE_USER_AVATAR}></Image>
                </Col>
                <Col align={"middle"} span={6}>
                    <Card title="Stats" style={{ width: 600, height: 250 }}>
                        <Layout style={{ padding: 0 }}>
                            <Row>
                                <Col style={{ textAlign: "left" }}>
                                    <p>Name: {SITE_USER_DATA.name}</p>
                                    <p>Github Member Since: {SITE_USER_DATA.created_at}</p>
                                    <p>Last updated Github: {SITE_USER_DATA.updated_at}</p>
                                    <p>Last updated Pro-folio: {SITE_USER_DATA.updated_at}</p>
                                </Col>
                                <Col push={2}>
                                    <p>Num Repos: {SITE_USER_DATA.public_repos}</p>
                                    <p>Num Experiences: { }</p>
                                    <p>Num Projects: { }</p>
                                    <p>Num Technologies: { }</p>
                                </Col>
                            </Row>

                        </Layout>

                    </Card>

                </Col>
                <Col align={"middle"} span={6}>
                </Col>
                <Col align={"middle"} span={6}>
                    <Card title="Repos" style={{ width: 300, height: 250 }}>
                        <p>Implement a scrollable list of all repos</p>
                        <Button footer={"hello"}>View All</Button>

                    </Card>
                </Col>
            </Row>
            <Row style={{ padding: 50 }}>
                <Col align={"middle"} span={8}>
                    implement a beaitful activity monitor
                </Col>
            </Row>
        </Layout>
    )
}





export default Profile
