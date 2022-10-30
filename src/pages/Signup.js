import {
    Button,
    Form,
    Input,
    Divider
  } from 'antd';
  
import { useSelector,useDispatch } from 'react-redux';
import {user } from '../rtk/actions/index';
  
 const Signup = _=>{

  const state =useSelector(state =>state.login)
  const dispatch =useDispatch(); 
   

  const [form] = Form.useForm();
    const onFinish = (values) => {
      dispatch(user(values));
    };
    
   const onFinishFailed = (values) =>{
    console.log('Received values of form: ', values);
    } 


    return (<>
      <Form 
       className="SignUpPage" id="signup"
        form={form}
        name="register"
        labelCol={{span: 24,}}
        wrapperCol={{span: 24,}}
       
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        initialValues={{
        }}
        scrollToFirstError
      >
       <Divider>Create Account </Divider>

        <Form.Item
          name="FirstName"
          label="firstName"
           rules={[
            { 
              type: 'text',
              message: 'The input is not valid !',
            },
            {
              required: true,
              message: 'Please input your first Name!',
            },
          ]}
        >
          <Input maxLength={20} showCount placeholder="Enter first Name" />
        </Form.Item>

        <Form.Item
          name="LastName"
          label="LastName"
           rules={[
            {
              type: 'text',
              message: 'The input is not valid !',
            },
            {
              required: true,
              message: 'Please input your last Name!',
            },
          ]}
        >
          <Input maxLength={20} showCount placeholder="Enter last Name" />
        </Form.Item>

        <Form.Item
        name="Email"
        label="Email"
          rules={[
            {
              required: true,
              message: 'Please input your Email !',
            },
          ]}
        >
         <Input maxLength={50} showCount placeholder="Enter your Email" />
         </Form.Item>
       
       
         <Form.Item
        name="password"
        label="password"
          rules={[
            {
              required: true,
              message: 'Please input Password !',
            },
          ]}
        >
         <Input.Password maxLength={50} showCount placeholder="Enter your Email" />
         </Form.Item>
       
       
         <Form.Item> 
          <Button type="primary" style={{width:"100%"}} htmlType="submit"className="btn" >
           createAccount
           </Button>
        </Form.Item>
      </Form>


    </>)
    
    }
  export default Signup;