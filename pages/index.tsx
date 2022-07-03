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
import HeaderMain from './components/HeaderMain';
import {LoadingOutlined, UserOutlined, SolutionOutlined} from '@ant-design/icons';
import { signIn, signOut, useSession} from 'next-auth/react';
import { Paper } from '@mui/material';

const {Header, Content, Footer} = Layout
const {Text, Title} = Typography
const { Step } = Steps;

const Home: NextPage = () => {
  const { data: session } =  useSession();

  return (
    <>
    <HeaderMain></HeaderMain>
    <Layout >
      <Content>
        <Row style={{ paddingTop:50}}>        
          <Col span={24} align={"middle"}> 
          {session ? 
            <Title style={{fontSize:100}}> <a>Welcome {String(session.login)} to Pro-folio</a> </Title>
            :
            <Title style={{fontSize:100}}> <a>Pro-folio</a> </Title>
          }
          
          </Col>   
        </Row>

        <Row style={{paddingTop:0}}>        
          <Col span={24} align={"middle"}>
          <Text style={{fontSize:45}}> Build your Pro-folio while you learn! </Text>
          </Col>   
        </Row>

        <Row>        
          <Col span={24} align={"middle"}>
              <Text style={{fontSize:25}} type={"secondary"} >   How are you keeping track of everything you are learning?    </Text>
          </Col>   
          
        </Row>

        <Row style={{padding:50}}>        
          <Col span={24} align={"middle"}>
              {session ? 
                <Steps size={"large"} current={4}>
                <Step title={<Text strong>Signup</Text>}  />
                <Step title={<Text strong>Add to your <a onClick={() => {location.assign("/" + String(session.login)); return;}}>Pro-Folio</a></Text>} icon={<LoadingOutlined/>} />
                <Step title={<Text strong>Preview</Text>} icon={<SolutionOutlined />}   />
                <Step title={<Text strong>Share</Text>}  icon={<UserOutlined/>} />
                </Steps>

              :
                <Steps size={"large"} current={4}>
                <Step title={<Text strong>Signup</Text>}  icon={<LoadingOutlined/>}/>
                <Step title={<Text strong>Add to your Pro-Folio</Text>} icon={<SolutionOutlined />} />
                <Step title={<Text strong>Preview</Text>}   />
                <Step title={<Text strong>Share</Text>}  icon={<UserOutlined/>} />
              </Steps>
              }


          </Col>

        </Row>

        <Row style={{padding:50}}>
          <Col span={24} align={"middle"}>
            <Space>
              {session ?
                  <>
                    <Button type="primary" shape="round" size="large" style={{height:"75px", width:"225px", fontSize:"35px"}} onClick={() => {location.assign("/" + String(session.login)); return;}} > My Pro-folio </Button>
                    <Button type="primary" shape="round" size="large" style={{height:"75px", width:"200px", fontSize:"35px"}} onClick={() => location.assign("/sai-k02")}> Example </Button>
                    <Button type="primary" shape="round" size="large" style={{height:"75px", width:"200px", fontSize:"35px"}} onClick={() => signOut()} > Sign Out </Button>

                  </>
              :
                <>
                  <Button type="primary" shape="round" size="large" style={{height:"75px", width:"200px", fontSize:"35px"}} onClick={() => signIn("github", {callbackUrl: "/"})} > Sign In </Button>
                  <Button type="primary" shape="round" size="large" style={{height:"75px", width:"200px", fontSize:"35px"}} onClick={() => location.assign("/sai-k02")}> Example </Button>
                </>
              }
              <>
                <Button type="primary" shape="round" size="large" style={{height:"75px", width:"200px", fontSize:"35px"}} onClick={() => location.assign("/pricing")}> Pricing </Button>
              </>

            </Space>
       
          </Col>   
          
        </Row>

        <Row >
          <Col span={24} align={"middle"}>
              <Space style={{padding:"50"}}>
                <Avatar src="https://github.com/sai-k02.png" size={150}></Avatar>
                <Layout>
                  <Row> <Text strong type="secondary" style={{fontSize:"35px"}}> "I needed a way to keep track and interjoin everything from job experiences, projects, certs, technologies used."</Text> </Row>
                  <Row> 
                    <Col push={14}>
                      <Text strong type="secondary" style={{fontSize:"35px"}}>  - Sai (Creator of Profolio) </Text> 
                    </Col>
                    
                  </Row>
                </Layout>
                
              </Space>
          </Col>

        </Row>

        <Row style={{padding:"50px"}}>
          <Col span={24} align={"middle"}>
            <Paper elevation={1} style={{opacity:"50%"}}>

              <Text type="primary" strong style={{fontSize:"50px", padding:"50px"}}>
                Pro-folio is designed from the ground up to be able to build your portfolio from which ever end you choose. You can start by adding a new job experience and stem together projects, certs, technologies used. On the flip side, you can begin by adding a technology in which you can provide a job, project. </Text>



            </Paper>

            </Col>
        </Row>
        
        <Row style={{padding:"10px"}}>
          <Col span={24} align={"middle"}>
            <Paper elevation={24} style={{width:"1000px",height:"360px", backgroundColor:"gray", opacity:"50%" }}>
              <Space style={{padding:50}}>
                <Text  type="primary" strong style={{fontSize:"30px", padding:"50px"}}>
                  <a style={{color:"black"}}>
                    For example, let's say you got a Docker Certification in which you created a Python Web-App. You probably used Bash, Python, Git, YAML to achieve the end goal.

                  </a>
                </Text>

                    <Avatar src={"https://www.sketchappsources.com/resources/source-image/python-logo.png"} size={100}></Avatar>
                    <Avatar src={"https://d33wubrfki0l68.cloudfront.net/7c8561d6a2795e512d1f3165ed7edd9405419968/ad392/img/symbol/svg/full_colored_light.svg"} size={100}></Avatar>
                    <Avatar src={"https://git-scm.com/images/logos/logomark-orange@2x.png"} size={100}></Avatar>
                    <Avatar src={"https://www.vectorlogo.zone/logos/yaml/yaml-icon.svg"} size={100}></Avatar>


              </Space>


            </Paper>

            
            </Col>
        </Row>

        <Row style={{padding:"50px"}}>

          <Col span={24} align={"middle"}>
            <Space>
              <Card title={<Title>What else?</Title>}>
                <Card.Grid style={{width:"100%", height:"50%"}}>
                  <Button type="primary" shape="round" size="large" style={{height:"75px", width:"200px", fontSize:"35px"}} onClick={() => location.assign("/learn")} > Learn More </Button>

                </Card.Grid>
                <Card.Grid style={{width:"100%"}}>
                  <Button type="primary" shape="round" size="large" style={{height:"75px", width:"200px", fontSize:"35px"}} onClick={() => location.assign("/roadmap")} > Roadmap </Button>
                </Card.Grid>

                <Card.Grid style={{width:"100%"}}>
                  <Button type="primary" shape="round" size="large" style={{height:"75px", width:"200px", fontSize:"35px"}} onClick={() => location.assign("/contact")} > Contact </Button>
                </Card.Grid>
              </Card>


            </Space>
          </Col>

        </Row>


      </Content>
    </Layout>
    
    </>

  )
}

export default Home
