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
            let res = await fetch(`https://api.parkbot.ml/docs/${this.props.match.params.name}`).then(r => r.json())
            console.log(res)
            this.setState({
                docs: res.docs
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
                        <Modal.Title>{this.props.match.params.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <MarkdownView
                            markdown={this.state.docs}
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