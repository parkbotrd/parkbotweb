import React from 'react';
import { Button } from "@chakra-ui/react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from 'react-bootstrap/Alert'
import { useHistory } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
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
      <Image type="button" onClick={()=>(window.location.href="http://iryan.kr/t6or5q44qo")} style={{ marginTop: "-10vw", maxHeight: "30vh" }} src={"https://media.discordapp.net/attachments/622032980633714688/839883108521345024/2018040315170001_Con_20180801110641_6.jpg"} fluid />
      
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

         {/*<Button
          variant="outline"
          colorScheme="twitter"
          size="lg"
          className="nanum margin"
          style={{ marginLeft: '13px' }}
          onClick={detailView}
        ><i className="fas fa-terminal"></i>&nbsp; 특징들</Button>
        <ScrollDownIndicator onClick={detailView} />*/}
        <a target="_blank" href="//ads4.tenping.kr/image/click?ADType=N7Rxsvi2y%2f32n%2ffJXHVWaA%3d%3d"><img src="//ads4.tenping.kr/image/showbox?ADType=N7Rxsvi2y%2f32n%2ffJXHVWaA%3d%3d&ADDisplayType=1LawCE8FqKOhetXZhMopsQ%3d%3d&MemberID=yOVb3CMZmmkA5hfVggABAr%2f29t9sQvibhBCddl2J7xt8Td52Iglk%2fnRaexB89hxP" /></a>
      </header>
    </div>
  );
}