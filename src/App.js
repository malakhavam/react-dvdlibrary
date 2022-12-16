import React, { Component} from 'react';
import './App.css';
import Main from "./components/Main.js";
import Edit from "./components/Edit.js";
import 'bootstrap/dist/css/bootstrap.min.css';


<link
              rel="stylesheet"
              href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
              integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
              crossorigin="anonymous"
             />

class App extends Component {
  render() {
  return (
    <div>
      <Main></Main>
      <Edit></Edit>
    </div>
  );
 }
}
export default App;
