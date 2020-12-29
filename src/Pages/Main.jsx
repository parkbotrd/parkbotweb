import React from 'react';
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    ScrollDownIndicator
} from 'react-landing-page'

function detailView() {
    document.getElementById("intro").scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}

export default function Main() {
    return (
        <div id="main" className="App App-main">
            <header className="center">
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
                    onClick={() => window.location.href="/info"}
                ><i class="fas fa-signal"></i> 봇의 상태 보기</Button>

                <Button 
                    variant="primary" 
                    className="nanum margin"
                    style={{ marginLeft: '13px' }}
                    onClick={() => window.location.href="/invite/recommend"}
                ><i class="fab fa-discord"></i> 자신의 서버로 초대하기</Button>

                <ScrollDownIndicator onClick={detailView} />
          </header>
      </div>
    )
}