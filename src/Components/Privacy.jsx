import React from 'react';
import { withRouter } from "react-router-dom"
import { Modal, Button } from 'react-bootstrap'
import MarkdownView from 'react-showdown'

class Docs extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Rendered: false,
        }
    }
  
    componentDidMount() {
        this.renderAll()
    }
  
    renderAll = async() => {
        // let guildId = window.location.href.replace(/[^0-9]/g,'').replace(3000, "")
        try {
            let res = await fetch(`https://api.parkbot.ml/tos-and-privacy/privacy`).then(r => r.json())
            console.log(res)
            this.setState({
                data: res.data
            })
        } catch (err) {
            console.log(err)
        }   
    }
  
    render() {
        return (
            <div className="App-docs">
                <Modal.Dialog style={{ minWidth: '70vw' }}>
                    <Modal.Header>
                        <Modal.Title>파크봇의 개인정보 처리방침</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <MarkdownView
                            markdown={this.state.data}
                            options={{ tables: true, emoji: true }}
                        />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => window.location.href="/"}>파크봇 초대하기</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </div>
        )
    }
}

export default withRouter(Docs);