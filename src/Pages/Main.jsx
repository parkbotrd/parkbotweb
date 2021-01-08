import React from 'react';
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
//import {
//    ScrollDownIndicator
//} from 'react-landing-page'

function detailView() {
    document.getElementById("intro").scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}

export default function Main() {
    return (
        <div id="main" className="App App-main">
            <header>
                <h1 className="bold arr">
                    파크봇과 함께 멋지고, 웅장하고, 있어보이는 디스코드 서버를 만들어보세요.
                </h1>

                <h1 className="mt10 mdtext">
                    한국어 디스코드 뮤직봇, 파크봇과 함께 서버 유저들에게 음악을 선물해보세요.
                </h1>

                <Button 
                    variant="primary" 
                    className="nanum margin"
                    onClick={() => window.location.href="/invite/recommend"}
                ><i class="fab fa-discord"></i> 자신의 서버로 초대하기</Button>

                <Button 
                    variant="success" 
                    className="nanum margin"
                    style={{ marginLeft: '13px' }}
                    onClick={detailView}
                ><i class="fas fa-terminal"></i> 특징들</Button>

                <Button 
                    variant="secondary" 
                    className="nanum margin"
                    style={{ marginLeft: '13px' }}
                    onClick={() => window.location.href="/info"}
                ><i class="fas fa-signal"></i> 봇의 상태 보기</Button>

                <Button 
                    variant="light" 
                    className="nanum margin"
                    style={{ marginLeft: '13px' }}
                    onClick={() => window.location.href="https://discord.gg/jE33mfD"}
                ><i class="fas fa-signal"></i> 서포트 서버 참가하기</Button>

                {/*<ScrollDownIndicator onClick={detailView} />*/}
          </header>
      </div>
    )
}