import React, { Component } from 'react';
import "./Hello.css";
// function Hello() {
//   return(<h1><u>Helloooooooooo</u></h1>)
// }

class Hello extends Component {
  render() {
    const element = React.createElement(
      'h1',
      {className: 'greeting'},
      'Hello, world!'
    );

    // code above has the same outcome as this one.
    // const element =(
    //   <h1 className="greeting">
    //       hello, world!
    //   </h1>
  // );

    return(
      <div className="f1 tc">
        <h1><u>Helloooooooooo</u></h1>
        <p>Welcome to react.</p>
        <p>{ this.props.tryme }</p> 
        
        {element}
        {console.dir(element)}

        
        {React.createElement(
          "u",
          null,
          "create element"
        )}

  
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