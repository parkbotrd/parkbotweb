import React from 'react';
import { Button } from "@chakra-ui/react"

import Aic from '../Components/Introducing';

import HelpWebp from '../Assets/WebP/help.webp';
import HelpPNG from '../Assets/Alternatives/help.jpg';

import AllinWebp from '../Assets/WebP/allin.webp';
import AllinPNG from '../Assets/Alternatives/allin.png';

import SeasonWebp from '../Assets/WebP/season.webp';
import SeasonPNG from '../Assets/Alternatives/season.png';

import HangangWebp from '../Assets/WebP/hangang.webp';
import HangangPNG from '../Assets/Alternatives/hangang.png';

import PlayWebp from '../Assets/WebP/play.webp';
import PlayGif from '../Assets/Alternatives/play.gif';

import SupportWebp from '../Assets/WebP/support.webp';
import SupportPNG from '../Assets/Alternatives/support.png';

import SlaWebp from '../Assets/WebP/sla.webp';
import SlaPNG from '../Assets/Alternatives/sla.png';


export default function Main() {
  return (
    <div style={{ backgroundColor: '#FEFEFA', paddingBottom: '42px', paddingTop: '57px' }}>
      <div className="container">
        <div id="intro" className="App-intro">
          <p align="center" className="arr2">더 알고싶으시다면, 알려드리는게 인지상정.</p>

          <Aic
            mgt={0}
            imgurl={PlayWebp}
            alturl={PlayGif}
            align="right"
            alt="no ad"
            title="무료, 광고 없음"
            desc="파크봇은 모든 음악 기능은 광고 없이, 무료로 제공해요."
            nd="음악을 재생하고, 추천 영상을 불러와 끝없이 음악을 재생하고, 멜론차트를 보고, 이퀄라이저로 나에게 꼭 맞게 설정해보세요. 물론 무료로요. Fredboat은 프리미엄에서만 지원하는 볼륨기능도 무료로 지원해요."
            oc="https://parkbot.ml/docs/no_ad"
          />

          <Aic
            mgt={57}
            imgurl={HelpWebp}
            alturl={HelpPNG}
            align="left"
            alt="lots of, free"
            title="많은 기능들"
            desc="play 커맨드를 이용해 음악을 시작하고,"
            nd="추천영상커맨드를 이용해 끝없이 음악을 불러오고, 음악을 놓치고 싶지 않은데 급히 가봐야할때는 pause커맨드로 음악을 일시정지하고, 돌아왔을때는 resume커맨드로, 음악을 다시 시작해보세요. 소리가 너무 크면 볼륨 기능을 이용해보세요."
            oc="https://parkbot.ml/docs/lots_of_free"
          />

          <Aic
            mgt={113}
            imgurl={SupportWebp}
            alturl={SupportPNG}
            align="right"
            alt="always"
            title="언제나 열려있는 문의"
            desc="궁금한점이 있을 경우 힘들게 영어로 문의하지 마세요."
            nd="공식 서버에서 한국어로 문의하시면 한국인이 직접 답장해드려요. 당연히, 무료로요."
            st="문의 하기 전에 확인해보실 수 있는 많은 문서들도 있어요."
            oc="https://parkbot.ml/docs/always"
          />

          {/*<Aic
            mgt={37}
            imgurl={AllinWebp}
            alturl={AllinPNG}
            align="left"
            alt="a"
            title="중독성 있는 도박"
            desc="돈받기 커맨드를 이용해 한 시간에 한 번씩 돈을 받고, 올인 커맨드를 이용해 돈을 불리거나 잃어보세요."
            nd="디스코드 안에서 친구들과 내기를 해도 좋고, 카지노 느낌을 내봐도 좋아요."
            st="금방 인싸가 되고, 분명히 많은 친구들을 만들 수 있을거에요. 한 번 써보세요, 분명히 만족할거에요."
            oc="https://parkbot.ml/docs/prepare"
          />*/}

          <Aic
            mgt={97}
            imgurl={SeasonWebp}
            alturl={SeasonPNG}
            align="right"
            alt="season event"
            title="시즌별 이벤트"
            desc="관리자가 시간을 들여 계절별 엄선한 이미지들은 웹으로,"
            nd="계절별 꼭 필요한 커맨드들은 파크봇으로."
            st="파크봇과 함께라면, 계절이 바뀔 때 마다 밖에 나가지 않아도 친구들과 서로의 집 안에서 바뀐 계절 느낌을 낼 수 있어요."
            oc="https://parkbot.ml/docs/season"
          />

          <Aic
            mgt={57}
            imgurl={HangangWebp}
            alturl={HangangPNG}
            align="left"
            alt="not only music command"
            title="음악 뿐만 아니라"
            desc="한강수온, 날씨 등등 생활에 필요한 기능들을 이용하실 수 있어요."
            nd="인터넷은 복잡할뿐만 아니라 위험한 곳이에요. 사용자 친화적 커맨드와 응답 덕분에, 위험한 인터넷을 돌아다닐 필요 없이 생활에 필요한 정보들을 쉽게 얻을 수 있어요."
            oc="https://parkbot.ml/docs/prepare"
          />

          <Aic
            mgt={27}
            imgurl={SlaWebp}
            alturl={SlaPNG}
            align="right"
            alt="tos, privacy, sla"
            title="명확함"
            desc="이용약관, 개인정보 보호 정책, SLA 등,"
            nd="다른 봇에서는 보기 힘든 것들을 명확하게 기재해요."
            oc="https://parkbot.ml/docs/tps"
            pb={27}
          />

          <hr
            style={{
              height: 5,
              backgroundColor: 'gray',
              marginTop: 107
            }}
          />

        <Button
          colorScheme="twitter"
          size="lg"
          className="nanum margin"
          style={{ marginLeft: '13px' }}
          align="right"
          onClick={() => window.location.href="/commands/도움말"}
        ><i className="fas fa-terminal"></i>&nbsp; 더 알고싶으세요? 커맨드들 확인하기</Button>
        </div>
      </div>
    </div>
  );
}
