const formatTags = tags => [...tags.map(tag => tag.text)];

const formatFrequency = (times, period) => {
	switch (times) {
		case 'Once':
			return { times: 1, period };
		case 'Twice':
			return { times: 2, period };
		default:
			return { times: Number(times), period };
	}
};

module.exports = { formatTags, formatFrequency };
