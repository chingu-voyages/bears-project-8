/* eslint-disable no-nested-ternary */
import endOfWeek from 'date-fns/end_of_week';
import endOfDay from 'date-fns/end_of_day';
import endOfMonth from 'date-fns/end_of_month';
import differenceInHours from 'date-fns/difference_in_hours';
import differenceInDays from 'date-fns/difference_in_calendar_days';

export default frequency => {
	const today = new Date();

	switch (frequency) {
		case 'Daily': {
			const diff = differenceInHours(endOfDay(today), Date.now());

			return `Due in ${diff} ${diff > 1 ? 'hours' : 'hour'}`;
		}
		case 'Weekly': {
			const diff = differenceInDays(endOfWeek(today), Date.now());
			// TODO: Handle case when the date is the last day due and difference should be calculated in hours instead of days
			return `Due ${diff === 1 ? 'tomorrow' : diff === 0 ? 'today' : `in ${diff} days`}`;
		}
		case 'Monthly': {
			const diff = differenceInDays(endOfMonth(today), Date.now());

			return `Due ${diff === 1 ? 'tomorrow' : diff === 0 ? 'today' : `in ${diff} days`}`;
		}
		default:
			return '';
	}
};
