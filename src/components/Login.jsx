// import { Button, DatePicker, Form, Input, Select } from 'antd';
// import FormItem from 'antd/es/form/FormItem';
import { Button, Input } from 'antd';
import {useRef} from 'react';
import {useForm} from 'react-hook-form';
function Login(){

  const user = {
    login: "",
    password: ""
  }

  
  
  
  // // const passRef = useRef();
  
  const OnSubmit = (user) => {
      //console.log(`Login data ${}`);
      //e.preventDefault();
      //user.password = passRef.current.value;
      
      console.log(`User login:`, user);
    }
    
    // const emailChange = (e) => {
      //   user.login = e.target.value;
      //   console.log(`Email changed to: ${e.target.value}`);
      // }
      
      const {register, handleSubmit, formState:{errors},}=useForm();

  return(
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'top', justifyContent: 'center', height: '100vh', gap: '20px'}}>
      <form onSubmit={handleSubmit(OnSubmit)}>
        <div>
          <label>Email</label>
          <input {...register("email")} type="email" name="email" placeholder="Enter your email" required />
        </div>

        <div style={{margin: '10px'}}>
          <label>Password</label>
          <input {...register("password") }type="password" name="password" placeholder="Enter password" required />
        </div>

        <div>
          <label>Bonus</label>
          <input {...register('bonus')} type="number" name='bonus'/>
        </div>

        <div>
          <button type="submit">Login</button>
        </div>

      </form>
    </div>
  )
}

export default Login;

// const user = {
//     login:"",
//     password:""
// }

// const onFinish = values => { 
//   console.log('Success:', values.username);
// };
// const onFinishFailed = errorInfo => {
//   console.log('Failed:', errorInfo);
// };



// const emailOnChange = (e) => {
//     user.login = e.target.value;
// }

// const Login = () => (

//     //let password = useRef();

//   <Form
//     name="basic"
//     labelCol={{ span: 8 }}
//     wrapperCol={{ span: 16 }}
//     style={{ maxWidth: 600 }}
//     initialValues={{ remember: true }}
//     onFinish={onFinish}
//     onFinishFailed={onFinishFailed}
//     autoComplete="off"
//   >
//     <Form.Item
//       label="Username"
//       name="username"
//       rules={[{ required: true, message: 'Please input your username!' }]}
//     >
//       <Input onChange={emailOnChange}/>
//     </Form.Item>

//     <Form.Item
//       label="Password"
//       name="password"
//       rules={[{ required: true, message: 'Please input your password!' }]}
//     >
//       <Input.Password />
//     </Form.Item>

//     <FormItem>
//         <DatePicker/>
//     </FormItem>

//      <Form.Item label="Select">
//         <Select>
//           <Select.Option value="demo">Demo</Select.Option>
//             <Select.Option value="test">Test</Select.Option>
//             <Select.Option value="example">Example</Select.Option>
            
//         </Select>
//       </Form.Item>


//     <Form.Item label={null}>
//       <Button type="primary" htmlType="submit" onClick={() => console.log('Button clicked')}>
//         Submit
//       </Button>
//     </Form.Item>
//   </Form>
// );
// export default Login;