import React from 'react';
import { withRouter } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import MarkdownView from 'react-showdown';

class Docs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Rendered: false,
      docs: 'Loading...'
    };
  }

  componentDidMount() {
    this.renderAll();
  }

  async renderAll() {
    // let guildId = window.location.href.replace(/[^0-9]/g,'').replace(3000, "")
    try {
      var { docs } = await fetch(`https://api.parkbot.xyz/docs/${this.props.match.params.name}`).then(r => r.json());
      var docs = docs.replace('# 원하시는 문서를 찾을 수 없어요.', '').replace('대신 아래', '아래')
      this.setState({
        docs
      });
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    return (
      <div className="App-docs">
        <Modal.Dialog style={{ minWidth: '70vw' }}>
          <Modal.Header>
            <Modal.Title>{this.props.match.params.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <MarkdownView
              markdown={this.state.docs}
              options={{ tables: true, emoji: true }}
            />
          </Modal.Body>
          <a target="_blank" href="//ads4.tenping.kr/image/click?ADType=N7Rxsvi2y%2f32n%2ffJXHVWaA%3d%3d"><img src="//ads4.tenping.kr/image/showbox?ADType=N7Rxsvi2y%2f32n%2ffJXHVWaA%3d%3d&ADDisplayType=1LawCE8FqKOhetXZhMopsQ%3d%3d&MemberID=yOVb3CMZmmkA5hfVggABAr%2f29t9sQvibhBCddl2J7xt8Td52Iglk%2fnRaexB89hxP" /></a>
        </Modal.Dialog>
      </div>
    );
  }
}

export default withRouter(Docs);