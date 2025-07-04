// import { Button, DatePicker, Form, Input, Select } from 'antd';
// import FormItem from 'antd/es/form/FormItem';

function Login(){
  return(
    <div>
      <form>
        <div>
          <label>Email</label>
          <input type="email" name="email" placeholder="Enter your email" required />
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