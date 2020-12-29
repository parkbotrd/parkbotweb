import React from 'react';
import Aic from '../Components/introducing'

export default function Main() {
    return (
        <div style={{ backgroundColor: '#2C2F33' }}>
        <div class="container">
        <div id="intro" className="App-intro">
            <Aic 
                mgt={0}
                imgurl="https://cuteyoru.cdn3.cafe24.com/play.gif" 
                align="right" 
                alt="no ad" 
                title="무료, 광고 없음"
                desc="모든 음악 기능은 광고 없이, 무료로 제공돼요."
                nd="Ayana의 광고를 더 이상 듣지 마세요."
                oc="https://parkbot.ml/docs/no_ad"
            />
            
            <Aic 
                mgt={150}
                imgurl="https://cuteyoru.cdn3.cafe24.com/help.jpg" 
                align="left" 
                alt="lots of, free" 
                title="많은 기능들"
                desc="기본적인 기능부터.."
                nd="이퀄라이저까지 모두 지원해요."
                oc="https://parkbot.ml/docs/lots_of_free"
            />

            <Aic 
                mgt={220}
                imgurl="https://cuteyoru.cdn3.cafe24.com/support.png" 
                align="right" 
                alt="always" 
                title="언제나 열려있는 문의"
                desc="궁금한점이 있을 경우 힘들게 영어로 문의하지 마세요."
                nd="한국어로 문의하시면 한국인이 직접 답장해드려요."
                st="문의 하기 전에 확인해보실 수 있는 문서들도 있어요."
                oc="https://parkbot.ml/docs/always"
            />

            <Aic 
                mgt={37}
                imgurl="https://cuteyoru.cdn3.cafe24.com/allin.png"
                align="left" 
                alt="a" 
                title="중독성 있는 도박"
                desc="파크봇의 포인트를 이용해 올인 등의 미니 도박을 즐기실 수 있습니다"
                nd="이렇게 모은 포인트를 이용해 무료로 프리미엄을 구매하실수도 있어요."
                oc="https://parkbot.ml/docs/prepare"
            />

            <Aic 
                mgt={170}
                imgurl="https://cuteyoru.cdn3.cafe24.com/season.png"
                align="right" 
                alt="season event" 
                title="시즌별 이벤트"
                desc="계절에 따라 달라지는 봇과 홈페이지를 통해 계절을 느껴보고, 즐겨보세요."
                oc="https://parkbot.ml/docs/season"
            />

            <Aic 
                mgt={200}
                imgurl="https://cuteyoru.cdn3.cafe24.com/hangang.png"
                align="left" 
                alt="not only music command" 
                title="음악 뿐만 아니라"
                desc="한강수온, 날씨 등등 생활에 필요한 기능들을 이용하실 수 있어요."
                oc="https://parkbot.ml/docs/prepare"
            />

            <Aic 
                mgt={157}
                imgurl="https://cuteyoru.cdn3.cafe24.com/sla.png"
                align="right" 
                alt="tos, privacy, sla" 
                title="명확함"
                desc="이용약관, 개인정보 보호 정책, SLA 등,"
                nd="다른 봇에서는 보기 힘든 것들을 명확하게 기재해요."
                oc="https://parkbot.ml/docs/tps"
            />
        </div>
        </div>
        </div>
    )
}
