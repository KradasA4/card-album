import React from 'react';
import { friends } from '../Friends';
import SearchBox from '../components/SearchBox';
import CardCollection from '../components/CardCollection';
import Scroll from '../components/Scroll';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      friends: [],
      searchfield: ""
    }
    console.log("1 construct");
  }


  componentDidMount() {
    // fetch("https://jsonplaceholder.typicode.com/users")
    // .then(response => {
    //   return response.json();
    // })
    // .then(users => {
    //   this.setState( {friends: users} )
    // })
    this.setState( {friends: friends} )
    console.log("2 did mount");
  }

  // ใช้ function declaration ไม่ได้
  onSearchChange = (event) => {
    this.setState( { searchfield: event.target.value } )
    
  }

  render() {
    const { friends, searchfield } = this.state;

    const filteredFriend = friends.filter((friend) => {
      return friend.fullName.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase());
    });

    // ! equals to friends.length === 0
    if(!friends.length === 0) {
      return <h1>Loading</h1>
    } else {
      
      console.log("3 render");
      return(
      <div className="tc">
        <h1 className="f1">CodeCamp Friends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <CardCollection friends={filteredFriend} />
        </Scroll>
      </div>
      );

    }

  }
}

export default App;