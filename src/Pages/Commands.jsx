import React from 'react';
import { withRouter } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import MarkdownView from 'react-showdown';
import {Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import Sidebar from '../Components/Sidebar'

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
      var { docs } = await fetch(`https://api.parkbot.ml/docs/${this.props.match.params.name}`).then(r => r.json());
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
        <Container fluid>
                <Row>
                    <Col xs={2} id="sidebar-wrapper">      
                      <Sidebar />
                    </Col>
                    <Col  xs={10} id="page-content-wrapper">
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
                    </Col> 
                </Row>

            </Container>
      </div>
    );
  }
}

export default withRouter(Docs);