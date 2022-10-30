import { Button, Checkbox, Form, Input,Divider } from 'antd';
import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import {login } from '../rtk/actions/index';

const Login = _=>{

 const state =useSelector(state =>state.login)
 const dispatch =useDispatch(); 
  //  console.log("Login state is :",state);
    const onFinish = (values) => {
      // console.log("Login is ",login)
      dispatch(login(values));

        // console.log('Login form values is:', values);
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
     

return (<>

  <Form   
  className="LoginPage"  id="login" 
      name="basic"
      labelCol={{
        span: 24,
      }}
      wrapperCol={{
        span: 24,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
   <Divider> <h1>Login page </h1> </Divider>

      <Form.Item
        label="Email"
        name="Email"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item  
        name="remember"
        valuePropName="checked"
       
      >
      <div className="remCreate">
        <Checkbox className="rememberMe" >Remember me</Checkbox>
        <a href="#signup">Create Account</a>
        </div>
     
      </Form.Item>

      <Form.Item
       
      >
        <Button type="primary" 
         disabled={state.loading}
         style={{width:"100%"}}  htmlType="submit">
          {state.loading?"Loading":"SUBMIT"} 
        </Button>
      </Form.Item>
     </Form>



    

    


</>)

}


export default  Login;