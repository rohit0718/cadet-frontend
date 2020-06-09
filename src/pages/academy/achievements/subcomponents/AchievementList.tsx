import React, { useState } from 'react';

import AchievementCard from './AchievementCard';
import SubAchievementCard from './SubachievementCard';
import AchievementModal from './AchievementModal';

type AchievementListProps = {
  achievementOverview: any[];
  subachievementOverview: any[];
  setModal: any;
}

function AchievementList(props: AchievementListProps) {
  const { achievementOverview, subachievementOverview, setModal } = props;
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const toggleAchievementDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  };

  const dropdownContent = (subachievements: string[]) => 
    subachievements.map(dropdownTitle => 
      subachievementOverview.filter(subachievement => subachievement.title === dropdownTitle));

  const toggleModalPopup = (title: string) => {
    return () => setModal(<AchievementModal title={title} />)
  };

  return (
    <ul>
      {achievementOverview.map(achievement => 
        <li>
          <AchievementCard 
            achievement={achievement}
            isDropdownOpen={isDropdownOpen}
            toggleDropdown={toggleAchievementDropdown}
            toggleModalPopup={toggleModalPopup}
          />
          { isDropdownOpen ? 
            dropdownContent(achievement.subachievements).map(subachievement =>
              <SubAchievementCard 
                subachievement={subachievement}
                toggleModalPopup={toggleModalPopup}
              />)
            : <div></div> }
        </li>)}
    </ul>
  );
}

export default AchievementList;
