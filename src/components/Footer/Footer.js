import React from 'react';
import { Row, Col } from 'antd';
import {
  FacebookOutlined,
  InstagramOutlined,
  YoutubeOutlined,
  TwitterOutlined,
} from '@ant-design/icons';

const Footer = () => {
  const styles = {
    title: {
      color: 'white',
      fontWeight: '900',
      textAlign: 'left',
    },
    subtitle: {
      color: 'white',
      textAlign: 'left',
    },
    address: {
      color: 'white',
      fontSize: '12px',
      margin: '0',
      textAlign: 'left',
    },
    list: {
      color: 'white',
      listStyle: 'inside',
      textAlign: 'left',
      padding: '0',
    },
  };
  return (
    <div
      style={{ backgroundColor: 'black', paddingTop: '15px', marginTop: '1%' }}
    >
      <Row justify='center'>
        <Col span={5}>
          <h3 style={styles.title}>UNIFUND</h3>
          <p style={styles.address}>#114-6</p>
          <p style={styles.address}>Bangalore, Karnataka</p>
          <p style={styles.address}>India</p>
          <br />
          <p style={styles.address}>
            <strong>Phone:</strong>+91 12345 12345
          </p>
          <p style={styles.address}>
            <strong>Email:</strong>support@handelx.com
          </p>
        </Col>
        <Col span={5}>
          <h4 style={styles.subtitle}>Useful Links</h4>
          <ul style={styles.list}>
            <li>About</li>
            <li>Products</li>
            <li>Services</li>
            <li>Terms and Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </Col>
        <Col span={5}>
          <h4 style={styles.subtitle}>Our Services</h4>
          <ul style={styles.list}>
            <li>Payments</li>
            <li>Shipping</li>
            <li>Cancellation Policy</li>
            <li>FAQ</li>
            <li>Report Infringement</li>
          </ul>
        </Col>
        <Col span={3}>
          <h4 style={styles.subtitle}>Our Social Networks</h4>
          <p style={{ color: 'white', textAlign: 'left', margin: '0' }}>
            Stay connected with us,
          </p>
          <div style={{ color: 'white', textAlign: 'left', fontSize: '16px' }}>
            <FacebookOutlined style={{ padding: '5px' }} />
            <YoutubeOutlined style={{ padding: '5px' }} />
            <InstagramOutlined style={{ padding: '5px' }} />
            <TwitterOutlined style={{ padding: '5px' }} />
          </div>
        </Col>
      </Row>
      <footer
        style={{ textAlign: 'center', color: 'white', marginTop: '15px' }}
      >
        &copy; 2020 HandelX | All rights reserved.
      </footer>
    </div>
  );
};

export default Footer;
