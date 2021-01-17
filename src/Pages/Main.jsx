import React from 'react';
import { Button } from "@chakra-ui/react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom';
//import {
//    ScrollDownIndicator
//} from 'react-landing-page'

function detailView() {
  document.getElementById('intro').scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
}

export default function Main() {
  const history = useHistory();

  return (
    <div id="main" className="App App-main">
      <header>
        <h1 className="arr">
          한국어 디스코드 뮤직봇,
          <div className="empha">파크봇</div>
        </h1>

        <Button
          colorScheme="twitter"
          size="lg"
          className=" margin"
          onClick={() => history.push('/invite/recommend')}
        ><i className="fab fa-discord"></i>&nbsp;<p>내 서버에 초대하기</p></Button>

        <Button
          variant="outline"
          colorScheme="twitter"
          size="lg"
          className="nanum margin"
          style={{ marginLeft: '13px' }}
          onClick={detailView}
        ><i className="fas fa-terminal"></i>&nbsp; 특징들</Button>
        {/*<ScrollDownIndicator onClick={detailView} />*/}
      </header>
    </div>
  );
}