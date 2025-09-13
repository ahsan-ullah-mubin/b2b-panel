"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { Form, Input, Button, Checkbox, Card, Typography, Space } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

export default function LoginPage() {
  const [loading, setLoading] = useState(false);

  const onFinish = (values:any) => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      console.log('Received values of form: ', values);
      setLoading(false);
    }, 1500);
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      backgroundColor: '#f0f2f5',
      padding: '20px'
    }}>
      <Card 
        style={{ 
          width: '100%', 
          maxWidth: 400, 
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
          borderRadius: 8
        }}
        bodyStyle={{ padding: 32 }}
      >
        <div style={{ textAlign: 'center', marginBottom: 30 }}>
          <Title level={2} style={{ color: '#262626', marginBottom: 5 }}>
            AKU Air
          </Title>
          <Title level={4} style={{ marginTop: 0, color: '#595959' }}>
            Sign in
          </Title>
        </div>

        <Form
          name="login"
          onFinish={onFinish}
          autoComplete="off"
          layout="vertical"
          size="large"
        >
          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input 
              prefix={<UserOutlined />} 
              placeholder="Enter your email" 
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password 
              prefix={<LockOutlined />} 
              placeholder="Enter your password" 
            />
          </Form.Item>

          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember Me</Checkbox>
            </Form.Item>
          </Form.Item>

          <Form.Item>
            <Button 
              type="primary" 
              htmlType="submit" 
              style={{ width: '100%' }} 
              loading={loading}
            >
              Sign in
            </Button>
          </Form.Item>
        </Form>

        <div style={{ textAlign: 'center', marginTop: 24 }}>
          <Space direction="vertical">
            <Text type="secondary">
              Don&apos;t have an account? 
            </Text>
            <Button type="link" style={{ padding: 0, height: 'auto' }}>
              Please, Sign up
            </Button>
          </Space>
        </div>
      </Card>
    </div>
  );
}