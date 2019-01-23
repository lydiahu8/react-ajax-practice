import React from 'react'
import Name from './Name.js'
import Message from './Message.js'
import Submit from './Submit.js'

class App extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {

    return (
      <div>
        <form>
          <div>Server Response: {}</div>
          <label>
            Name:
            <input type='text' value=''/>
          </label>
          <label>
            Message:
            <input type='text' value='' />
          </label>
          <input type='submit' value='Submit' />
        </form>
      </div>
    );
  }
}

export default App

/*
When the user visits the page, a small form should be displayed on the screen allowing a user to input their name and a message.

When the user clicks the submit button, the application should send an AJAX request to the server and display the response on the screen.
*/