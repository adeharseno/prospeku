import React from 'react';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { Col, Row, Button, Menu, Dropdown } from 'antd';
import { withRouter } from 'react-router-dom'
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { ReactComponent as IconBurger } from "../../assets/images/burger.svg";

// style
import './header.less';

function HeaderPage(props) {
    const [sidebar, setSidebar] = useState(false);

    const menu = (
        <Menu>
          <Menu.Item>
            <Link to="/personal/listing">Personal</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/bisnis">Bisnis</Link>
          </Menu.Item>
        </Menu>
    );

    let urlRegister = process.env.REACT_APP_API_URL_REGISTER
    useEffect(() => {	
        const header = document.getElementById("stickyHeader");	
        const sticky = header.offsetTop;	
        const scrollCallBack = window.addEventListener("scroll", () => {	
            if (window.pageYOffset > sticky) {	
                header.classList.add("sticky");	
            } else {	
                header.classList.remove("sticky");	
            }	
        });	
        return () => {	
            window.removeEventListener("scroll", scrollCallBack);	
        };	
    }, []);
    if (window.location.pathname === "/confirmation" || window.location.pathname === "/confirmation/approve" || window.location.pathname === "/confirmation/reject") {
        return (
            <div className="header" id="stickyHeader">
                
                <Row className="header-style" type="flex" align="middle">
                    <Col
                        xl={{ span: 18, offset: 3 }}
                        lg={{ span: 20, offset: 2 }}
                        md={{ span: 20, offset: 2 }}
                        sm={{ span: 22, offset: 1 }}
                        xs={{ span: 22, offset: 1 }}
                    >
                        <a href="https://prospeku.com/"
                            className="header__logo header__logo-ext text-center">
                            <Logo 
                                height="40" 
                                width="194" />
                        </a>
                    </Col>
                </Row>
            </div>
        );
    } else {
        return (
            <>
            <div className="header" id="stickyHeader">
                <Row className="header-style" type="flex" align="middle">
                    <Col
                    xl={{ span: 18, offset: 3 }}
                    lg={{ span: 20, offset: 2 }}
                    md={{ span: 20, offset: 2 }}
                    sm={{ span: 22, offset: 1 }}
                    xs={{ span: 22, offset: 1 }}
                    >
                        <Row gutter={16} type="flex" align="middle">
                            <Col className="d-lg-none d-block text-center">
                                <div>
                                    <Button 
                                        className="menu-trigger"
                                        type="link" 
                                        onClick={() => setSidebar(!sidebar)}>
                                        <IconBurger width="25" height="25" type="menu" />
                                    </Button>
                                </div>
                            </Col>
                            <Col 
                                xl={5} 
                                lg={5} 
                                md={5} 
                                sm={18} 
                                xs={18}>
                                <Link to="/" className="header__logo text-center">
                                    <Logo 
                                        height="32" 
                                        width="194" />
                                </Link>
                            </Col>
                            <Col 
                                xl={19} 
                                lg={19} 
                                md={19} 
                                sm={12} 
                                xs={12} 
                                className="header-pd d-none d-lg-block">
                                <div className="header__menu">
                                    <Link to="/">Beranda</Link>
                                    <Dropdown overlay={menu}>
                                        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>Produk</a>
                                    </Dropdown>
                                    <Link to="/artikel">Artikel</Link>
                                    <a href={urlRegister} className="ant-btn ant-btn-md ant-btn-secondary btn-register">Daftarkan Kantor Agen</a>
                                    <a href="https://cms.prospeku.com/login" className="ant-btn ant-btn-md ant-btn-primary btn-login">Masuk</a>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
            <div className={`sidebar d-lg-none d-block ${sidebar && 'active-sidebar'}`}>
                <ul className="sidebar__menu">
                    <li>
                        <Link to="/" onClick={() => setSidebar(!sidebar)}>Beranda</Link>
                    </li>
                    <li>
                        <a href="https://prospeku.com/fitur-kontak.html" onClick={() => setSidebar(!sidebar)}>Produk</a>
                    </li>
                    <li>
                        <Link to="/artikel" onClick={() => setSidebar(!sidebar)}>Artikel</Link>
                    </li>
                </ul>
            </div>
            </>
        );
    }
} 

export default withRouter(HeaderPage);