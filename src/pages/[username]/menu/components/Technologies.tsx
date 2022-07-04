import { Input, Layout, notification, Space, Steps, Switch, Tabs, Typography } from 'antd';
import axios from 'axios';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { updateConstructSignature } from 'typescript';
import Flow from './Flow';

// DEFINE 
const { Header, Content, Footer, Sider } = Layout
const { Text, Title } = Typography
const { Step } = Steps;
const { Search } = Input;
const { TabPane } = Tabs;

// DEFINING PROPS INTERFACE
interface technologiesPropsInterface {
    data: {
        technologies?: String[]
    }
}

// TSX Function to return the technologies part to the menu page
const Technologies: NextPage<technologiesPropsInterface> = (props) => {
    let SITE_USER_DATA = props.data;
    let SITE_USER_TECHNOLOGIES: String[] = [];

    // set SITE_USER_TECHNOLOGIES to the technologies of the user
    SITE_USER_DATA.technologies ?
        SITE_USER_TECHNOLOGIES = SITE_USER_DATA.technologies
        :
        SITE_USER_TECHNOLOGIES.length = 0;

    // DEFINE state of technologies
    const [technologies, setTechnologies] = useState<String[]>(SITE_USER_TECHNOLOGIES);

    // DEFINE STATE OF CONTENT TO BE DISPLAYED (CAN BE NORMAL or VISUALIZED)
    const [content, setContent] = useState<String[] | {}>(getTechnologiesContent(technologies))
    // DEFINE STATE OF REACT 


    // HANDLE ADDING A NEW TECHNOLOGY
    const onAddTechnology = (technology: String) => {
        const message: String = "Technology added"
        const description: String = "Added " + technology + " Technology";

        addTechnology(SITE_USER_DATA, SITE_USER_TECHNOLOGIES, technology).then(() => console.log("Successfully added a new technology!")).catch(() => { console.log("Failure to add new technology!") })
        openNotification(message, description)
        technologies.length > 0 ? setTechnologies((prev: String[]) => [...prev, technology]) : setTechnologies([technology])

        return
    }

    // DEFINE STATE OF SWITCH
    const [switchState, setSwitchState] = useState<boolean>(false);

    // HANDLE SWITCHING BETWEEN NORMAL AND VISUALIZED
    useEffect(() => {
        if (switchState) {
            setContent(getTechnologiesContentVisualized(technologies))
        } else {
            setContent(getTechnologiesContent(technologies))
        }
    }, [switchState, technologies])

    return (

        <>
            <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                <Search
                    onSearch={onAddTechnology}
                    placeholder='Add technology'
                    enterButton="Add Technology"
                    size="large"
                ></Search>
                <Switch checkedChildren="Visual Mode" unCheckedChildren="Visual Mode" onChange={() => setSwitchState((prev: boolean) => !prev)}> </Switch>
                {content}


            </Space>




        </>

    )
}

const getTechnologiesContent = (technologies: String[]) => {
    return (
        <Steps type="navigation" size="small" >
            {technologies && technologies.map((technology: String) => (<Step title={technology}>{technology}</Step>))}
            {!technologies && <Step title="No technologies added yet" />}
        </Steps>
    )
}

const getTechnologiesContentVisualized = (technologies: String[]) => {
    return (
        <div style={{ height: "calc(100vh - 200px)" }}>
            <Flow technologies={technologies} />
        </div>
    )
}

const addTechnology = async (SITE_USER_DATA: {}, SITE_USER_TECHNOLOGIES: String[], technology: String) => {
    // get the username
    const SITE_USER_NAME = SITE_USER_DATA._id

    // set up axios data to add to specific user
    var data = {
        "_id": SITE_USER_NAME,
        "technology": technology
    }
    // set up config for request
    var config = {
        method: "put",
        url: 'http://localhost:3000/api/c/createTechnology',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    }
    // send response
    const response = await axios(config).then(function (response: {}) { console.log("Technology Added.") }).catch(function (error: {}) { console.log("Could not add technology\n" + error) });
    // existingTechnologies plus one just added
    return SITE_USER_TECHNOLOGIES.push(technology)

}

const openNotification = (message: String, description: String) => {
    notification.open({
        message: message,
        description: description,
    });
};




export default Technologies
