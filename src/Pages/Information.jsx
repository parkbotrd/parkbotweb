import React from 'react';
import { withRouter } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

import SeasonWebP from '../Assets/WebP/season.webp';
import SeasonPNG from '../Assets/PNG/season.png';

let goto = () => {
  document.getElementById('main').scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
};

class Introducing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Rendered: false,
    };
  }

  componentDidMount() {
    this.renderAll();
  }

  async renderAll() {
    // let guildId = window.location.href.replace(/[^0-9]/g,'').replace(3000, "")
    try {
      let { status, guilds, users } = await fetch('https://api.parkbot.ml/api').then(r => r.json());
      console.log({ status, guilds, users });
      this.setState({
        status,
        guilds,
        users
      });
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    return (
      <div id="info" style={{ backgroundImage: SeasonWebP }} onError={e => {
        e.onerror = null;
        e.style['background-image'] = SeasonPNG;
      }} className="App-info">
        <Card style={{ width: '18rem', marginTop: '17px' }}>
          <Card.Body>
            <Card.Title>❤ 현재 상태</Card.Title>
            <Card.Text>
              {this.state.status ? this.state.status : '로딩중'}
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem', marginTop: '17px' }}>
          <Card.Body>
            <Card.Title><span role="img">🌌</span> 서버 수</Card.Title>
            <Card.Text>
              {this.state.guilds ? this.state.guilds : '로딩중'}
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem', marginTop: '17px' }}>
          <Card.Body>
            <Card.Title><span role="img">👨🏻‍💻</span> 유저 수</Card.Title>
            <Card.Text>
              {this.state.users ? this.state.users : '로딩중'}
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem', marginTop: '17px' }}>
          <Card.Img variant="top" />
          <Card.Body>
            <Card.Title>같이 즐길 준비 되셨나요?</Card.Title>
            <Card.Text>
              아래 버튼을 눌러 초대해보세요!
            </Card.Text>
            <Button variant="primary" onClick={goto}>초대하기</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default withRouter(Introducing);