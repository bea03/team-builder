import React, { useState } from 'react';
import './App.scss';
import CardBox from './components/CardBox.js';
import Form from './components/Form.js';
import { data } from './data.js';

function App() {
  const [team, setTeam] = useState(data);

  const formAddition = data => {
    data.id = team.length + 1;
    setTeam([...team, data]);
  }

  return (
    <div className="App">
        <div className="cardBoxes">{team.map(data => <CardBox key={data.id} data={data} />)}</div>
        <Form formAddition={formAddition}/>
    </div>
  );
}
export default App;
