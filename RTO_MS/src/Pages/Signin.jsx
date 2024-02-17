import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button, Checkbox, Form, Input } from 'antd';
import styled from 'styled-components';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

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
    const url = "http://192.168.0.115:8080/user/signIn";
    const history = useHistory();

    const [credentials, setCredentials] = useState({
        username: "",
        password: ""
    });

    const handleSuccess = (values) => {
        console.log('Success:', values);
        toast.success('Login successful');
    };

    const handleFailure = (errorInfo) => {
        console.log('Failed:', errorInfo);
        toast.error('Login failed');
    };

    const handleFormSubmit = async () => {
        try {
            // Make a POST request using Axios
            const response = await axios.post(url, credentials);

            // Handle success
            handleSuccess(response.data);

            // Assuming your response contains a login token and you want to redirect
            const tokenReceived = response.data.loginToken;
            window.sessionStorage.setItem("loginToken", tokenReceived);
            history.push("/profile");
        } catch (error) {
            // Handle error
            handleFailure(error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
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
                onFinish={handleFormSubmit}
                onFinishFailed={handleFailure}
                autoComplete="off"
            >
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
                    <Input onChange={handleChange} />
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
                    <Input.Password onChange={handleChange} />
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

            <ToastContainer />
        </StyledBox>
    );
};

export default Signin;






// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Button, Checkbox, Form, Input } from 'antd';
// import styled from 'styled-components';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import axios from 'axios';

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

// const Signin = () => {

//     const url = "http://192.168.0.115:8080/user/signIn"

//     const [credentials, setCredentials] = useState({
//         username: "",
//         password: ""
//     })

//     const OnTextChanged = (args) => {
//         var copyOfCredentials = { ...credentials };
//         copyOfCredentials[args.target.name] = args.target.value;
//         setCredentials(copyOfCredentials);
//     }

//     const handleSuccess = (values) => {
//         console.log('Success:', values);
//         toast.success('Login successful');
//     };

//     const handleFailure = (errorInfo) => {
//         console.log('Failed:', errorInfo);
//         toast.error('Login failed');
//     };

//     axios.post(url, credentials).then((response) => {
//         var replyReceived = response.data;
//         if (replyReceived.message === "success") {
//             var tokenReceived = replyReceived.loginToken;
//             window.sessionStorage.setItem("loginToken", tokenReceived);
//             history.push("/profile");
//         }
//         else {
//             setMsg("Credentials are invalid!");
//             setCredentials({
//                 username: "",
//                 password: ""
//             })
//         }
//     })

//     const handleFormSubmit = async (values) => {
//         try {
//             // Make a POST request using Axios
//             const response = await axios.post(url, values);

//             // Handle success
//             handleSuccess(response.data);
//         } catch (error) {
//             // Handle error
//             handleFailure(error);
//         }
//     };

//     return (
//         <StyledBox>
//             <StyledForm
//                 name="basic"
//                 labelCol={{
//                     span: 8,
//                 }}
//                 wrapperCol={{
//                     span: 16,
//                 }}
//                 initialValues={{
//                     remember: true,
//                 }}
//                 onFinish={handleSuccess}
//                 onFinishFailed={handleFailure}
//                 autoComplete="off"
//             >
//                 {/* Form fields go here */}

//                 <Form.Item
//                     label="Username"
//                     name="username"
//                     rules={[
//                         {
//                             required: true,
//                             message: 'Please input your username!',
//                         },
//                     ]}
//                 >
//                     <Input />
//                 </Form.Item>

//                 <Form.Item
//                     label="Password"
//                     name="password"
//                     rules={[
//                         {
//                             required: true,
//                             message: 'Please input your password!',
//                         },
//                     ]}
//                 >
//                     <Input.Password />
//                 </Form.Item>

//                 <Form.Item
//                     name="remember"
//                     valuePropName="checked"
//                     wrapperCol={{
//                         offset: 8,
//                         span: 16,
//                     }}
//                 >
//                     <Checkbox>Remember me</Checkbox>
//                 </Form.Item>

//                 <Form.Item
//                     wrapperCol={{
//                         offset: 8,
//                         span: 16,
//                     }}
//                 >
//                     <Button type="primary" htmlType="submit">
//                         Submit
//                     </Button>
//                 </Form.Item>

//                 <Form.Item>
//                     Don't have an account?
//                     <StyledLink to="/Signup">SignUp</StyledLink>
//                 </Form.Item>
//             </StyledForm>

//             {/* Toast container for displaying messages */}
//             <ToastContainer />
//         </StyledBox>
//     );
// };

// export default Signin;



// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Button, Checkbox, Form, Input } from 'antd';
// import styled from 'styled-components';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

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

// const Signin = () => {
//     const handleSuccess = (values) => {
//         console.log('Success:', values);
//         toast.success('Login successful');
//     };

//     const handleFailure = (errorInfo) => {
//         console.log('Failed:', errorInfo);
//         toast.error('Login failed');
//     };

//     return (
//         <StyledBox>
//             <StyledForm
//                 name="basic"
//                 labelCol={{
//                     span: 8,
//                 }}
//                 wrapperCol={{
//                     span: 16,
//                 }}
//                 initialValues={{
//                     remember: true,
//                 }}
//                 onFinish={handleSuccess}
//                 onFinishFailed={handleFailure}
//                 autoComplete="off"
//             >
//                 {/* Form fields go here */}

//                 <Form.Item
//                     label="Username"
//                     name="username"
//                     rules={[
//                         {
//                             required: true,
//                             message: 'Please input your username!',
//                         },
//                     ]}
//                 >
//                     <Input />
//                 </Form.Item>

//                 <Form.Item
//                     label="Password"
//                     name="password"
//                     rules={[
//                         {
//                             required: true,
//                             message: 'Please input your password!',
//                         },
//                     ]}
//                 >
//                     <Input.Password />
//                 </Form.Item>

//                 <Form.Item
//                     name="remember"
//                     valuePropName="checked"
//                     wrapperCol={{
//                         offset: 8,
//                         span: 16,
//                     }}
//                 >
//                     <Checkbox>Remember me</Checkbox>
//                 </Form.Item>

//                 <Form.Item
//                     wrapperCol={{
//                         offset: 8,
//                         span: 16,
//                     }}
//                 >
//                     <Button type="primary" htmlType="submit">
//                         Submit
//                     </Button>
//                 </Form.Item>

//                 <Form.Item>
//                     Don't have an account?
//                     <StyledLink to="/Signup">SignUp</StyledLink>
//                 </Form.Item>
//             </StyledForm>

//             {/* Toast container for displaying messages */}
//             <ToastContainer />
//         </StyledBox>
//     );
// };

// export default Signin;


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
