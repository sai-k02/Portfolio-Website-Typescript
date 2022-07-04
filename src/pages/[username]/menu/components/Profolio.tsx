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

interface profolioPropsInterface {
    data: {}
}

const Profolio: NextPage<profolioPropsInterface> = (props) => {
    let SITE_USER_DATA = props.data
    return (
        <>
            <PageHeader
                // onBack={() => window.history.back()}
                subTitle=""
                extra={[
                    <Button key="1" type="primary">
                        Timeline View
                    </Button>,
                    <Button key="2" type="primary">
                        List View
                    </Button>,
                    <Button key="3" type="primary">
                        Visual View
                    </Button>,
                ]}
            ></PageHeader>

            <Layout style={{ height: "100vh" }}>
                <Row style={{ padding: 50 }} >
                    <Col align={"middle"} span={24}>
                        <>
                            <Button type="primary" shape="round" size="large" style={{ height: "75px", width: "250px", fontSize: "35px" }} > Add Pro-folio </Button>

                        </>
                    </Col>

                </Row>
            </Layout>

        </>



    )
}







export default Profolio
