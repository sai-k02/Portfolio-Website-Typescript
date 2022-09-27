// import packages
import type { GetServerSidePropsContext, NextPage } from 'next'
import { Layout, Typography, Button, PageHeader, Divider, Row, Col } from 'antd';
import { useState } from 'react';
import HeaderMain from '../components/HeaderMain';
import { useSession } from 'next-auth/react';
import { Tabs } from 'antd';
import axios from 'axios';
import { GetServerSideProps } from 'next'
// import components
import Experiences from './components/Experiences';
import Profile from './components/Profile';
import pro-folio from './components/pro-folio';
import Projects from './components/Projects';
import Settings from './components/Settings';
import Technologies from './components/Technologies';
// building honestly the menu for a logged in user

const { Header, Content, Footer, Sider } = Layout
const { Text, Title } = Typography

// handle the change of the tab pane
const { TabPane } = Tabs;


const Home: NextPage = () => {
  const { data: session } = useSession();

  return (
    session ? <Title>Hello {session.login} in user</Title> : <Title>Hello</Title>

  )
}










export default Home
