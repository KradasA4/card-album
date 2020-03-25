import React, { Fragment } from 'react';
import { friends } from './Friends';
import CardCollection from './CardCollection';

const App = () => {
  return(
  <Fragment>

    <CardCollection friends={friends} />


  </Fragment>
  ) 
}

export default App;