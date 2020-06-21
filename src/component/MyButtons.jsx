import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export default class MyButtons extends Component {

    constructor(props){
        super(props);
        this.state = { isToggle: false, isLoading: false};
        this.button_Click = this.button_Click.bind(this);
        this.button_Loading = this.button_Loading.bind(this);
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
}
