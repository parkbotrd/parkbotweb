import React from 'react';
import { Button } from 'react-bootstrap'

const redirect = (uri) => {
    window.location.href = uri
}

export default function Main() {
    return (
        <div id="main" className="App App-invite">
            <header className="center">
                <h1 className="bold" style={{ fontSize: '51px' }}>
                    <bold>파크봇</bold>을 선택해주셔서 감사합니다
                </h1>
                <p>이곳은 커스텀 권한 초대에요. 추천 권한으로 초대하고 싶다면 <a href="/invite/recommend">여기를</a> 눌러주세요.
                <br />
                아래의 버튼을 누르게 되면 파크봇의 <a href="/tos">이용약관</a> 및 <a href="/tos">개인정보 처리방침</a>에 동의하게 됩니다.</p>

                <Button
                    variant="secondary"
                    className="nanum margin"
                    onClick={() => redirect('https://discord.com/api/oauth2/authorize?client_id=530171799980212244&permissions=2147483647&redirect_uri=https%3A%2F%2Fparkbot.ml%2Finvite%2Fsuccess&scope=bot')}
                    style={{ marginLeft: '17px' }}
                ><i className="fab fa-discord"></i> 커스텀 권한으로 초대하기</Button>
            </header>
        </div>
    )
}