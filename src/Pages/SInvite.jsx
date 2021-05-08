import React from 'react';
import { Button } from 'react-bootstrap';

const redirect = uri => window.location.href = uri;

export default function Main() {
  return (
    <div id="main" className="App App-invite">
      <header className="center">
        <h1 className="bold" style={{ fontSize: '170px' }}>초대완료</h1>
        <h3>✔ 서버에 파크봇이 추가되었어요! </h3>
        <Button
          variant="info"
          className="nanum margin"
          onClick={() => redirect('https://discord.gg/jE33mfD')}
          style={{ marginLeft: '17px' }}>
          <i className="fab fa-discord"></i> 팀 칼리스토 서버 참가하기
        </Button>
        <Button
          variant="warning"
          className="nanum margin"
          onClick={() => redirect('/commands/도움말')}
          style={{ marginLeft: '17px' }}>
          <i className="fab fa-discord"></i> 도움말 확인하기
        </Button>
        <a target="_blank" href="//ads4.tenping.kr/image/click?ADType=N7Rxsvi2y%2f32n%2ffJXHVWaA%3d%3d"><img src="//ads4.tenping.kr/image/showbox?ADType=N7Rxsvi2y%2f32n%2ffJXHVWaA%3d%3d&ADDisplayType=1LawCE8FqKOhetXZhMopsQ%3d%3d&MemberID=yOVb3CMZmmkA5hfVggABAr%2f29t9sQvibhBCddl2J7xt8Td52Iglk%2fnRaexB89hxP" /></a>
      </header>
    </div>
  );
}