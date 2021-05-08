import React from 'react';
import { Button } from 'react-bootstrap';

const redirect = (uri) => {
  window.location.href = uri;
};

export default function Main() {
  return (
    <div id="main" className="App App-invite">
      <header className="center">
        <h1 className="bold" style={{ fontSize: '51px' }}>
          <bold>파크봇</bold>을 선택해주셔서 감사합니다
        </h1>
        <p style={{ fontFamily: 'Nanum Gothic' }}>이곳은 커스텀 권한 초대에요. 추천 권한으로 초대하고 싶다면 <a href="/invite/recommend" style={{ color: 'aqua' }}>여기를</a> 눌러주세요.
          <br />
            아래의 버튼을 누르게 되면 파크봇의 <a href="/tos" style={{ color: 'aqua' }}>이용약관</a> 및 <a href="/privacy" style={{ color: 'aqua' }}>개인정보 처리방침</a>에 동의하게 됩니다.</p>

        <Button
          variant="secondary"
          className="nanum margin"
          onClick={() => redirect('https://discord.com/oauth2/authorize?client_id=530171799980212244&permissions=0&redirect_uri=https%3A%2F%2Fparkbot.xyz%2Finvite%2Fsuccess&response_type=code&scope=bot%20identify')}
          style={{ marginLeft: '17px' }}
        ><i className="fab fa-discord"></i> 커스텀 권한으로 초대하기</Button>
        <a target="_blank" href="//ads4.tenping.kr/image/click?ADType=N7Rxsvi2y%2f32n%2ffJXHVWaA%3d%3d"><img src="//ads4.tenping.kr/image/showbox?ADType=N7Rxsvi2y%2f32n%2ffJXHVWaA%3d%3d&ADDisplayType=1LawCE8FqKOhetXZhMopsQ%3d%3d&MemberID=yOVb3CMZmmkA5hfVggABAr%2f29t9sQvibhBCddl2J7xt8Td52Iglk%2fnRaexB89hxP" /></a>
      </header>
    </div>
  );
}