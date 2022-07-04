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
import HeaderMain from '../components/HeaderMain';
import { LoadingOutlined, UserOutlined, SolutionOutlined } from '@ant-design/icons';
import { signIn, signOut, useSession } from 'next-auth/react';
import { Paper } from '@mui/material';

const { Header, Content, Footer } = Layout
const { Text, Title } = Typography
const { Step } = Steps;

const Home: NextPage = () => {
    const { data: session } = useSession();

    return (
        <>
            <HeaderMain></HeaderMain>
            <Layout >
                <Content>
                    <Row style={{ paddingTop: 50 }}>
                        <Col span={24} align={"middle"}>
                            {session ?
                                <Title style={{ fontSize: 100 }}> <a>Welcome {String(session.login)} to Pricing</a> </Title>
                                :
                                <Title style={{ fontSize: 100 }}> <a>Welcome to Pricing!</a> </Title>
                            }

                        </Col>
                    </Row>

                </Content>
            </Layout>

        </>

    )
}

export default Home
