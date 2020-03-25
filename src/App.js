import React from 'react';
import { friends } from './Friends';
import SearchBox from './SearchBox';
import CardCollection from './CardCollection';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      friends: friends,
      searchfield: ""
    }
  }

  // ใช้ function declaration ไม่ได้
  onSearchChange = (event) => {
    this.setState( { searchfield: event.target.value } )
    
  }
  
  render() {
    const filteredFriend = this.state.friends.filter((friend) => {
      return friend.fullName.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase());
    }) ;
    
    return(
    <div className="tc">
      <h1>CodeCamp Friends</h1>
      <SearchBox searchChange={this.onSearchChange} />
      <CardCollection friends={filteredFriend} />
    </div>
    );
  }
}

// const App = () => {
//   return(
//   <div className="tc">
//     <h1>CodeCamp Friends</h1>
//     <SearchBox />
//     <CardCollection friends={friends} />
//   </div>
//   ) ;
// }

export default App;