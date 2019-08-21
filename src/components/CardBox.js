import React from 'react';

const CardBox = (props) => {
  console.log(props);
  return (
      <div>
          {<h2>{props.data.name}</h2>}
          {<p>{props.data.email}</p>}
          {<p>{props.data.role}</p>}
      </div> );
}

export default CardBox;
