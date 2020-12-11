import React from 'react';
import { Button, Modal } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import {
    ScrollDownIndicator
} from 'react-landing-page'

function MyVerticallyCenteredModal(props) {
    const redirect = () => {
      window.location.href = 'https://discord.com/oauth2/authorize?client_id=530171799980212244&permissions=8&scope=bot&scope=applications.commands'
    }
    
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        backdrop="static"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            이용약관, 개인정보 처리방침
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
          <p>
            <Link to="/tos">이용약관</Link>
            <br />
            <Link to="/privacy">개인정보 처리방침</Link>
            <br />
            <Link to="/docs/transfer-of-personal-information-abroad">개인정보 국외 이전 동의</Link>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={redirect}>나는 위 3개의 약관을 모두 주의 깊게 읽어 보았고, 이를 읽지 않거나 오해해서(또는 이에 국한되지 않음) 생긴 불이익은 내가 감수할것이며 위 내용에 동의 합니다.</Button>
        </Modal.Footer>
      </Modal>
    );
}

function detailView() {
    document.getElementById("intro").scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}

/*
function getT() {
    let t = new Date.getHours()
    return t
} */

export default function Main() {
    const [modalShow, setModalShow] = React.useState(false);
    /* const [Dark, setDark] = React.useState(false);
    if(getT() < 19 && getT() > 8){
        setDark(false)
    } else {
        setDark(true)
    } */

    return (
        <div id="main" className="App">
          <header className="App-main"  >
              <h1 className="bold bigtext nanum">
                  파크봇
              </h1>
              <h1 className="mt10 mdtext">
                  디스코드를 흥겹게, 디스코드에서 음악을.
                  <br />
                  디스코드를 이용중이라면 누구나 초대하고 사용할 수 있습니다.
              </h1>
              <Button 
                  variant="success" 
                  className="nanum margin"
                  onClick={() => setModalShow(true)}
              >초대하기</Button>
  
              <MyVerticallyCenteredModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
              />
              <ScrollDownIndicator onClick={detailView} />
          </header>
      </div>
    )
}