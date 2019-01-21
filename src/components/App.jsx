import React from 'react';

class App extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {

    return (
      <div>
        Server Response: {}
        <form>
          <label>
            Name:
            <input type='text' name='name'/>
          </label>
          <label>
            Message:
            <input type='text'/>
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
