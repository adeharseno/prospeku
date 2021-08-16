import React from 'react';
import { Link } from 'react-router-dom';
import ReactImageFallback from 'react-image-fallback';
import { Card, Spin, Typography } from 'antd';
import articlePlaceholder from '../../../assets/images/article-placeholder.png';

import './article-card.less';

const {Text, Title} = Typography;
const { Meta } = Card;

function ArticleCard(props) {
  var cardType = props.type === 'main' ? true : false;
  if (!cardType) {
    return (
      <Link to={`/artikel/${props.slug}---${props.id}`}>
        <Card
          className="ant-card ant-card-content mb-5"
          bordered={false}
          cover={
            <ReactImageFallback
              className="card-block"
              height={180}
              initialImage={<Spin size="small" className="ant-spin--danger" tip="Loading..." />}
              fallbackImage={articlePlaceholder}
              src={props.img}
              alt={props.title}
              title={props.title}
            />
          }
          hoverable
          style={{ borderRadius: 12, height: '315px' }}
        >
          <Title className="text-article title-article">{props.title}</Title>
          <Text className="text-article description-article">
            {props.content}
          </Text>
        </Card>
      </Link>
    );
  } else {
    return (
      <Link to={`/artikel/${props.slug}---${props.id}`}>
        <Card
          className="ant-card ant-card-content card-horizontal"
          bordered={false}
          cover={
            <ReactImageFallback
              className="card-block"
              initialImage={<Spin size="small" className="ant-spin--danger" tip="Loading..." />}
              fallbackImage={articlePlaceholder}
              src={props.img}
              alt={props.title}
              title={props.title}
            />
          }
          hoverable
          style={{ borderRadius: 12 }}
        >
          <Meta
            title={props.title}
            description={props.summary}
          />
        </Card>
      </Link>
    );
  }
}

export default ArticleCard;