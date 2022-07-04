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


                                {session ?
                                    <Button type="primary" shape="round" size="large" style={{height:"75px", width:"200px", fontSize:"35px"}} onClick={() => signIn("github", {callbackUrl: "/"})} > Sign In </Button>

                                    :
                                    <Button type="primary" shape="round" size="large" style={{height:"75px", width:"200px", fontSize:"35px"}} onClick={() => signOut()} > Sign Out </Button>

                                }
                                <>

                                <Title> {count} </Title>
                                <Button type="primary" shape="round" size="large" style={{height:"75px", width:"200px", fontSize:"35px"}} onClick={() => setCount(count+1)} > Increment </Button>

                                </>

                            </Col>
                        </Row>

                    </Content>
                </Layout>

            </>


    )
}

export default Home
