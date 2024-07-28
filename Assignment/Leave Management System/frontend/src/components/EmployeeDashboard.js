import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout, Typography, Card, Row, Col, Dropdown, Avatar, Menu, Button } from 'antd';
import {
  ScheduleOutlined,
  HistoryOutlined,
  WalletOutlined,
  HomeOutlined,
  UserOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

const Dashboard = () => {
  const navigate = useNavigate();
  const profileMenu = (
    <Menu>
      <Menu.Item key="profile" onClick={() => navigate("/profileemployee")}>
        View Profile
      </Menu.Item>
      <Menu.Item 
  key="logout" 
  onClick={() => { 
    sessionStorage.clear();
    navigate('/'); 
  }}
>
  Logout
</Menu.Item>
    </Menu>
  );

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ background: '#001529', color: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Title level={2} style={{ color: '#fff', margin: '0' }}>Employee Dashboard</Title>
        <Dropdown overlay={profileMenu} trigger={['click']}>
          <Avatar style={{ cursor: 'pointer' }} icon={<UserOutlined />} />
        </Dropdown>
      </Header>
      <Content style={{ padding: '20px', background: '#f0f2f5' }}>
        <Row gutter={16}>
          <Col span={8}>
            <Card 
              title="Leave Request" 
              hoverable 
              onClick={() => navigate("/leave-request")} 
              style={{ cursor: 'pointer' }}
              actions={[<ScheduleOutlined key="request" />]}
            >
              <p>Submit a new leave request.</p>
            </Card>
          </Col>
          <Col span={8}>
            <Card 
              title="Leave Balances" 
              hoverable 
              onClick={() => navigate("/leave-balances")} 
              style={{ cursor: 'pointer' }}
              actions={[<WalletOutlined key="balance" />]}
            >
              <p>Check your available leave balances.</p>
            </Card>
          </Col>
          <Col span={8}>
            <Card 
              title="Leave History" 
              hoverable 
              onClick={() => navigate("/Empleave-history")} 
              style={{ cursor: 'pointer' }}
              actions={[<HistoryOutlined key="history" />]}
            >
              <p>View your past leave requests.</p>
            </Card>
          </Col>
        </Row>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        <Button type="primary" onClick={() => navigate('/')}>
          <HomeOutlined /> Go to Home
        </Button>
      </Footer>
    </Layout>
  );
};

export default Dashboard;
