import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleMessageChange = event => {
    this.setState({
      message: event.target.value
    })
  }


  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={event => this.handleMessageChange(event)}/>
        <p>{this.props.maxChars - this.state.message.length} Characters Left</p>
      </div>
    );
  }
}

export default TwitterMessage;
