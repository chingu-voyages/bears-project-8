/* eslint-disable no-nested-ternary */
import endOfWeek from 'date-fns/end_of_week';
import endOfDay from 'date-fns/end_of_day';
import endOfMonth from 'date-fns/end_of_month';
import differenceInHours from 'date-fns/difference_in_hours';
import differenceInDays from 'date-fns/difference_in_calendar_days';

// TODO: account for when the habit was last logged, and the habit frequency
export default frequency => {
	const today = new Date();

	switch (frequency) {
		case 'Daily': {
			const diff = differenceInHours(endOfDay(today), Date.now());
			const timeWord = diff > 1 ? 'hours' : 'hour';
			return `Due in ${diff} ${timeWord}`;
		}
		case 'Weekly': {
			let diff = differenceInDays(endOfWeek(today), Date.now());
			let timeWord;
			if (diff <= 1) {
				diff = differenceInHours(endOfWeek(today), Date.now());
				timeWord = diff > 1 ? `in ${diff} hours` : 'an hour';
			} else {
				timeWord = diff === 1 ? 'tomorrow' : diff === 0 ? 'today' : `in ${diff} days`;
			}
			return `Due ${timeWord}`;
		}
		case 'Monthly': {
			let diff = differenceInDays(endOfMonth(today), Date.now());
			let timeWord;
			if (diff <= 1) {
				diff = differenceInHours(endOfMonth(today), Date.now());
				timeWord = diff > 1 ? `in ${diff} hours` : 'an hour';
			} else {
				timeWord = diff === 1 ? 'tomorrow' : diff === 0 ? 'today' : `in ${diff} days`;
			}
			return `Due ${timeWord}`;
		}
		default:
			return '';
	}
};
