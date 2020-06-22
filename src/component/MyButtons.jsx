import React, { Component } from 'react';
import { Button, Modal, ModalDialog } from 'react-bootstrap';

export default class MyButtons extends Component {

    constructor(props){
        super(props);
        this.state = { isToggle: false, isLoading: false, show: false};
        this.button_Click = this.button_Click.bind(this);
        this.button_Loading = this.button_Loading.bind(this);
        this.buttonModal_Click = this.buttonModal_Click.bind(this);
    }

    render() {
        return (
            <div className="form">
                <Button variant="outline-primary" size="lg" block onClick={this.button_Click}>
                    {this.state.isToggle?'ON':'OFF'}
                </Button>
                
                <Button variant="warning" size="lg" block
                    disabled= {this.state.isLoading}
                    onClick={!this.state.isLoading?this.button_Loading:null}
                >
                    {this.state.isLoading?"Loading...":"Click 2 Load"}
                </Button>
                
                <Button variant="outline-success" size="lg" block onClick={this.buttonModal_Click}>
                    Open Modal Popup
                </Button>

                <Modal show={this.state.show} onHide={this.btnClose_Click} centered>
                    <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={this.btnClose_Click}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={this.btnClose_Click}>
                        Save Changes
                    </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }

    button_Click(){
        this.setState(state => ({
            isToggle: !state.isToggle
        }));
    }
    
    button_Loading(){
        this.setState(state => ({
            isLoading: true
        }));

        this.callNetworkRequest().then(() => {
            this.setState(state => ({
                isLoading: false
            }));
          });
    }

    callNetworkRequest() {
        return new Promise((resolve) => setTimeout(resolve, 2000));
    }

    btnClose_Click = () => this.setState(state => ({ show: false}));

    buttonModal_Click = () => this.setState(state => ({ show: true}));

}
