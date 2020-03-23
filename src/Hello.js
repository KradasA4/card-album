import React, { Component } from 'react';
import "./Hello.css";
// function Hello() {
//   return(<h1><u>Helloooooooooo</u></h1>)
// }

class Hello extends Component {
  render() {
    return(
      <div className="f1 tc">
        <h1><u>Helloooooooooo</u></h1>
        <p>Welcome to react.</p>
        <p>{ this.props.tryme }</p> 
      </div>
    );
  }
}

// const Hello = (props) => {
//     return(
//       <div className="f1 tc">
//         <h1><u>Helloooooooooo</u></h1>
//         <p>Welcome to react.</p>
//         <p>{ props.tryme }</p> 
//       </div>
//     );
// }


export default Hello;