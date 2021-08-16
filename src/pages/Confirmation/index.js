import React, {useEffect, useState} from 'react';
import { withRouter } from 'react-router-dom';
import { Col, Row, Button } from "antd";
import Cookies from "js-cookie"
import { apiAnon, api} from "../../api";

import "./confirmation.less";

import ArtboardBisnis from "../../assets/images/business.png";

function Confirmation(props) {
    const [info, setInfo] = useState([])
    const [token, setToken] = useState()

    const getInitials = async () => {
        return await apiAnon.get("/apps/v1/initials").then(res => {
            Cookies.set("prospeku.authToken", res.data.content.token);
            setToken(props.location.search.substring(7))
            getData(props.location.search.substring(7))
        })
       
      };

    const getData = async (tokens) => {
        const data = await api.get(`user/v2/invitation/by_phone_number?token=${tokens}`);     
        setInfo(data.data.content)
        window.sessionStorage.setItem('companyName', data.data.content.company_name)
    };

    const approve = async() => {
        const data = await api.post(`user/v2/invitation/by_phone_number/accept`, {
            'token': token,
            'register_as_employee': true
        }); 
        if (data.data.status === 200) {
           
            props.history.push('/confirmation/approve')
        }
    }

    useEffect(() => {
        getInitials()
    }, [])

  return (
    <>
        <Row className="mb-lg-5">
            <Col
            xl={{ span: 18, offset: 3 }}
            lg={{ span: 20, offset: 2 }}
            md={{ span: 18, offset: 3 }}
            sm={{ span: 24, offset: 0 }}
            xs={{ span: 24, offset: 0 }}
            >
                <Row className="confirmation text-center">
                    <Col
                        xl={{ span: 14, offset: 5 }}
                        lg={{ span: 14, offset: 5 }}
                        md={{ span: 16, offset: 4 }}
                        sm={{ span: 24, offset: 0 }}
                        xs={{ span: 24, offset: 0 }}
                        >
                        <img src={ArtboardBisnis} className="artboard" alt="Artboard" />
                        <h3 className="ant-typography">Undangan untuk bergabung</h3>
                        <p>Anda telah diundang oleh <b>{info.inviter_name}</b> dari <b> {info.company_name}</b>. Dengan menerima undangan ini, <b> {info.company_name}  </b>akan dapat melihat informasi listing and progress deals Anda.</p>
                        
                        <Button onClick={() => props.history.push('/confirmation/reject')}className="ant-btn ant-btn-md ant-btn-tertiary" style={{
                            height:'55px'
                        }}>Tolak</Button>

                        <Button onClick={approve} className="ant-btn ant-btn-md ant-btn-secondary" style={{
                            height:'55px'
                        }}>Terima</Button>
                    </Col>
                </Row>
            </Col>
        </Row>
    </>
  );
}

export default withRouter(Confirmation)