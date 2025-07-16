import { Link} from 'react-router-dom';
// import {Menu } from 'antd';
import {
  QuestionCircleOutlined,
  LoginOutlined,
  LockOutlined,
  UserOutlined,
  NumberOutlined,
} from '@ant-design/icons';
import {Layout,Menu } from 'antd';

import { useSelector } from 'react-redux';
// import { CounterContext } from '../store/reducers/counter.reducer';
import { selectCount } from '../store/reducers/counter.reducer';
const { Header, Sider, Content } = Layout;
function SideBar(){
  const count = useSelector(selectCount);
  // const {count} = useContext(CounterContext);
    return (
        <Sider trigger={null} collapsible>
        <div className="demo-logo-vertical" />
        <div className='logo'>
          <p style={{color:"white"}}>Counter: {count}</p>
        </div>


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
                <LockOutlined />
              </Link>,
              label: 'Privacy',
            },
            {
              key: '3',
              icon:
              <Link to={"/users"}>
                  <UserOutlined />
              </Link> ,
              label: 'Users',
            },
            {
              key: '4',
              icon:
              <Link to={"/login"}>
                  <LoginOutlined />
              </Link> ,
              label: 'Login',
            },
            {
              key: '5',
              icon:
              <Link to={"/counter"}>
                  <NumberOutlined />
              </Link> ,
              label: 'Counter',
            },
          ]}
        />
      </Sider>
    )
}

export default SideBar;