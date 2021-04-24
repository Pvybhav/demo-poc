import React from 'react';
import { Row, Col, Divider, Card } from 'antd';
import {
  SmileOutlined,
  CustomerServiceFilled,
  MailOutlined,
} from '@ant-design/icons';
import HeaderImg from '../../assets/about-bg.jpg';

const About = () => {
  const { Meta } = Card;
  return (
    <div style={{ display: 'block' }}>
      <div
        style={{
          backgroundImage: `url(${HeaderImg})`,
          width: '100%',
          height: '300px',
          backgroundSize: 'cover',
        }}
      >
        <h1 style={{ paddingTop: '10%', color: 'white' }}>
          <strong>About Us</strong>
        </h1>
      </div>
      <div style={{ margin: '20px' }}>
        <Row justify='center'>
          <Col span={16}>
            <h2 style={{ fontSize: '32px', fontWeight: '600' }}>HandelX</h2>
            <p style={{ textAlign: 'justify' }}>
              We focus on E-commerce (electronic commerce) is the activity
              of electronically buying or selling of products on online services
              or over the Internet. Electronic commerce draws on technologies
              such as mobile commerce, electronic funds transfer, supply chain
              management, Internet marketing, online transaction
              processing, electronic data interchange (EDI), inventory
              management systems, and automated data collection systems.
              E-commerce is in turn driven by the technological advances of
              the semiconductor industry, and is the largest sector of
              the electronics industry. Modern electronic commerce typically
              uses the World Wide Web for at least one part of the transaction's
              life cycle although it may also use other technologies such
              as e-mail. Typical e-commerce transactions include the purchase of
              online books (such as Amazon) and music purchases (music
              download in the form of digital distribution such as iTunes
              Store), and to a less extent, customized/personalized
              online liquor store inventory services.[1] There are three areas
              of e-commerce: online retailing, electronic markets, and online
              auctions. E-commerce is supported by electronic business.
            </p>
          </Col>
        </Row>
      </div>
      <div style={{ margin: '2.5% 0' }}>
        <Divider orientation='center'>
          <h1>Services</h1>
        </Divider>
        <div className='site-card-wrapper'>
          <Row justify='center' align='top'>
            <Col span={4}>
              <Card
                bordered={false}
                style={{ margin: 10 }}
                cover={<CustomerServiceFilled style={{ fontSize: '32px' }} />}
              >
                <Meta
                  title='24/7 Helpline'
                  description='To listen closely and reply well is the highest perfection we are able to attain in the art of conversation.'
                />
              </Card>
            </Col>
            <Col span={4}>
              <Card
                bordered={false}
                style={{ margin: 10 }}
                cover={<MailOutlined style={{ fontSize: '32px' }} />}
              >
                <Meta
                  title='Quick Assistance'
                  description="Customer service shouldn't just be a department, it should be the entire company."
                />
              </Card>
            </Col>
            <Col span={4}>
              <Card
                bordered={false}
                style={{ margin: 10 }}
                cover={<SmileOutlined style={{ fontSize: '32px' }} />}
              >
                <Meta
                  title='Customer Satisfaction'
                  description='To give without any reward, or any notice, has a special quality of its own.'
                />
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default About;
