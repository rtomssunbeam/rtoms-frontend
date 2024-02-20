// OtpVerification.js
import React from 'react';
import { Form, Input, Button, message } from 'antd';
import { useHistory } from 'react-router-dom';
import Signin from './Signin';

const OtpVerification = () => {
  const history = useHistory();

  const onFinish = (values) => {
    // Implement your OTP verification logic here
    const { otp } = values;

    // For example, check if the entered OTP is '1234'
    if (otp === '1234') {
      message.success('OTP verified successfully!');
      // Redirect to the login page upon successful OTP verification
      history.push('/Signin');
    } else {
      message.error('Incorrect OTP. Please try again.');
      // Optionally, you can keep the user on the same page for another attempt
      // history.push('/otp-verification');
    }
  };

  return (
    <Form
      onFinish={onFinish}
      style={{
        maxWidth: 600,
      }}
    >
      <Form.Item
        name="otp"
        label="Enter OTP"
        rules={[
          {
            required: true,
            message: 'Please input the OTP sent to your email!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Verify OTP
        </Button>
      </Form.Item>
    </Form>
  );
};

export default OtpVerification;
