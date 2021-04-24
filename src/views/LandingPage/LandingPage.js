import React from 'react';
import { Row, Col, Card, Divider, Input, Button } from 'antd';
import {
  CustomerServiceFilled,
  MailOutlined,
  SmileOutlined,
} from '@ant-design/icons';
import { newItems, trendingItems } from './data';

export default function LandingPage() {
  const { Meta } = Card;

  return (
    <div>
      {/* Trending section begins here */}
      <div style={{ margin: '2.5% 0' }}>
        <Divider orientation='center'>
          <h1>Trending Smartphones</h1>
        </Divider>
        <div>
          <Row justify='center' align='top'>
            {trendingItems.map((item, index) => {
              return (
                <Col span={4} key={index}>
                  <Card
                    hoverable
                    style={{ margin: 10 }}
                    cover={
                      <img
                        height='300'
                        alt='trending smartphone'
                        src={item.imgLink}
                      />
                    }
                  >
                    <Meta
                      title={item.name}
                      description={`Rs. ${item.price}/-`}
                    />
                  </Card>
                </Col>
              );
            })}
          </Row>
        </div>
      </div>

      {/* New Arrivals sections beigns here */}
      <div style={{ margin: '2.5% 0' }}>
        <Divider orientation='center'>
          <h1>New Arrival Smartphones</h1>
        </Divider>
        <div>
          <Row justify='center' align='top'>
            {newItems.map((item, index) => {
              return (
                <Col span={4} key={index}>
                  <Card
                    hoverable
                    style={{ margin: 10 }}
                    cover={
                      <img height='300' alt='mobile phone' src={item.imgLink} />
                    }
                  >
                    <Meta
                      title={item.name}
                      description={`Rs. ${item.price}/-`}
                    />
                  </Card>
                </Col>
              );
            })}
          </Row>
        </div>
      </div>

      {/* Services section begins here */}
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

      {/* Newsletter section begins here */}
      <div style={{ backgroundColor: '#dedede', padding: '1.5%' }}>
        <Row justify='center'>
          <Col span={8}>
            <h2>
              <strong>Join our Newsletter</strong>
            </h2>
            <div style={{ display: 'flex' }}>
              <Input
                style={{ borderRadius: '25px', width: '800px' }}
                size='large'
                placeholder='Enter your email here...'
                prefix={<MailOutlined />}
              />
              <Button
                style={{ margin: '10px' }}
                type='primary'
                shape='round'
                size='middle'
              >
                Subscribe
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
