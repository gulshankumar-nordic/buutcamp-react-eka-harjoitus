import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <div>
            <header className="App-header">
            <div>
                <button className="headerButton" type="button" onClick={this.props.handleIncreaseEvent}>+</button>
                <button className="headerButton" type="button" onClick={this.props.handleHideShowEvent}>Show/Hide</button>
                <button className="headerButton" type="button" onClick={this.props.handleDecreaseEvent}>-</button>
            </div>             
            </header>
        </div> );
    }
}
 

export default Header;