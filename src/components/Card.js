import React, { useState } from 'react';

import { data } from '../data.js';
import CardBox from './CardBox.js';

const Card = () => {

  const [team, setTeam] = useState(data);

  return (
    <>
      {team.map(data => <CardBox key={data.id} data={data} />)}
    </>
  );
};

export default Card;
