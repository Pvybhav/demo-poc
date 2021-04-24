import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Select, Modal, Input, Button } from 'antd';
import './Header.css';

const styles = {
  main: {
    width: '100%',
    backgroundColor: 'black',
  },
  root: {
    display: 'flex',
    height: '50px',
    width: '90%',
    margin: 'auto',
    backgroundColor: 'black',
    justifyContent: 'space-between',
  },
  title: {
    color: 'white',
    padding: '10px 20px 5px 20px',
  },
  loginLinks: {
    color: 'white',
    padding: '10px 10px 0 10px',
    fontWeight: '500',
    fontSize: '18px',
  },
  routesDropDown: {
    width: '200px',
    display: 'flex',
    alignItems: 'center',
    fontSize: '15px',
  },
};

const Header = () => {
  const [isAuthenticated, setisAuthenticated] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [loginType, setLoginType] = useState('customer');
  const [name, setName] = useState('');
  const [endpoint, setEndpoint] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const customerData = {
      name: 'Rohith',
      endpoint: 'abc',
      password: 'qwerty',
    };
    const employeeData = { name: 'Vinit', endpoint: 'xyz', password: 'qwerty' };

    sessionStorage.setItem('customer', JSON.stringify(customerData));
    sessionStorage.setItem('employee', JSON.stringify(employeeData));
  }, []);

  let history = useHistory();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = (e) => {
    e.preventDefault();
    if (name !== '' && password !== '' && endpoint !== '') {
      const userData = JSON.parse(sessionStorage.getItem(loginType));
      if (
        userData.name === name &&
        userData.endpoint === endpoint &&
        userData.password === password
      ) {
        setIsModalVisible(false);
        setisAuthenticated(true);
      } else {
        setError('Invalid details. Please re-check.');
      }
    } else {
      setError('Please fill all the values.');
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const { Option } = Select;

  const handleLogout = () => {
    history.push('/');
    setisAuthenticated(false);
  };

  return (
    <div style={styles.main}>
      <div style={styles.root}>
        <Link to='/'>
          <h2 style={styles.title}>UNIFUND</h2>
        </Link>
        <div style={{ display: 'flex' }}>
          <Select
            onChange={(e) => history.push(e)}
            showSearch={false}
            style={styles.routesDropDown}
            optionFilterProp='children'
            defaultValue='/'
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value='/'>Products and Services</Option>
            <Option value='/about'>About Us</Option>
            <Option value='/contact'>Contact Us</Option>
            {isAuthenticated && <Option value='/products'>Products</Option>}
          </Select>
          {isAuthenticated ? (
            <>
              <h3
                style={{ ...styles.loginLinks, cursor: 'pointer' }}
                onClick={handleLogout}
              >
                Logout
              </h3>
            </>
          ) : (
            <>
              <h3
                style={{ ...styles.loginLinks, cursor: 'pointer' }}
                onClick={showModal}
              >
                Login
              </h3>
            </>
          )}
        </div>
      </div>
      <Modal
        visible={isModalVisible}
        closable={false}
        maskClosable={false}
        footer={null}
      >
        <div>
          <div>
            <Button
              type={`${loginType === 'customer' ? 'primary' : 'default'}`}
              style={{ width: '50%' }}
              onClick={() => setLoginType('customer')}
            >
              Customers
            </Button>
            <Button
              type={`${loginType === 'employee' ? 'primary' : 'default'}`}
              style={{ width: '50%' }}
              onClick={() => setLoginType('employee')}
            >
              Employees
            </Button>
          </div>
          <form onSubmit={handleOk}>
            <div className='input-grp'>
              <label htmlFor=''>Name</label>
              <Input
                style={{ width: '70%' }}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className='input-grp'>
              <label htmlFor=''>Endpoint</label>
              <Input
                style={{ width: '70%' }}
                value={endpoint}
                onChange={(e) => setEndpoint(e.target.value)}
              />
            </div>
            <div className='input-grp'>
              <label htmlFor=''>Password</label>
              <Input
                type='password'
                style={{ width: '70%' }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div style={{ textAlign: 'center' }}>
              <input type='submit' value='Login' style={{ margin: '10px' }} />
              <input
                type='button'
                value='Cancel'
                style={{ margin: '10px' }}
                onClick={handleCancel}
              />
            </div>
          </form>
          {error && (
            <p style={{ color: 'red', textAlign: 'center', marginBottom: '0' }}>
              {error}
            </p>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default Header;
