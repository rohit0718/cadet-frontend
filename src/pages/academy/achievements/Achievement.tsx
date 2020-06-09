import React, { useState } from 'react';

import { IconNames } from '@blueprintjs/icons';

//import defaultCoverImage from '../../../assets/default_cover_image.jpg';
import AchievementCategory from './subcomponents/AchievementCategory';
import AchievementList from './subcomponents/AchievementList';

export type DispatchProps = {};

export type StateProps = {};

const achievementOverview = [
  { title: 'Rune Master', subachievements: ['Beyond the Second Dimension', 'Colorful Carpet'] },
  { title: 'Keyboard Warrior', subachievements: ['Keyboard Warrior: Gold Tier'] },
  { title: 'Adventure Time', subachievements: [] },
]

const subachievementOverview = [
  { title: 'Beyond the Second Dimension' },
  { title: 'Colorful Carpet' },
  { title: 'Keyboard Warrior: Gold Tier' },
]
/*
const modalOverview = [
  { title: 'Rune Master', canvas: 'http://robohash.org/set_set3/bgset_bg2/bWYZFB0dVgz' },
  { title: 'Keyboard Warrior', canvas: 'http://robohash.org/set_set3/bgset_bg2/bWYZFB0dVgz' },
  { title: 'Adventure Time', canvas: 'http://robohash.org/set_set3/bgset_bg2/bWYZFB0dVgz' },
  { title: 'Beyond the Second Dimension', canvas: 'http://robohash.org/set_set3/bgset_bg2/bWYZFB0dVgz' },
  { title: 'Colorful Carpet', canvas: 'http://robohash.org/set_set3/bgset_bg2/bWYZFB0dVgz' },
  { title: 'Keyboard Warrior: Gold Tier', canvas: 'http://robohash.org/set_set3/bgset_bg2/bWYZFB0dVgz' },
]
*/
function Achievement() {
  const [achievementModal, setAchievementModal] = useState(null);

  return (
    <div className="Achievements">
      <div className="achievement-main">
        <div className="icons">
          <div></div>
          <AchievementCategory category={'ALL'} icon={IconNames.GLOBE} count={22} />
          <AchievementCategory category={'ACTIVE'} icon={IconNames.LOCATE} count={15} />
          <AchievementCategory category={'COMPLETED'} icon={IconNames.ENDORSED} count={7} />
        </div>

        <div className="cards">
          <AchievementList 
            achievementOverview={achievementOverview} 
            subachievementOverview={subachievementOverview}
            setModal={setAchievementModal}
          />
        </div>

        {achievementModal}
      </div>
    </div>
  );
}

export default Achievement;
