import React from 'react';
import { Button, Card, Icon } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';

type AchievementCardProps = {
  achievement: any;
  isDropdownOpen: boolean;
  toggleDropdown: any;
  toggleModalPopup: any;
};

function AchievementCard(props: AchievementCardProps) {
  const { achievement, isDropdownOpen, toggleDropdown, toggleModalPopup } = props;
  const { title, subachievements } = achievement;

  const hasSubachievement = subachievements.length !== 0;

  return (
    <Card className="achievement" onClick={toggleModalPopup(title)}>
      { hasSubachievement ? (
        <div className="dropdown">
          <Button
            icon={isDropdownOpen ? IconNames.CARET_DOWN : IconNames.CARET_RIGHT}
            minimal={true}
            onClick={toggleDropdown}
          />
        </div>
      ) : (
        <div className="dropdown"></div>
      )}
      <div className="icon">
        <Icon icon={IconNames.PREDICTIVE_ANALYSIS} iconSize={28} />
      </div>
      <h2>{title}</h2>
    </Card>
  );
}

export default AchievementCard;
