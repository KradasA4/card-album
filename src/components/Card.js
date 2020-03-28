import React from 'react';

const Card = (props) => {

  return(
    <article className="tc bg-light-blue br3 pa3 ma3 dib grow bw1 ba shadow-5">
      <img src={props.display} alt="friends-profile-pic"/>
      <div>
        <h2>{props.fullName}</h2>
        <p>{props.github}</p>
        {/* <h2>{props.name}</h2>
        <p>{props.email}</p> */}
      </div>
    </article>
  );
}

export default Card;