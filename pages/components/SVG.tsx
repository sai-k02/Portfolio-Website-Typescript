/*

 */

import type { NextPage } from 'next'
import {
    Divider,
    Layout,
    Typography,
    Button,
    PageHeader,
    Tooltip,
    Row,
    Col,
    Steps,
    Space,
    Avatar,
    Badge,
    Menu,
    Card
} from 'antd';
import {LoadingOutlined, UserOutlined, SolutionOutlined} from '@ant-design/icons';
import { signIn, signOut, useSession} from 'next-auth/react';
import { Paper } from '@mui/material';
import {useState} from "react";

const {Header, Content, Footer} = Layout
const {Text, Title} = Typography
const { Step } = Steps;

const Home: NextPage = () => {
    const { data: session } =  useSession();
    const [count, setCount] = useState(0);

    return (

        <>
            <Layout >
                <Content>
                    <Row style={{ paddingTop:50}}>
                        <Col span={24} align={"middle"}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 30 30"
                            >
                                <path d="M 13 3 C 10.791 3 9 4.791 9 7 L 9 8 L 14 8 C 14.552 8 15 8.448 15 9 C 15 9.552 14.552 10 14 10 L 9 10 L 8 10 L 7 10 C 4.791 10 3 11.791 3 14 L 3 18 C 3 20.209 4.791 22 7 22 L 8 22 L 8 17 C 8 15.346 9.346 14 11 14 L 19 14 C 19.552 14 20 13.552 20 13 L 20 7 C 20 4.791 18.209 3 16 3 L 13 3 z M 12 5 C 12.552 5 13 5.448 13 6 C 13 6.552 12.552 7 12 7 C 11.448 7 11 6.552 11 6 C 11 5.448 11.448 5 12 5 z M 22 8 L 22 13 C 22 14.654 20.654 16 19 16 L 11 16 C 10.448 16 10 16.448 10 17 L 10 23 C 10 25.209 11.791 27 14 27 L 17 27 C 19.209 27 21 25.209 21 23 L 21 22 L 16 22 C 15.448 22 15 21.552 15 21 C 15 20.448 15.448 20 16 20 L 21 20 L 22 20 L 23 20 C 25.209 20 27 18.209 27 16 L 27 12 C 27 9.791 25.209 8 23 8 L 22 8 z M 18 23 C 18.552 23 19 23.448 19 24 C 19 24.552 18.552 25 18 25 C 17.448 25 17 24.552 17 24 C 17 23.448 17.448 23 18 23 z\\\\" />
                            </svg>

                        </Col>
                    </Row>

                </Content>
            </Layout>

        </>


    )
}

export default Home
