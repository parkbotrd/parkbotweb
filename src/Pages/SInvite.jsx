import React from 'react';
import { Button } from 'react-bootstrap';

const redirect = uri => window.location.href = uri;

export default function Main() {
  return (
    <div id="main" className="App App-invite">
      <header className="center">
        <h1 className="bold" style={{ fontSize: '170px' }}>초대완료</h1>
        <h2>서버에 파크봇이 성공적으로 추가되었어요!</h2>
        <Button
          variant="info"
          className="nanum margin"
          onClick={() => redirect('https://discord.gg/jE33mfD')}
          style={{ marginLeft: '17px' }}>
          <i className="fab fa-discord"></i> 팀 칼리스토 서버 참가하기
        </Button>
      </header>
    </div>
  );
}