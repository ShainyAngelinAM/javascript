
import React, { useEffect, useState } from 'react';
import { Layout, Menu, Button, Table, Typography, Card, Avatar, Dropdown } from 'antd';
import { useNavigate, Routes, Route } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';
import axios from 'axios';

const { Header, Content } = Layout;
const { Title } = Typography;

const Dashboard = ({  setPendingRequests }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPendingRequests = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/leaves/pending');
        console.log('Fetched pending requests:', response.data);
        setPendingRequests(response.data); 
      } catch (error) {
        console.error('Error fetching pending requests:', error);
      }
    };

    fetchPendingRequests();
  }, [setPendingRequests]);

  const handlePendingRequests = () => {
    navigate("/pending-requests");
  };

  const handleEmployeeDetails = () => {
    navigate("/employee-details");
  };

  const handleLeaveHistory = () => {
    navigate("/leave-history");
  };

  const handleProfileClick = () => {
    navigate("/profilemanager");
  };

  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/");
  };

  const profileMenu = (
    <Menu>
      <Menu.Item key="profile" onClick={handleProfileClick}>
        View Profile
      </Menu.Item>
      <Menu.Item key="logout" onClick={handleLogout}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ background: '#001529', color: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Title level={2} style={{ color: '#fff', margin: 0 }}>Manager Dashboard</Title>
        <Dropdown overlay={profileMenu} trigger={['click']}>
          <Avatar style={{ cursor: 'pointer' }} icon={<UserOutlined />} />
        </Dropdown>
      </Header>
      <Content style={{ padding: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Menu
            style={{ width: 256 }}
            mode="inline"
            defaultSelectedKeys={['1']}
            theme="dark"
          >
            <Menu.Item key="1" onClick={handleEmployeeDetails}>
              Employee Details
            </Menu.Item>
            <Menu.Item key="2" onClick={handlePendingRequests}>
              Pending Requests
            </Menu.Item>
            <Menu.Item key="3" onClick={handleLeaveHistory}>
              Leave History
            </Menu.Item>
          </Menu>

          <div style={{ flex: 1, marginLeft: '20px' }}>
            <Card title="Welcome to the Manager Dashboard" style={{ width: '100%' }}>
              <Title level={4}>Manage your team's leave requests efficiently</Title>
              <p>
                Use the menu on the left to navigate through the various sections.
                You can review pending leave requests, manage leave balances, and
                check the leave history.
              </p>
              <Button type="primary" onClick={handlePendingRequests}>
                View Pending Requests
              </Button>
            </Card>
          </div>
        </div>
      </Content>
    </Layout>
  );
};

const ManagerDashboard = ({ pendingRequests }) => {
  console.log('Pending Requests in ManagerDashboard:', pendingRequests); 
  const columns = [
    {
      title: 'Username',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: 'Leave Type',
      dataIndex: 'leaveType',
      key: 'leaveType',
    },
    {
      title: 'Start Date',
      dataIndex: 'startDate',
      key: 'startDate',
    },
    {
      title: 'End Date',
      dataIndex: 'endDate',
      key: 'endDate',
    },
    {
      title: 'Reason',
      dataIndex: 'reason',
      key: 'reason',
    },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <Title level={2}>Pending Leave Requests</Title>
      {pendingRequests.length > 0 ? (
            <Table dataSource={pendingRequests} columns={columns} rowKey="id" />
        ) : (
            <p>No data found.</p>
        )}
    </div>
  );
};

// App component to include routing
const App = () => {
  const [pendingRequests, setPendingRequests] = useState([]);

  return (
    <Routes>
       <Route path="/" element={<Dashboard setPendingRequests={setPendingRequests} />} />
      <Route path="/pending-requests" element={<ManagerDashboard pendingRequests={pendingRequests} />} />
    </Routes>
  );
};

export default App;

