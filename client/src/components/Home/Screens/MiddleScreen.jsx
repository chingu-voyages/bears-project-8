import React from 'react';
import { darken, lighten } from 'polished';
import { StyledMiddleScreen, HabitStages, HabitStage } from './MiddleScreen.styled';
import { LargeTitle, LargeSubtitle, SmallLink } from '../Home.styled';
import Icon from '../../Shared/Icon/Icon';
import { $violet, $elfGreen, $grey } from '../../../assets/styledVars';

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
				<Icon name="bell" color={darken(0.2, $grey)} />
				<h3>Remind</h3>
				<p>It’s easy to forget — receive an alert when it’s time to start.</p>
			</HabitStage>
			<HabitStage>
				<Icon name="log" color={darken(0.2, $grey)} />
				<h3>Log</h3>
				<p>Keep track of your habits to get insights based on solid data.</p>
			</HabitStage>
			<HabitStage>
				<Icon name="computerGraph" color={darken(0.2, $grey)} />
				<h3>Review</h3>
				<p>Celebrate your successes and learn from your missteps.</p>
			</HabitStage>
		</HabitStages>
		<Icon
			name="circle"
			width={288}
			height={288}
			color={lighten(0.3, $violet)}
			id="circle__one"
		/>
		<Icon
			name="circle"
			width={169}
			height={169}
			color={lighten(0.2, $elfGreen)}
			id="circle__two"
		/>
		<Icon
			name="circle"
			width={260}
			height={260}
			color={lighten(0.2, $elfGreen)}
			id="circle__three"
		/>
	</StyledMiddleScreen>
);
