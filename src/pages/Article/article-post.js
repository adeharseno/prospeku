import React, { useState, useEffect } from "react";
import { Row, Col, Divider, Button, Typography } from "antd";
import { apiAnon, api } from "../../api";
import moment from 'moment';
import Loading from "../../components/Atoms/Loading";
import MetaAttributes from "../../components/Atoms/MetaAttributes";
import _get from "lodash/get";
import Cookies from "js-cookie";
import {
  FacebookShareButton,
  TwitterShareButton,
  LineShareButton,
  WhatsappShareButton
} from "react-share";

import "./article.less";

// icon
import fb from "../../assets/images/fb.svg";
import ln from "../../assets/images/line.svg";
import wa from "../../assets/images/wa.svg";
import tw from "../../assets/images/twt.svg";

const { Title } = Typography;

function ArticlePost() {
  const [loading, setLoading] = useState(true);
  async function init() {
    await getInitials();
    getDetailArticle();
  }

  useEffect(() => {
    init();
  }, []);

  const getDetailArticle = async () => {
    let getId = window.location.pathname.substring(
      window.location.pathname.indexOf("---") + 3
    );
    const resDetailActivity = await api.get(`/cms/v1/posts/${getId}`);
    setDetailPost(resDetailActivity.data.content.post);
    setDetailImages(resDetailActivity.data.content.images[0]);
    setLoading(false);
  };

  const getInitials = async () => {
    const resPostsInitials = await apiAnon.get("/apps/v1/initials");

    Cookies.set("prospeku.authToken", resPostsInitials.data.content.token);
  };

  const [detailPost, setDetailPost] = useState([]);
  const [detailImages, setDetailImages] = useState([]);

  const shareUrl = window.location.href;
  const title = detailPost.title;

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <MetaAttributes
        title={_get(detailPost, "meta_title")}
        description={_get(detailPost, "meta_description")}
        twittertitle={_get(detailPost, "meta_title")}
        twitterdescription={_get(detailPost, "meta_description")}
        twitterimage={_get(detailImages, "url")}
        ogtitle={_get(detailPost, "meta_title")}
        ogdescription={_get(detailPost, "meta_description")}
        ogimage={_get(detailImages, "url")}
        ogimageurl={_get(detailImages, "url")}
        ogimagealt={_get(detailPost, "meta_title")}
      />
      <Row className="ant-article ant-article-post mb-3">
        <Col
          xl={{ span: 16, offset: 4 }}
          lg={{ span: 16, offset: 4 }}
          md={{ span: 18, offset: 3 }}
          sm={{ span: 20, offset: 2 }}
          xs={{ span: 22, offset: 1 }}
          className="element"
        >
          <div style={{ width: "100%", maxWidth: "778px", margin: "auto" }}>
            <Title>{detailPost.title}</Title>
            <p>{moment.unix(detailPost.last_updated).format('dddd, DD MMMM YYYY')}</p>
            <img
              src={detailImages.url}
              alt="provider"
              style={{
                width: "100%",
                maxWidth: "778px",
                display: "block",
                margin: "auto",
              }}
              className="border-blog mb-3"
            />
            <Divider />
            <span style={{ marginRight: "8px"}}>Bagikan Artikel</span>
            <FacebookShareButton
              url={shareUrl}
              quote={title}
            >
              <img style={{ cursor: "pointer" }} src={fb} alt="Facebook" />
            </FacebookShareButton>
            <TwitterShareButton
              url={shareUrl}
              title={title}
            >
              <img style={{ cursor: "pointer" }} src={tw} alt="Twitter" />
            </TwitterShareButton>
            <LineShareButton
              url={shareUrl}
              title={title}
            >
              <img style={{ cursor: "pointer" }} src={ln} alt="Line" />
            </LineShareButton>
            <WhatsappShareButton
              url={shareUrl}
              title={title}
              separator=":: "
            >
              <img style={{ cursor: "pointer" }} src={wa} alt="Whatsapp" />
            </WhatsappShareButton>
            
            <Divider />
            <div
              dangerouslySetInnerHTML={{ __html: detailPost.html_content }}
            ></div>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default ArticlePost;
