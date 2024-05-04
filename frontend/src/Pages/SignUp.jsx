import React, { useState, useEffect } from 'react';
import { Form, Input, Button ,Row, Col,} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import axios from 'axios';







const SignUpPage = () => {
  

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    AOS.init();
    document.body.style.backgroundImage = `url('https://res.cloudinary.com/dljyf8xev/image/upload/v1714675374/background_images/4413893_93034_yfle8m.jpg')`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundAttachment = 'fixed';
  }, []);

  function handleNameChange(event) {
    setUsername(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }
  
  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function resetInputField() {
    setUsername('');
    setEmail('');
    setPassword('');
  }

  

  function registerUser(e){

    //e.preventDefault();

    const newUser ={
      username,
      email,
      password
    }

    axios.post("https://nasa-api-yj1a.onrender.com/auth/registerUser",newUser).then(()=>{
      alert("new user added success!...")
      window.location.href='/login';
      console.log(newUser)
    }).catch((err)=>{
      alert(err)
    })
    //resetInputField();
  }

  return (
    <>
    
    <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
      <Col xs={22} sm={16} md={12} lg={8}>
        <Form
          name="SignUpForm"
          initialValues={{ remember: true }}
          onFinish={registerUser}
          style={{ maxWidth: 600, margin: 'auto', borderRadius: 4, padding: 40, boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.9)' }}
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <h1>Sign Up</h1>
          <img src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg" alt="Login"
            style={{ width: '100px', marginBottom: 20, borderRadius: "50%" }} />

          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input prefix={<UserOutlined />} value={username} onChange={handleNameChange} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              { required: true, message: 'Please input your email!' },
              { type: 'email', message: 'Please enter a valid email address!' },
            ]}
          >
            <Input prefix={<UserOutlined />} value={email} onChange={handleEmailChange} placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input
              prefix={<LockOutlined />}
              type="password"
              value={password} onChange={handlePasswordChange}
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item
            name="re-password"
            rules={[
              { required: true, message: 'Please Re-input your password!' },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('The two passwords do not match!'));
                },
              }),
            ]}
          >
            <Input
              prefix={<LockOutlined />}
              type="password"
              placeholder="Re-Password"
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: '100%', backgroundColor: "#08285c", boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)' }}>
              Sign Up
            </Button>
          </Form.Item>
          <p>Already have an account? <Link to="/login" style={{ color: "white" }}>Sign In</Link></p>
        </Form>
        </Col>
    </Row>
    
    </>
  );
};

export default SignUpPage;
