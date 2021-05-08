import React from 'react';
import { Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'

/*function MyVerticallyCenteredModal(props) {
    const redirect = () => {
      window.location.href = 'https://discord.com/oauth2/authorize?client_id=530171799980212244&permissions=8&scope=bot'
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
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={redirect}>나는 위의 약관들을 주의 깊게 읽어 보았고, 동의합니다.</Button>
        </Modal.Footer>
      </Modal>
    );
}*/

const redirect = (uri) => window.location.href = uri;

export default function Main() {
  return (
    <div id="main" className="App App-invite">
      <header className="center">
      <Image type="button" onClick={()=>(window.location.href="http://iryan.kr/t6or5q44qo")} style={{ marginTop: "-10vw", maxHeight: "30vh" }} src={"https://media.discordapp.net/attachments/622032980633714688/839883108521345024/2018040315170001_Con_20180801110641_6.jpg"} fluid />
        <h1 className="bold" style={{ fontSize: '51px' }}>
          <bold>파크봇</bold>을 선택해주셔서 감사합니다
        </h1>
        <p style={{ fontFamily: 'Nanum Gothic' }}>이곳은 추천 권한 초대에요. 커스텀 권한으로 초대하고 싶다면 <a style={{ color: 'aqua' }} href="/invite/custom">여기를</a> 눌러주세요.
          <br />
                아래의 버튼을 누르게 되면 파크봇의 <a href="/tos" style={{ color: 'aqua' }}>이용약관</a> 및 <a href="/privacy" style={{ color: 'aqua' }}>개인정보 처리방침</a>에 동의하게 됩니다.</p>

        <Button
          variant="primary"
          className="nanum margin"
          onClick={() => redirect('https://discord.com/oauth2/authorize?client_id=530171799980212244&permissions=0&redirect_uri=https%3A%2F%2Fparkbot.xyz%2Finvite%2Fsuccess&response_type=code&scope=bot%20identify')}
        ><i className="fab fa-discord"></i> 추천 권한으로 초대하기</Button>
        <a target="_blank" href="//ads4.tenping.kr/image/click?ADType=N7Rxsvi2y%2f32n%2ffJXHVWaA%3d%3d"><img src="//ads4.tenping.kr/image/showbox?ADType=N7Rxsvi2y%2f32n%2ffJXHVWaA%3d%3d&ADDisplayType=1LawCE8FqKOhetXZhMopsQ%3d%3d&MemberID=yOVb3CMZmmkA5hfVggABAr%2f29t9sQvibhBCddl2J7xt8Td52Iglk%2fnRaexB89hxP" /></a>
      </header>
    </div>
  );
}