import type { NextPage } from 'next'
import {Layout, Avatar, Typography, Button, PageHeader, Input} from 'antd';
import {useSession, signIn, signOut } from "next-auth/react";
import { InfoCircleOutlined, UserOutlined } from '@ant-design/icons';
import Tooltip from '@mui/material/Tooltip';
const {Header, Content, Footer} = Layout
const {Text, Title} = Typography

const HeaderMain: NextPage = () => {
  const { data: session } = useSession();

  if(session){

    // DEFINE USERNAME
    let SESSION_USERNAME:String = String(session.login)

    // DEFINE SESSION ID
    let SESSION_ID = session.id

    // DEFINE SESSION ACCESSTOKEN
    let SESSION_ACCESSTOKEN = session.accessToken

    return (  
      <PageHeader 
      title = {[<a key={"title-session"} onClick={() => {location.assign("/"); return;}}>Pro-folio</a>]}
          //title = {[<Tooltip title={"Pro-folio"}><a key={"title-session"} onClick={() => {location.assign("/"); return;}}>Pro-folio</a></Tooltip>]}
          
      subTitle={[<Tooltip title={"Menu"}><a key={"user-logged-in"} onClick={() => {location.assign("/"+SESSION_USERNAME +"/menu"); return;}}>{SESSION_USERNAME}</a></Tooltip>]}
      extra={[
        <Input  key={"search-user"}
        size="large" 
        placeholder="Search for user" 
        prefix={<UserOutlined />}
        suffix={
          <Tooltip  title="Case Matters" placement={"bottom"}>
            <InfoCircleOutlined style={{color: 'rgba(0,0,0,.45)'}}></InfoCircleOutlined>
          </Tooltip>}>

        </Input>,
          <Tooltip title={"Sign out"} placement={"bottom"}>
              <Button key={"sign-out"} style={{minWidth:15, minHeight:15, fontWeight:"bold"}} type="primary" shape="round" size="large" onClick={() => signOut()}>Sign Out</Button>
          </Tooltip>,
          <Tooltip  title="Menu" placement={"bottom-start"}>
              <a onClick={() => {location.assign("/"+SESSION_USERNAME+"/menu")}}>
                  <Avatar key={"profile-pic"} size={45} src={session.user?.image}>

                  </Avatar>
              </a>
          </Tooltip>
      ]}>
      </PageHeader>)
  }


  return (
    <PageHeader 
      title = {[<Tooltip title={"Pro-folio"}><a key={"title-session"} onClick={() => {location.assign("/"); return;}}>Pro-folio</a></Tooltip>]}
      subTitle={[<a key={"current-user"} onClick={() => {location.assign("/"); return;}}>{"guest"}</a>]}
      extra={[
        <Input key={"user-search"}
          size="large" 
          placeholder="Search for user" 
          prefix={<UserOutlined />}
          suffix={
            <Tooltip title="Case Matters">
              <InfoCircleOutlined style={{color: 'rgba(0,0,0,.45)'}}></InfoCircleOutlined>
            </Tooltip>}>

          </Input>,
            <Tooltip title={"Sign in with Github"}>
                <Button key={"sign-in"} style={{height:"50px", width:"150px", fontWeight:"bold", fontSize:"13px"}} type="primary" shape="round" onClick={() => signIn("github", {callbackUrl: "/"})}>Sign in with Github</Button>
            </Tooltip>,
          <Tooltip title={"Sign in with Github"}>
              <a onClick={() => {signIn("github", {callbackUrl: "/"})}}>
                  <Avatar key={"blank-logo"} size={45} src={"https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"}></Avatar>
              </a>
          </Tooltip>
      ]}>
      </PageHeader>
  )
}

export default HeaderMain