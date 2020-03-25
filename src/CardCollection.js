import React from 'react';
import Card from './Card';

// รับ friends จาก props ของ CardCollection ในหน้า App.js
const CardCollection = ( {friends} ) => {

  const friendsArray = friends.map(function(user, index) {
    return (
    <Card 
      key={friends[index].id} 
      id={friends[index].id} 
      fullName={friends[index].fullName} 
      github={friends[index].github} 
      display={friends[index].display} 
    />
    );
  });

  return(
    <main>
      {friendsArray}
    </main> 
  )
}

export default CardCollection;