import React from "react";
import {Nav} from "react-bootstrap";
import { withRouter } from "react-router";

const Side = props => {
   

    return (
        <>
    
            <Nav className="col-md-12 d-none d-md-block bg-light sidebar"
            activeKey="/home"
            onSelect={selectedKey => window.location.href = `/commands/${selectedKey}`}
            >
                <div className="sidebar-sticky"></div>
            <Nav.Item>
                <Nav.Link className="justsidebar" eventKey="도움말">도움말</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className="justsidebar" eventKey="핑">핑</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className="justsidebar" eventKey="가사">가사</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className="justsidebar" eventKey="노드정보">노드정보</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className="justsidebar" eventKey="현재재생">현재재생</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className="justsidebar" eventKey="일시정지">일시정지</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className="justsidebar" eventKey="재생">재생</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className="justsidebar" eventKey="대기열">대기열</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className="justsidebar" eventKey="추천영상">추천영상</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className="justsidebar" eventKey="일시정지해제">일시정지해제</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className="justsidebar" eventKey="스킵">스킵</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className="justsidebar" eventKey="정지">정지</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className="justsidebar" eventKey="볼륨">볼륨</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className="justsidebar" eventKey="한강">한강</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className="justsidebar" eventKey="올인">올인</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className="justsidebar" eventKey="지갑">지갑</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className="justsidebar" eventKey="돈받기">돈받기</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className="justsidebar" eventKey="프리미엄">프리미엄</Nav.Link>
            </Nav.Item>
            </Nav>
          
        </>
        );
  };
  const Sidebar = withRouter(Side);
  export default Sidebar