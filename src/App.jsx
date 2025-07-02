import './App.css'
import About from './components/About'
//import Menu from './components/Menu'
import Privacy from './components/Privacy'
import Home from './components/Home'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import {
  QuestionCircleOutlined,
  LoginOutlined,
  LockOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import { useState } from 'react'
import Login from './components/Login'
const { Header, Sider, Content } = Layout;


// const contentStyle = {


// }



const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: 
                <Link to={"/about"}>
                  <QuestionCircleOutlined />
                </Link>,
              label: 'About',
            },
            {   
              key: '2',
              icon: 
              <Link to={"/privacy"}>
                <LockOutlined />,
              </Link>,
              label: 'Privacy',
            },
            {
              key: '3',
              icon:
              <Link to={"/login"}>
                  <LoginOutlined />,
              </Link> ,
              label: 'Login',
            },
          ]}
        />
      </Sider>
      <Layout>
  
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: '100vh',
            minWidth: '80vw',
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Routes>
               <Route path="/" element={<Home/>}/>
               <Route path="/about" element={<About/>}/>
               <Route path="/privacy" element={<Privacy/>}/>
               <Route path='/login' element={<Login/>}/>
               <Route path="*" element={<h2>Page not found</h2>}/>
               {/* <About/>
               <Privacy/> */}
            </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};


export default App
