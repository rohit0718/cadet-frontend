import React from 'react';

import { Card } from '@blueprintjs/core';

type AchievementModalProps = {
  title: string;
};

function AchievementModal(props: AchievementModalProps) {
  const { title } = props;

  return (
    <div className="modal">
      <Card className="modal-container">
        <h1>{title}</h1>
      </Card>
    </div>
  );
}

export default AchievementModal;
