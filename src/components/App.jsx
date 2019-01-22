import React from 'react';
import $ from 'jquery';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      name: '',
      message: '',
      response: ''
    }
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(name) {
    console.log(this)
    this.setState({
      name: event.target.value
    });

  };

  handleMessageChange(message) {
    this.setState({
      message: event.target.value
    });
  };

  handleSubmit(event) {
    event.preventDefault();
    let currentName = this.state.name;
    let currentMessage = this.state.message;

    let data = {
      name: currentName,
      message: currentMessage
    }

    $.ajax({
      url: 'http://ec2-13-57-25-101.us-west-1.compute.amazonaws.com:3000/api/hrsf111/greeting',
      type: 'POST',
      data: JSON.stringify(data),
      contentType: 'application/json',
      success: function(data) {
        this.setState({
          response: data
        })
        console.log('SUCCESS!!');
      }.bind(this),
      error: function() {
        console.log('NOT WORKING');
      }
    });

  };

  render () {

    return (
      <div>
        <div>Server Response: {this.state.response}</div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type='text' value={this.state.name} onChange={this.handleNameChange}/>
          </label>
          <label>
            Message:
            <input type='text' value={this.state.message} onChange={this.handleMessageChange}/>
          </label>
          <input type='submit' value='Submit'/>
        </form>
      </div>
    );
  }
}

export default App;

//Import react into index.js
//Import reactDOM into index.js
//Import App into index.js
//Render the DOM

//Try to get something to show up on the DOM first
//Import react into App.jsx
//Create a class App and get the Name and message input fields along with the submit button into the DOM
//Bind 'this' to App, otherwise it will be undefined
//Create functional methods to change the state for message, name, and submit button
//Use setState to change the state of the name and message
//In the handleSubmit method, create a data object that you want to send to the server
//Use ajax to post to server



