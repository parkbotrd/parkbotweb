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
        </Modal.Dialog>
      </div>
    );
  }
}

export default withRouter(Docs);