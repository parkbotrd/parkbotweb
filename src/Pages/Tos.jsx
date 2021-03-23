import React from 'react';
import { withRouter } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import MarkdownView from 'react-showdown';

class Docs extends React.Component {
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
    try {
      let { data } = await fetch('https://api.parkbot.xyz/tos-and-privacy/tos').then(r => r.json());
      console.log(data);
      this.setState({ data });
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    return (
      <div className="App-docs">
        <Modal.Dialog style={{ minWidth: '70vw' }}>
          <Modal.Header>
            <Modal.Title>파크봇의 이용약관</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <MarkdownView
              markdown={this.state.data}
              options={{ tables: true, emoji: true }}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => window.location.href = '/'}>파크봇 초대하기</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    );
  }
}

export default withRouter(Docs);