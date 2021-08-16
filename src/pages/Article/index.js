import React, { useState, useEffect } from "react";
import ArticleCard from "../../components/Molecules/ArticleCard";
import _get from "lodash/get";
import { Col, Pagination, Skeleton, Row } from "antd";
import MetaAttributes from "../../components/Atoms/MetaAttributes";
import { apiAnon, api } from "../../api";
import Cookies from "js-cookie";

import "./article.less";

function Article() {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const [totalArticles, setTotalArticles] = useState(50);
  const [state, setState] = useState(parameters);

  async function init() {
    await getInitials();
    getListCard();
  }

  useEffect(() => {
    init();
  }, []);

  function onPageChange(page, pageSize) {
    parameters.queries.page = page;
    setState(parameters);
    getListCard();
  }

  var parameters = {
    queries: {
      from: 0,
      page: 1,
      rows: 9,
      sorts: [{ field: "last_updated", order: 2 }],
      fields: [],
      keyword: "",
      merchants: ["prospeku"],
      period: "",
      randomize: false,
    },
    includes: {
      "categories.slug": [],
      "tags.slug": [],
      slugs: [],
      "categories.id": [],
      "business.city_id": [],
      type: ["article"],
    },
    excludes: {
      ids: [],
      "categories.id": [],
      "categories.slug": [],
      "tags.id": [],
      "tags.slug": [],
    },
    with: { stats: true, category: true, tags: true },
  };

  const getListCard = async () => {
    const resPostsList = await api.post("/cms/v1/posts/list", parameters);
    console.log(resPostsList);
    if (resPostsList.data.content.stats.rows_total === 0) {
      setArticles([]);
      setTotalArticles(0);
    } else {
      setArticles(resPostsList.data.content.posts);
      setTotalArticles(resPostsList.data.content.stats.rows_total);
    }
    setLoading(false);
  };

  const getInitials = async () => {
    const resPostsInitials = await apiAnon.get("/apps/v1/initials", parameters);

    Cookies.set("prospeku.authToken", resPostsInitials.data.content.token);
  };

  return (
    <>
      <MetaAttributes
        title="Artikel Seputar Dunia Properti Ada Di sini"
        description="Ikuti perkembangan dunia properti, tips dan trik jadi agen properti berkualitas, dan informasi lain di blog Prospeku."
        twittertitle="Artikel Seputar Dunia Properti Ada Di sini"
        twitterdescription="Ikuti perkembangan dunia properti, tips dan trik jadi agen properti berkualitas, dan informasi lain di blog Prospeku."
        // twitterimage={}
        ogtitle="Artikel Seputar Dunia Properti Ada Di sini"
        ogdescription="Ikuti perkembangan dunia properti, tips dan trik jadi agen properti berkualitas, dan informasi lain di blog Prospeku."
        // ogimage={}
        // ogimageurl={}
        // ogimagealt=""
      />
      <Row className="ant-article mt-5">
        <Col
          xl={{ span: 18, offset: 3 }}
          lg={{ span: 18, offset: 3 }}
          md={{ span: 18, offset: 3 }}
          sm={{ span: 20, offset: 2 }}
          xs={{ span: 22, offset: 1 }}
          className="element"
        >
          <Row gutter={16}>
            {loading &&
              [1, 2, 3].map((number, i) => (
                <Col
                  key={i}
                  xl={{ span: 8, offset: 0 }}
                  md={{ span: 8, offset: 0 }}
                  sm={{ span: 12, offset: 0 }}
                  xs={{ span: 24, offset: 0 }}
                >
                  <Skeleton
                    active
                    avatar={{ size: 100, shape: "square" }}
                    title={false}
                    paragraph={false}
                  />
                  <Skeleton active />
                </Col>
              ))}
            {!loading &&
              articles.map(
                (article, i) =>
                  i.length !== 0 && (
                    <Col
                      key={i}
                      xl={{ span: 8, offset: 0 }}
                      md={{ span: 8, offset: 0 }}
                      sm={{ span: 12, offset: 0 }}
                      xs={{ span: 24, offset: 0 }}
                    >
                      <ArticleCard
                        key={i}
                        id={_get(article, "post.id", "data kosong")}
                        img={_get(article, "images[0].url")}
                        title={_get(article, "post.title", "data kosong")}
                        content={_get(
                          article,
                          "post.plain_content",
                          "data kosong"
                        )}
                        slug={_get(article, "post.slug", "data kosong")}
                      />
                    </Col>
                  )
              )}
          </Row>
          <Row className="mb-5 center">
            <Col
              xl={{ span: 18, offset: 3 }}
              lg={{ span: 18, offset: 3 }}
              md={{ span: 18, offset: 3 }}
              sm={{ span: 20, offset: 2 }}
              xs={{ span: 22, offset: 1 }}
              className="element"
            >
              <Pagination
                defaultCurrent={1}
                total={totalArticles}
                pageSize={9}
                onChange={onPageChange}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default Article;
