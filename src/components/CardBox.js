import React from 'react';
import { Card, Icon } from 'semantic-ui-react';

const CardBox = (props) => {
  console.log(props);
  return (
      <Card>
          <Card.Content header={props.data.name} />
          <Icon name='user' />
          <Card.Content description={props.data.email} />
          <Card.Content description={props.data.role} />
      </Card> );
};

export default CardBox;
