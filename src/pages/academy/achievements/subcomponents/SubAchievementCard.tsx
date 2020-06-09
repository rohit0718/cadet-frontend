import React from 'react';

import { Card } from '@blueprintjs/core';

type SubachievementCardProps = {
  subachievement: any;
  toggleModalPopup: any;
}

function SubachievementCard(props: SubachievementCardProps) {
  const { subachievement, toggleModalPopup } = props;
  const { title } = subachievement;
  
  console.log(subachievement);

  return (
    <Card className="subachievement" onClick={toggleModalPopup(title)}>
      <h2>{title}</h2>
      {console.log(subachievement)}
    </Card>
  )
}

export default SubachievementCard;
