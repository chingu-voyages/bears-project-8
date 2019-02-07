import React from 'react';
import { StyledMiddleScreen, HabitStages, HabitStage } from './MiddleScreen.styled';
import { LargeTitle, LargeSubtitle, SmallLink } from '../Home.styled';
import Icon from '../../Shared/Icon/Icon';
import { $mintLight, $purpleLight, $elfGreen, $greyDark } from '../../../assets/styledVars';

export default () => (
	<StyledMiddleScreen>
		<LargeTitle>Forty percent of what we do every day is an unthinking habit.*</LargeTitle>
		<SmallLink href="https://dornsife.usc.edu/assets/sites/545/docs/Wendy_Wood_Research_Articles/Habits/Neal.Wood.Quinn.2006_Habits_a_repeat_performance.pdf">
			* Duke University (2006) — Current Trends in Psychological Science
		</SmallLink>
		<LargeSubtitle>By shaping our habits, we can consciously direct our lives.</LargeSubtitle>
		<HabitStages>
			<HabitStage>
				<Icon name="write" color={$elfGreen} />
				<h3>Define</h3>
				<p>Choose which habits you want in your life. Start small.</p>
			</HabitStage>
			<HabitStage>
				<Icon name="bell" color={$greyDark} />
				<h3>Remind</h3>
				<p>It’s easy to forget — receive an alert when it’s time to start.</p>
			</HabitStage>
			<HabitStage>
				<Icon name="log" color={$greyDark} />
				<h3>Log</h3>
				<p>Keep track of your habits to get insights based on solid data.</p>
			</HabitStage>
			<HabitStage>
				<Icon name="computerGraph" color={$greyDark} />
				<h3>Review</h3>
				<p>Celebrate your successes and learn from your missteps.</p>
			</HabitStage>
		</HabitStages>
		<Icon name="circle" width={288} height={288} color={$purpleLight} id="circle__one" />
		<Icon name="circle" width={169} height={169} color={$mintLight} id="circle__two" />
		<Icon name="circle" width={260} height={260} color={$mintLight} id="circle__three" />
	</StyledMiddleScreen>
);
