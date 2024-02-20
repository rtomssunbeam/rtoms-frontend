import React, { useState  } from 'react';
import { useAuth } from '../../../AuthContext'; // Import the useAuth hook

import { Link, useHistory } from 'react-router-dom';
import { Button, Checkbox, Form, Input , Modal} from 'antd';
import styled from 'styled-components';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { jwtDecode } from "jwt-decode"; // Import the named export jwtDecode instead of the default export

import './SignIn.css';

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




const Signin = () => {
    

    const { isLoggedIn, handleLogin } = useAuth();

    const url = "http://192.168.0.115:8080/user/signIn";
    const history = useHistory();

    const [credentials, setCredentials] = useState({
        email: "",
        password: ""
    });

    const [responseMsg, setResponseMsg] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleSuccess = (values) => {
        setResponseMsg(values.msg);
        sessionStorage.setItem('loginToken', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiQURNSU4iLCJuYW1lIjoiSm9obiBEb2UiLCJpYXQiOjE1MTYyMzkwMjJ9.Z5j5FR__97b8pstgUHyHslIKowMDQiw_ahYWCYgEVtc');
        showModal();
        handleLogin();

    };

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
        history.push("/");
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };


    const handleFailure = (errorInfo) => {
        toast.error('Login failed');
    };

    const handleFormSubmit = async () => {
        try {
            const response = await axios.post(url, credentials);
            handleSuccess(response.data);

            // const tokenReceived = response.data.loginToken;
            const tokenReceived = sessionStorage.getItem('loginToken');
            if (tokenReceived) {
                // window.sessionStorage.setItem("loginToken", tokenReceived);
                const decodedToken = jwtDecode(tokenReceived);


                const username = decodedToken.username;
                const role = decodedToken.role;

                console.log("Username:", username);
                console.log("Role:", role);

                if (role === "USER") {
                    history.push("/UserDashboard"); // Redirect to user dashboard route
                } else if (role === "ADMIN") {
                    history.push("/AdminDashboard"); // Redirect to admin dashboard route
                } 
                else if (role === "DEALER") {
                    history.push("/DealerDash"); // Redirect to admin dashboard route
                }
                else {
                    console.error("Unknown role:", role); // Handle unknown roles
                }
                


            }
        } catch (error) {
            handleFailure(error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <div className="StyledBox">
            <Form
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
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username(i.e. email)!',
                        },
                    ]}
                >
                    <Input name='email' onChange={handleChange} />
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
                    <Input.Password name='password' onChange={handleChange} />
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
                    <Link to="/Signup">SignUp</Link>
                </Form.Item>
            </Form>

            <ToastContainer />
            <Modal
                title="Login Success"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <p>{responseMsg}</p>
            </Modal>
        </div>
    );
};

export default Signin;







// import React, { useState } from 'react';
// import { Link, useHistory } from 'react-router-dom';
// import { Button, Checkbox, Form, Input , Modal} from 'antd';
// import styled from 'styled-components';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import axios from 'axios';

// import './SignIn.css';

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
//   const url = "http://127.0.0.1:8080/user/signIn";
//   const history = useHistory();
//   const [loading, setLoading] = useState(false);
  
//     const [credentials, setCredentials] = useState({
//         email: "",
//         password: ""
//     });

//     // const handleSuccess = (values) => {
//     //     console.log('Success:', values);
//     //     toast.success('Login successful');
//     //     // history.push('/');
//     // };

//     const [responseMsg, setResponseMsg] = useState(null);
//     const [isModalVisible, setIsModalVisible] = useState(false);

//     const handleSuccess = (values) => {
//         console.log('Success:', values);
//         // toast.success('Login successful');
//         setResponseMsg(values.msg);
//         showModal();
//     };

//     const showModal = () => {
//         setIsModalVisible(true);
//     };

//     const handleOk = () => {
//         setIsModalVisible(false);
//         // Redirect to home page after closing the modal
//         history.push("/");
//     };

//     const handleCancel = () => {
//         setIsModalVisible(false);
//     };


//     const handleFailure = (errorInfo) => {
//         console.log('Failed:', errorInfo);
//         toast.error('Login failed');
//     };

//       // Make a POST request using Axios
//       const response = await axios.post(url, credentials);

//       // Assuming your response contains a JWT token
//       const tokenReceived = response.data.token;

// <<<<<<< HEAD
//       // Store the token in sessionStorage or another secure storage mechanism
//       window.sessionStorage.setItem("token", tokenReceived);

//       // Handle success
//       handleSuccess();

//       // Redirect to the desired page
//       history.push("/profile");
//     } catch (error) {
//       // Handle error
//       handleFailure(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setCredentials({ ...credentials, [name]: value });
//   };
// =======
//             // Assuming your response contains a login token and you want to redirect
//             const tokenReceived = response.data.loginToken;
//             if (tokenReceived) {
//                 window.sessionStorage.setItem("loginToken", tokenReceived);

//             }
//             // history.push("/");
//         } catch (error) {
//             // Handle error
//             handleFailure(error);
//         }
//     };

//     // const handleChange = (e) => {
//     //     const { name, value } = e.target;
//     //     setCredentials((prevData)=>({...prevData,[name]:value,}));
//     //         // { ...credentials, [name]: value });
//     // };

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setCredentials((prevData) => ({
//             ...prevData,
//             [name]: value,
//         }));
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
//                 onFinish={handleFormSubmit}
//                 onFinishFailed={handleFailure}
//                 autoComplete="off"
//             >
//                 <Form.Item
//                     label="Username"
//                     name="email"
//                     rules={[
//                         {
//                             required: true,
//                             message: 'Please input your username(i.e. email)!',
//                         },
//                     ]}
//                 >
//                     <Input name='email' onChange={handleChange} />
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
//                     <Input.Password name='password' onChange={handleChange} />
//                 </Form.Item>
// >>>>>>> 4b6a8d8ed162e09c5e9bef26c80cb543801bafea

//   return (
//     <StyledBox>
//       <StyledForm
//         name="basic"
//         labelCol={{
//           span: 8,
//         }}
//         wrapperCol={{
//           span: 16,
//         }}
//         initialValues={{
//           remember: true,
//         }}
//         onFinish={handleFormSubmit}
//         onFinishFailed={handleFailure}
//         autoComplete="off"
//       >
//         <Form.Item
//           label="Email"
//           name="email"
//           rules={[
//             {
//               required: true,
//               message: 'Please input your email!',
//             },
//           ]}
//         >
//           <Input onChange={handleChange} />
//         </Form.Item>

//         <Form.Item
//           label="Password"
//           name="password"
//           rules={[
//             {
//               required: true,
//               message: 'Please input your password!',
//             },
//           ]}
//         >
//           <Input.Password onChange={handleChange} />
//         </Form.Item>

//         <Form.Item
//           name="remember"
//           valuePropName="checked"
//           wrapperCol={{
//             offset: 8,
//             span: 16,
//           }}
//         >
//           <Checkbox>Remember me</Checkbox>
//         </Form.Item>

// <<<<<<< HEAD
//         <Form.Item
//           wrapperCol={{
//             offset: 8,
//             span: 16,
//           }}
//         >
//           <Button type="primary" htmlType="submit" loading={loading}>
//             Submit
//           </Button>
//         </Form.Item>

//         <Form.Item>
//           Don't have an account?
//           <StyledLink to="/Signup">SignUp</StyledLink>
//         </Form.Item>
//       </StyledForm>

//       <ToastContainer />
//     </StyledBox>
//   );
// =======
//             <ToastContainer />
//             <Modal
//                 title="Login Success"
//                 visible={isModalVisible}
//                 onOk={handleOk}
//                 onCancel={handleCancel}
//             >
//                 <p>{responseMsg}</p>
//             </Modal>
//         </StyledBox>
//     );
// >>>>>>> 4b6a8d8ed162e09c5e9bef26c80cb543801bafea
// };

// export default Signin;




// // import React, { useState } from 'react';
// // import { Link, useHistory } from 'react-router-dom';
// // import { Button, Checkbox, Form, Input } from 'antd';
// // import styled from 'styled-components';
// // import { toast, ToastContainer } from 'react-toastify';
// // import 'react-toastify/dist/ReactToastify.css';
// // import axios from 'axios';

// // const StyledBox = styled.div`
// //   max-width: 600px;
// //   margin: 0 auto;
// //   padding: 20px;
// //   background-color: #f5f5f5;
// //   border: 1px solid #d9d9d9;
// //   border-radius: 5px;
// // `;

// // const StyledForm = styled(Form)`
// //   label {
// //     font-weight: bold;
// //   }

// //   .ant-btn-primary {
// //     margin-right: 8px;
// //   }

// //   .ant-form-item-control-input-content {
// //     display: flex;
// //     align-items: center;
// //   }
// // `;

// // const StyledLink = styled(Link)`
// //   margin-left: 8px;
// // `;

// // const Signin = () => {
// //     // const url = "http://192.168.0.115:8080/user/signIn";
// //     const url = "http://127.0.0.1:8080/user/signIn"

// //     const history = useHistory();

// //     const [credentials, setCredentials] = useState({
// //         email: "",
// //         password: ""
// //     });

// //     const handleSuccess = (values) => {
// //         console.log('Success:', values);
// //         toast.success('Login successful');
// //     };

// //     const handleFailure = (errorInfo) => {
// //         console.log('Failed:', errorInfo);
// //         toast.error('Login failed');
// //     };

// //     const handleFormSubmit = async () => {
// //         try {
// //             // Make a POST request using Axios
// //             const response = await axios.post(url, credentials);

// //             // Assuming your response contains a JWT token
// //             const tokenReceived = response.data.token;

// //             // Store the token in sessionStorage or another secure storage mechanism
// //             window.sessionStorage.setItem("token", tokenReceived);

// //             // Handle success
// //             handleSuccess();
// //             // handleSuccess(response.data);

// //             // Assuming your response contains a login token and you want to redirect
// //             // const tokenReceived = response.data.loginToken;

// //             // window.sessionStorage.setItem("loginToken", tokenReceived);

// //             history.push("/profile");
// //         } catch (error) {
// //             // Handle error
// //             handleFailure(error);
// //         }
// //     };

// //     const handleChange = (e) => {
// //         const { name, value } = e.target;
// //         setCredentials({ ...credentials, [name]: value });
// //     };

// //     return (
// //         <StyledBox>
// //             <StyledForm
// //                 name="basic"
// //                 labelCol={{
// //                     span: 8,
// //                 }}
// //                 wrapperCol={{
// //                     span: 16,
// //                 }}
// //                 initialValues={{
// //                     remember: true,
// //                 }}
// //                 onFinish={handleFormSubmit}
// //                 onFinishFailed={handleFailure}
// //                 autoComplete="off"
// //             >
// //                 <Form.Item
// //                     label="Email"
// //                     name="email"
// //                     rules={[
// //                         {
// //                             required: true,
// //                             message: 'Please input your email!',
// //                         },
// //                     ]}
// //                 >
// //                     <Input onChange={handleChange} />
// //                 </Form.Item>

// //                 <Form.Item
// //                     label="Password"
// //                     name="password"
// //                     rules={[
// //                         {
// //                             required: true,
// //                             message: 'Please input your password!',
// //                         },
// //                     ]}
// //                 >
// //                     <Input.Password onChange={handleChange} />
// //                 </Form.Item>

// //                 <Form.Item
// //                     name="remember"
// //                     valuePropName="checked"
// //                     wrapperCol={{
// //                         offset: 8,
// //                         span: 16,
// //                     }}
// //                 >
// //                     <Checkbox>Remember me</Checkbox>
// //                 </Form.Item>

// //                 <Form.Item
// //                     wrapperCol={{
// //                         offset: 8,
// //                         span: 16,
// //                     }}
// //                 >
// //                     <Button type="primary" htmlType="submit">
// //                         Submit
// //                     </Button>
// //                 </Form.Item>

// //                 <Form.Item>
// //                     Don't have an account?
// //                     <StyledLink to="/Signup">SignUp</StyledLink>
// //                 </Form.Item>
// //             </StyledForm>

// //             <ToastContainer />
// //         </StyledBox>
// //     );
// // };

// // export default Signin;






// // import React from 'react';
// // import { Link } from 'react-router-dom';
// // import { Button, Checkbox, Form, Input } from 'antd';
// // import styled from 'styled-components';
// // import { toast, ToastContainer } from 'react-toastify';
// // import 'react-toastify/dist/ReactToastify.css';
// // import axios from 'axios';

// // const StyledBox = styled.div`
// //   max-width: 600px;
// //   margin: 0 auto;
// //   padding: 20px;
// //   background-color: #f5f5f5;
// //   border: 1px solid #d9d9d9;
// //   border-radius: 5px;
// // `;

// // const StyledForm = styled(Form)`
// //   label {
// //     font-weight: bold;
// //   }

// //   .ant-btn-primary {
// //     margin-right: 8px;
// //   }

// //   .ant-form-item-control-input-content {
// //     display: flex;
// //     align-items: center;
// //   }
// // `;

// // const StyledLink = styled(Link)`
// //   margin-left: 8px;
// // `;

// // const Signin = () => {

// //     const url = "http://192.168.0.115:8080/user/signIn"

// //     const [credentials, setCredentials] = useState({
// //         username: "",
// //         password: ""
// //     })

// //     const OnTextChanged = (args) => {
// //         var copyOfCredentials = { ...credentials };
// //         copyOfCredentials[args.target.name] = args.target.value;
// //         setCredentials(copyOfCredentials);
// //     }

// //     const handleSuccess = (values) => {
// //         console.log('Success:', values);
// //         toast.success('Login successful');
// //     };

// //     const handleFailure = (errorInfo) => {
// //         console.log('Failed:', errorInfo);
// //         toast.error('Login failed');
// //     };

// //     axios.post(url, credentials).then((response) => {
// //         var replyReceived = response.data;
// //         if (replyReceived.message === "success") {
// //             var tokenReceived = replyReceived.loginToken;
// //             window.sessionStorage.setItem("loginToken", tokenReceived);
// //             history.push("/profile");
// //         }
// //         else {
// //             setMsg("Credentials are invalid!");
// //             setCredentials({
// //                 username: "",
// //                 password: ""
// //             })
// //         }
// //     })

// //     const handleFormSubmit = async (values) => {
// //         try {
// //             // Make a POST request using Axios
// //             const response = await axios.post(url, values);

// //             // Handle success
// //             handleSuccess(response.data);
// //         } catch (error) {
// //             // Handle error
// //             handleFailure(error);
// //         }
// //     };

// //     return (
// //         <StyledBox>
// //             <StyledForm
// //                 name="basic"
// //                 labelCol={{
// //                     span: 8,
// //                 }}
// //                 wrapperCol={{
// //                     span: 16,
// //                 }}
// //                 initialValues={{
// //                     remember: true,
// //                 }}
// //                 onFinish={handleSuccess}
// //                 onFinishFailed={handleFailure}
// //                 autoComplete="off"
// //             >
// //                 {/* Form fields go here */}

// //                 <Form.Item
// //                     label="Username"
// //                     name="username"
// //                     rules={[
// //                         {
// //                             required: true,
// //                             message: 'Please input your username!',
// //                         },
// //                     ]}
// //                 >
// //                     <Input />
// //                 </Form.Item>

// //                 <Form.Item
// //                     label="Password"
// //                     name="password"
// //                     rules={[
// //                         {
// //                             required: true,
// //                             message: 'Please input your password!',
// //                         },
// //                     ]}
// //                 >
// //                     <Input.Password />
// //                 </Form.Item>

// //                 <Form.Item
// //                     name="remember"
// //                     valuePropName="checked"
// //                     wrapperCol={{
// //                         offset: 8,
// //                         span: 16,
// //                     }}
// //                 >
// //                     <Checkbox>Remember me</Checkbox>
// //                 </Form.Item>

// //                 <Form.Item
// //                     wrapperCol={{
// //                         offset: 8,
// //                         span: 16,
// //                     }}
// //                 >
// //                     <Button type="primary" htmlType="submit">
// //                         Submit
// //                     </Button>
// //                 </Form.Item>

// //                 <Form.Item>
// //                     Don't have an account?
// //                     <StyledLink to="/Signup">SignUp</StyledLink>
// //                 </Form.Item>
// //             </StyledForm>

// //             {/* Toast container for displaying messages */}
// //             <ToastContainer />
// //         </StyledBox>
// //     );
// // };

// // export default Signin;



// // import React from 'react';
// // import { Link } from 'react-router-dom';
// // import { Button, Checkbox, Form, Input } from 'antd';
// // import styled from 'styled-components';
// // import { toast, ToastContainer } from 'react-toastify';
// // import 'react-toastify/dist/ReactToastify.css';

// // const StyledBox = styled.div`
// //   max-width: 600px;
// //   margin: 0 auto;
// //   padding: 20px;
// //   background-color: #f5f5f5;
// //   border: 1px solid #d9d9d9;
// //   border-radius: 5px;
// // `;

// // const StyledForm = styled(Form)`
// //   label {
// //     font-weight: bold;
// //   }

// //   .ant-btn-primary {
// //     margin-right: 8px;
// //   }

// //   .ant-form-item-control-input-content {
// //     display: flex;
// //     align-items: center;
// //   }
// // `;

// // const StyledLink = styled(Link)`
// //   margin-left: 8px;
// // `;

// // const Signin = () => {
// //     const handleSuccess = (values) => {
// //         console.log('Success:', values);
// //         toast.success('Login successful');
// //     };

// //     const handleFailure = (errorInfo) => {
// //         console.log('Failed:', errorInfo);
// //         toast.error('Login failed');
// //     };

// //     return (
// //         <StyledBox>
// //             <StyledForm
// //                 name="basic"
// //                 labelCol={{
// //                     span: 8,
// //                 }}
// //                 wrapperCol={{
// //                     span: 16,
// //                 }}
// //                 initialValues={{
// //                     remember: true,
// //                 }}
// //                 onFinish={handleSuccess}
// //                 onFinishFailed={handleFailure}
// //                 autoComplete="off"
// //             >
// //                 {/* Form fields go here */}

// //                 <Form.Item
// //                     label="Username"
// //                     name="username"
// //                     rules={[
// //                         {
// //                             required: true,
// //                             message: 'Please input your username!',
// //                         },
// //                     ]}
// //                 >
// //                     <Input />
// //                 </Form.Item>

// //                 <Form.Item
// //                     label="Password"
// //                     name="password"
// //                     rules={[
// //                         {
// //                             required: true,
// //                             message: 'Please input your password!',
// //                         },
// //                     ]}
// //                 >
// //                     <Input.Password />
// //                 </Form.Item>

// //                 <Form.Item
// //                     name="remember"
// //                     valuePropName="checked"
// //                     wrapperCol={{
// //                         offset: 8,
// //                         span: 16,
// //                     }}
// //                 >
// //                     <Checkbox>Remember me</Checkbox>
// //                 </Form.Item>

// //                 <Form.Item
// //                     wrapperCol={{
// //                         offset: 8,
// //                         span: 16,
// //                     }}
// //                 >
// //                     <Button type="primary" htmlType="submit">
// //                         Submit
// //                     </Button>
// //                 </Form.Item>

// //                 <Form.Item>
// //                     Don't have an account?
// //                     <StyledLink to="/Signup">SignUp</StyledLink>
// //                 </Form.Item>
// //             </StyledForm>

// //             {/* Toast container for displaying messages */}
// //             <ToastContainer />
// //         </StyledBox>
// //     );
// // };

// // export default Signin;


// // import React from 'react';
// // import { Link } from "react-router-dom";
// // import { Button, Checkbox, Form, Input } from 'antd';

// // const onFinish = (values) => {
// //     console.log('Success:', values);
// // };

// // const onFinishFailed = (errorInfo) => {
// //     console.log('Failed:', errorInfo);
// // };

// // const Signin = () => (
// //     <div className='box'>
// //         <Form
// //             name="basic"
// //             labelCol={{
// //                 span: 8,
// //             }}
// //             wrapperCol={{
// //                 span: 16,
// //             }}
// //             style={{
// //                 maxWidth: 600,
// //             }}
// //             initialValues={{
// //                 remember: true,
// //             }}
// //             onFinish={onFinish}
// //             onFinishFailed={onFinishFailed}
// //             autoComplete="off"
// //         >
// //             <Form.Item
// //                 label="Username"
// //                 name="username"
// //                 rules={[
// //                     {
// //                         required: true,
// //                         message: 'Please input your username!',
// //                     },
// //                 ]}
// //             >
// //                 <Input />
// //             </Form.Item>

// //             <Form.Item
// //                 label="Password"
// //                 name="password"
// //                 rules={[
// //                     {
// //                         required: true,
// //                         message: 'Please input your password!',
// //                     },
// //                 ]}
// //             >
// //                 <Input.Password />
// //             </Form.Item>

// //             <Form.Item
// //                 name="remember"
// //                 valuePropName="checked"
// //                 wrapperCol={{
// //                     offset: 8,
// //                     span: 16,
// //                 }}
// //             >
// //                 <Checkbox>Remember me</Checkbox>
// //             </Form.Item>

// //             <Form.Item
// //                 wrapperCol={{
// //                     offset: 8,
// //                     span: 16,
// //                 }}
// //             >
// //                 <Button type="primary mx-2" htmlType="submit">
// //                     Submit
// //                 </Button>
// //             </Form.Item>

// //             <Form.Item>
// //                 Don't have an account? Create new account
// //                 <Link to="/Signup" style={{ marginLeft: 8 }}>
// //                     Signup
// //                 </Link>
// //             </Form.Item>

// //         </Form>
// //     </div>
// // );
// // export default Signin;




// // Styled Components

// // import React from 'react';
// // import { Link } from 'react-router-dom';
// // import { Button, Checkbox, Form, Input } from 'antd';
// // import styled from 'styled-components';

// // const StyledBox = styled.div`
// //   max-width: 600px;
// //   margin: 0 auto;
// //   padding: 20px;
// //   background-color: #f5f5f5;
// //   border: 1px solid #d9d9d9;
// //   border-radius: 5px;
// // `;

// // const StyledForm = styled(Form)`
// //   label {
// //     font-weight: bold;
// //   }

// //   .ant-btn-primary {
// //     margin-right: 8px;
// //   }

// //   .ant-form-item-control-input-content {
// //     display: flex;
// //     align-items: center;
// //   }
// // `;

// // const StyledLink = styled(Link)`
// //   margin-left: 8px;
// // `;

// // const Signin = () => (
// //   <StyledBox>
// //     <StyledForm
// //       name="basic"
// //       labelCol={{
// //         span: 8,
// //       }}
// //       wrapperCol={{
// //         span: 16,
// //       }}
// //       initialValues={{
// //         remember: true,
// //       }}
// //       onFinish={(values) => {
// //         console.log('Success:', values);
// //       }}
// //       onFinishFailed={(errorInfo) => {
// //         console.log('Failed:', errorInfo);
// //       }}
// //       autoComplete="off"
// //     >
// //       <Form.Item
// //         label="Username"
// //         name="username"
// //         rules={[
// //           {
// //             required: true,
// //             message: 'Please input your username!',
// //           },
// //         ]}
// //       >
// //         <Input />
// //       </Form.Item>

// //       <Form.Item
// //         label="Password"
// //         name="password"
// //         rules={[
// //           {
// //             required: true,
// //             message: 'Please input your password!',
// //           },
// //         ]}
// //       >
// //         <Input.Password />
// //       </Form.Item>

// //       <Form.Item
// //         name="remember"
// //         valuePropName="checked"
// //         wrapperCol={{
// //           offset: 8,
// //           span: 16,
// //         }}
// //       >
// //         <Checkbox>Remember me</Checkbox>
// //       </Form.Item>

// //       <Form.Item
// //         wrapperCol={{
// //           offset: 8,
// //           span: 16,
// //         }}
// //       >
// //         <Button type="primary" htmlType="submit">
// //           Submit
// //         </Button>
// //       </Form.Item>

// //       <Form.Item>
// //         Don't have an account? Create new account
// //         <StyledLink to="/Signup">Signup</StyledLink>
// //       </Form.Item>
// //     </StyledForm>
// //   </StyledBox>
// // );

// // export default Signin;
