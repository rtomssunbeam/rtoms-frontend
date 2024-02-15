import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Checkbox, Form, Input } from 'antd';
import styled from 'styled-components';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const StyledBox = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
`;

const StyledForm = styled(Form)`
  label {
    font-weight: bold;
  }

  .ant-btn-primary {
    margin-right: 8px;
  }

  .ant-form-item-control-input-content {
    display: flex;
    align-items: center;
  }
`;

const StyledLink = styled(Link)`
  margin-left: 8px;
`;

const Signin = () => {
    const handleSuccess = (values) => {
        console.log('Success:', values);
        toast.success('Login successful');
    };

    const handleFailure = (errorInfo) => {
        console.log('Failed:', errorInfo);
        toast.error('Login failed');
    };

    return (
        <StyledBox>
            <StyledForm
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={handleSuccess}
                onFinishFailed={handleFailure}
                autoComplete="off"
            >
                {/* Form fields go here */}

                <Form.Item
                    label="Username"
                    name="username"
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
                    label="Password"
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
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>

                <Form.Item>
                    Don't have an account?
                    <StyledLink to="/Signup">SignUp</StyledLink>
                </Form.Item>
            </StyledForm>

            {/* Toast container for displaying messages */}
            <ToastContainer />
        </StyledBox>
    );
};

export default Signin;




// import React from 'react';
// import { Link } from "react-router-dom";
// import { Button, Checkbox, Form, Input } from 'antd';

// const onFinish = (values) => {
//     console.log('Success:', values);
// };

// const onFinishFailed = (errorInfo) => {
//     console.log('Failed:', errorInfo);
// };

// const Signin = () => (
//     <div className='box'>
//         <Form
//             name="basic"
//             labelCol={{
//                 span: 8,
//             }}
//             wrapperCol={{
//                 span: 16,
//             }}
//             style={{
//                 maxWidth: 600,
//             }}
//             initialValues={{
//                 remember: true,
//             }}
//             onFinish={onFinish}
//             onFinishFailed={onFinishFailed}
//             autoComplete="off"
//         >
//             <Form.Item
//                 label="Username"
//                 name="username"
//                 rules={[
//                     {
//                         required: true,
//                         message: 'Please input your username!',
//                     },
//                 ]}
//             >
//                 <Input />
//             </Form.Item>

//             <Form.Item
//                 label="Password"
//                 name="password"
//                 rules={[
//                     {
//                         required: true,
//                         message: 'Please input your password!',
//                     },
//                 ]}
//             >
//                 <Input.Password />
//             </Form.Item>

//             <Form.Item
//                 name="remember"
//                 valuePropName="checked"
//                 wrapperCol={{
//                     offset: 8,
//                     span: 16,
//                 }}
//             >
//                 <Checkbox>Remember me</Checkbox>
//             </Form.Item>

//             <Form.Item
//                 wrapperCol={{
//                     offset: 8,
//                     span: 16,
//                 }}
//             >
//                 <Button type="primary mx-2" htmlType="submit">
//                     Submit
//                 </Button>
//             </Form.Item>

//             <Form.Item>
//                 Don't have an account? Create new account
//                 <Link to="/Signup" style={{ marginLeft: 8 }}>
//                     Signup
//                 </Link>
//             </Form.Item>

//         </Form>
//     </div>
// );
// export default Signin;




// Styled Components

// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Button, Checkbox, Form, Input } from 'antd';
// import styled from 'styled-components';

// const StyledBox = styled.div`
//   max-width: 600px;
//   margin: 0 auto;
//   padding: 20px;
//   background-color: #f5f5f5;
//   border: 1px solid #d9d9d9;
//   border-radius: 5px;
// `;

// const StyledForm = styled(Form)`
//   label {
//     font-weight: bold;
//   }

//   .ant-btn-primary {
//     margin-right: 8px;
//   }

//   .ant-form-item-control-input-content {
//     display: flex;
//     align-items: center;
//   }
// `;

// const StyledLink = styled(Link)`
//   margin-left: 8px;
// `;

// const Signin = () => (
//   <StyledBox>
//     <StyledForm
//       name="basic"
//       labelCol={{
//         span: 8,
//       }}
//       wrapperCol={{
//         span: 16,
//       }}
//       initialValues={{
//         remember: true,
//       }}
//       onFinish={(values) => {
//         console.log('Success:', values);
//       }}
//       onFinishFailed={(errorInfo) => {
//         console.log('Failed:', errorInfo);
//       }}
//       autoComplete="off"
//     >
//       <Form.Item
//         label="Username"
//         name="username"
//         rules={[
//           {
//             required: true,
//             message: 'Please input your username!',
//           },
//         ]}
//       >
//         <Input />
//       </Form.Item>

//       <Form.Item
//         label="Password"
//         name="password"
//         rules={[
//           {
//             required: true,
//             message: 'Please input your password!',
//           },
//         ]}
//       >
//         <Input.Password />
//       </Form.Item>

//       <Form.Item
//         name="remember"
//         valuePropName="checked"
//         wrapperCol={{
//           offset: 8,
//           span: 16,
//         }}
//       >
//         <Checkbox>Remember me</Checkbox>
//       </Form.Item>

//       <Form.Item
//         wrapperCol={{
//           offset: 8,
//           span: 16,
//         }}
//       >
//         <Button type="primary" htmlType="submit">
//           Submit
//         </Button>
//       </Form.Item>

//       <Form.Item>
//         Don't have an account? Create new account
//         <StyledLink to="/Signup">Signup</StyledLink>
//       </Form.Item>
//     </StyledForm>
//   </StyledBox>
// );

// export default Signin;
