import React, { useState } from 'react';
import { Row, Col, Card, Tag, Rate, Switch } from 'antd';
import ErrorBoundary from '../ErrorBoundary';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const productList = [
  {
    name: 'iPhone 11',
    imgLink:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-green-select-2019?wid=834&hei=1000&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1566956144838',
    price: '48900',
    availability: true,
    rating: 4.5,
  },
  {
    name: 'Samsung Galaxy S10 Lite',
    imgLink:
      'https://www.gizmozones.com/wp-content/uploads/2020/01/Samsung-Galaxy-S10-Lite.png',
    price: '39900',
    availability: true,
    rating: 4.2,
  },
  {
    name: 'iPhone 12 Pro',
    imgLink:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-blue-hero?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1604021661000',
    price: '97900',
    availability: true,
    rating: 4.7,
  },
  {
    name: 'Samsung S21 5G',
    imgLink:
      'https://fdn.gsmarena.com/imgroot/news/21/01/samsung-galaxy-s21-series-promo-material/-1200x600m/gsmarena_001.jpg',
    price: '89900',
    availability: true,
    rating: 4.7,
  },
  {
    name: 'Xiaomi Mi 10',
    imgLink:
      'https://www.gizmochina.com/wp-content/uploads/2020/01/Xiaomi-Mi-10-Pro-5G-1-500x500.jpg',
    price: '50990',
    availability: true,
    rating: 4.1,
  },
  {
    name: 'Oneplus 8T',
    imgLink:
      'https://www.gizmochina.com/wp-content/uploads/2020/09/OnePlus-8T-500x500.jpg',
    price: '34990',
    availability: false,
    rating: 4.3,
  },
  {
    name: 'Oppo Reno4 Pro',
    imgLink:
      'https://www.gizmochina.com/wp-content/uploads/2020/05/Oppo-Reno4-Pro-5G.jpg',
    price: '48490',
    availability: true,
    rating: 4,
  },
  {
    name: 'Nokia 7.2',
    imgLink: 'https://img1.ibay.com.mv/is1/full/2020/12/item_3172117_815.png',
    price: '22490',
    availability: true,
    rating: 4.3,
  },
  {
    name: 'Moto Edge+',
    imgLink:
      'https://fdn2.gsmarena.com/vv/pics/motorola/motorola-edge-plus-1.jpg',
    price: '75490',
    availability: false,
    rating: 3.9,
  },
];
const Products = props => {
  const [showStock, setShowStock] = useState(false);
  const [products, setProducts] = useState(productList);
  const [showRate, setShowRate] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const { Meta } = Card;

  const handleSearchInput = ({ target: { value } }) => {
    setSearchInput(value);
  };

  React.useEffect(() => {
    const filteredProducts = productList.filter(({ name }) =>
      name.toLowerCase().includes(searchInput.trim().toLocaleLowerCase()),
    );
    setProducts(filteredProducts);
  }, [searchInput]);

  return (
    <div>
      <ErrorBoundary>
        <h1>Mobile Phones</h1>
        <p style={{ margin: '10px 50px', fontSize: '14px' }}>
          Mobile phones are no more merely a part of our lives. Whether it's to
          stay connected with friends and family or to keep abreast of important
          developments around the world, mobiles are no longer for sending a
          text or making a call. From budget to state-of-the-art smartphones;
          indigenous names to global big-wigs - a whole universe of mobiles
          await you on HandelX.
        </p>
        <Row>
          <Col span={8} offset={10}>
            <div style={{ display: 'flex' }}>
              <div style={{ margin: '10px' }}>
                <Switch
                  size="small"
                  checked={showStock}
                  onChange={() => setShowStock(!showStock)}
                />
                &nbsp;<span>Stock availability</span>
              </div>
              <div style={{ margin: '10px' }}>
                <Switch
                  size="small"
                  checked={showRate}
                  onChange={() => setShowRate(!showRate)}
                />
                &nbsp;<span>Customer ratings</span>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={8} offset={10}>
            <div style={{ display: 'flex' }}>
              <div>
                <Input
                  size="large"
                  placeholder="Search products"
                  prefix={<SearchOutlined />}
                  onChange={handleSearchInput}
                  value={searchInput}
                />
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={16} offset={4}>
            <Row>
              {products.map((item, index) => {
                return (
                  <Col span={6} key={index}>
                    <Card
                      hoverable
                      style={{ margin: 10 }}
                      cover={
                        <img
                          height="300"
                          alt="trending smartphone"
                          src={item.imgLink}
                        />
                      }
                    >
                      <Meta
                        title={item.name}
                        description={`Rs. ${item.price}/-`}
                      />
                      {showStock && (
                        <>
                          {item.availability ? (
                            <Tag
                              style={{ marginTop: '10px', fontSize: '10px' }}
                              color="#017b33"
                            >
                              IN STOCK
                            </Tag>
                          ) : (
                            <Tag
                              style={{ marginTop: '10px', fontSize: '10px' }}
                              color="#d2000b"
                            >
                              OUT OF STOCK
                            </Tag>
                          )}
                        </>
                      )}
                      <br />
                      {showRate && (
                        <>
                          <Rate
                            style={{ fontSize: '10px' }}
                            disabled
                            allowHalf
                            defaultValue={item.rating}
                          />
                          <span style={{ fontSize: '10px' }}>
                            &nbsp;({item.rating})
                          </span>
                        </>
                      )}
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>
      </ErrorBoundary>
    </div>
  );
};

export default Products;
