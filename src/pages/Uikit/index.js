import React from 'react';
import MetaAttributes from "../../components/Atoms/MetaAttributes";
import { Col, Row } from "antd";

import Smartbanner from "../../assets/images/Profpic_Prospeku.png";

function Uikit() {

  return (
    <>
        <MetaAttributes
            // title=""
            // description=""
            // twittertitle=""
            // twitterdescription=""
            // twitterimage={}
            // ogtitle=""
            // ogdescription=""
            // ogimage={}
            // ogimageurl={}
            // ogimagealt=""
        />
        <Row justify="center" className="mt-5 mb-5">
            <Col
                xl={{ span: 18, offset: 1 }}
                lg={{ span: 20, offset: 1 }}
                md={{ span: 18, offset: 0 }}
                sm={{ span: 24, offset: 0 }}
                xs={{ span: 24, offset: 0 }}
            >
                <img src={Smartbanner} alt="" />
            </Col>
        </Row>
    </>
  );
}

export default Uikit;
